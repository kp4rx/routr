/*
 * Copyright (C) 2022 by Fonoster Inc (https://fonoster.com)
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
import { SimpleDataConfig } from "./types"
import { CommonConnect as CC } from "@routr/common"
import { nyi } from "./utils"
import { findBy, get } from "./api"
import * as grpc from "@grpc/grpc-js"
import { getLogger } from "@fonoster/logger"

const logger = getLogger({ service: "simpledata", filePath: __filename })

/**
 * Starts a new simple data service.
 *
 * @param {SimpleDataConfig} config - the configuration of the service
 */
export default function simpleDataService(config: SimpleDataConfig): void {
  const { bindAddr } = config
  logger.info("starting routr service", { bindAddr, name: "simpledata" })
  const server = new grpc.Server()

  server.addService(CC.RESOURCES_PROTO.v2draft1.Resources.service, {
    get: get(config.resources),
    findBy: findBy(config.resources),
    delete: nyi,
    update: nyi,
    create: nyi,
    list: nyi
  })

  server.bindAsync(
    config.bindAddr,
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start()
    }
  )
}