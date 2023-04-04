#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js"
import minimist from "minimist"
import express from "express"

var argv = minimist(process.argv.slice(2));
var app = express()

const port = argv.port || 5000;