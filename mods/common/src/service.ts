/*
 * Copyright (C) 2024 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/routr
 *
 * This file is part of Routr
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import { ObjectProto, ServiceInfo } from "./types"
import { ServiceDefinitionNotFoundError } from "./errors"
import { getLogger } from "@fonoster/logger"
import { useHealth } from "@fonoster/grpc-health-check"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const interceptor = require("@fonoster/grpc-interceptors")

const logger = getLogger({ service: "common", filePath: __filename })

const loadOptions = {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}
// TODO: Get version from the proto or package
const API_VERSION = "v2beta1"

// We currently don't have a way to obtain the proto type
export const PROCESSOR_OBJECT_PROTO = getObjectProto({
  name: "processor",
  version: API_VERSION,
  path: __dirname + "/protos/processor.proto"
})

export const LOCATION_OBJECT_PROTO = getObjectProto({
  name: "location",
  version: API_VERSION,
  path: __dirname + "/protos/location.proto"
})

/**
 * Gets the proto definition for the given object.
 *
 * @param {ObjectProt} objectProto - The object proto to load.
 * @return {A} The proto definition.
 */
export function getObjectProto<A>(
  objectProto: ObjectProto
): A | ServiceDefinitionNotFoundError {
  const definitions = protoLoader.loadSync(objectProto.path, loadOptions)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const objProto = (grpc.loadPackageDefinition(definitions) as any)?.fonoster
    ?.routr[objectProto.name]
  return objProto?.[objectProto.version]
    ? objProto[objectProto.version]
    : new ServiceDefinitionNotFoundError(objectProto.name, objectProto.version)
}

/**
 * Creates a new service using the given service definition.
 *
 * @param {ServiceInfo} serviceInfo - The service info to create the service from.
 */
export default function createService(serviceInfo: ServiceInfo) {
  const cb = () => {
    logger.info("starting routr service", {
      name: serviceInfo.name,
      bindAddr: serviceInfo.bindAddr
    })
  }
  const credentials = grpc.ServerCredentials.createInsecure()
  const server = new grpc.Server()
  server.addService(serviceInfo.service, serviceInfo.handlers)

  const withHealthChecks = interceptor.serverProxy(useHealth(server))
  withHealthChecks.bindAsync(serviceInfo.bindAddr, credentials, cb)
}
