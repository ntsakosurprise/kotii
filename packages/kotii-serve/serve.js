#!/usr/bin/env node --no-warnings
/* eslint-disable no-unused-vars */
import { register } from "node:module";
import { pathToFileURL, fileURLToPath } from "node:url";
import utils from "./utils.cjs";
import { anzii } from "anzii";
import plugins from "./plugins/index.js";
const __filename = fileURLToPath(import.meta.url);
const { getAndSetEnvironmentVariables, parseContextArguments } = utils;
getAndSetEnvironmentVariables("");
anzii(plugins);
