/*
 * Copyright (C) 2022 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/routr
 *
 * This file is part of Routr
 *
 * Licensed under the MIT License (the "License")
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
export interface ConnectProcessorConfig {
  bindAddr: string
  locationAddr: string
}

export enum RoutingType {
  EGRESS_ROUTING = 'egress-routing',
  INGRESS_ROUTING = 'ingress-routing',
  INTRA_DOMAIN_ROUTING = 'intra-domain-routing',
}

export interface Authentication {}

export interface ConnectObject {
  type: RoutingType | "error"
  // Base64 encoded string with username:password
  authentication: string
  headers?: Map<string, string>
}
