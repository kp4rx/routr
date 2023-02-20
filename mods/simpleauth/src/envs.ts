/*
 * Copyright (C) 2023 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster
 *
 * This file is part of Routr.
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
import { Assertions as A } from "@routr/common"

A.assertEnvsAreSet(["PATH_TO_AUTH", "METHODS"])

export const BIND_ADDR = process.env.BIND_ADDR ?? "0.0.0.0:51903"
export const WHITELIST = process.env.WHITELIST?.split(",") ?? []
export const METHODS = process.env.METHODS?.split(",") ?? []
export const PATH_TO_AUTH = process.env.PATH_TO_AUTH