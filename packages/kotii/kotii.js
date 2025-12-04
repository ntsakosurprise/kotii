#!/usr/bin/env node

// const { fork } = require("child_process");
// const path = require("path");
// const cli = require("./cli.cjs");
// const { parseScriptArguments } = cli;
// const { replaceKotiiJsFilesContent } = require("kotii-create-time");
import { fork } from "child_process";
import path from "path";
import cli from "./cli.cjs"; // CJS → ESM default import
import { replaceKotiiJsFilesContent } from "kotii-creation-time"; // CJS package import

const { parseScriptArguments } = cli; // Destructure CJS exports

let RESTART_RETRIES = 3;
let RESTART_TIMES = 0;
let SHOULD_RESTART = false;
let childProcess = null;

const commands = parseScriptArguments();
const commandToRun = commands[0];
console.log("THE COMMAND TO RUN", commandToRun, commands);

const childPath = path.resolve("./node_modules/kotii/kotii_start.js");

const createChildProcess = (isaRestart = false) => {
  if (!isaRestart) {
    return fork(childPath);
  } else {
    return fork(childPath, {
      env: {
        ...process.env,
        ANZII_OPEN_BROWSER: "false",
        CUSTOM_RESTART: "true",
      },
    });
  }
};
const attachListenerToChildProcess = () => {
  // Listen for messages from the child

  childProcess.on("message", (msg) => {
    console.log("RECEIVED MESSAGE!", msg);
    if (msg.event === "send-commands") {
      childProcess.send({
        event: "take-commands",
        data: { commandToRun, commands },
      });
    } else if (msg.event === "destroy-child") {
      console.log("RESTARTING THE APP");
      SHOULD_RESTART = true;
      if (childProcess && childProcess.kill) {
        console.log("Killing old child process:", childProcess.pid);
        childProcess.kill(); // sends SIGTERM by default
      }
    }
  });

  childProcess.once("exit", () => {
    console.log("Restarting after exit", SHOULD_RESTART);
    if (SHOULD_RESTART) {
      SHOULD_RESTART = false;
      startApp(true); // safe restart after exit
    }
  });

  childProcess.on("exit", (code) => {
    console.log("I'M DYING OF THIRST", code);

    if (code === 50) {
      if (RESTART_RETRIES > RESTART_TIMES) {
        RESTART_TIMES = RESTART_TIMES + 1;
        replaceKotiiJsFilesContent().then((result) => {
          startApp();
        });
      }
    }
  });
};
const sendCommandsEvent = () => {
  childProcess.send({
    event: "take-commands",
    data: { commandToRun, commands },
  });
};
const startApp = (isaRestart = false) => {
  childProcess = createChildProcess(isaRestart);

  // Gracefully kill the old child first
  attachListenerToChildProcess();

  sendCommandsEvent();

  console.log("App has been started...");
};

process.on("SIGINT", () => {
  console.log("Parent received SIGINT");
  childProcess.kill("SIGINT"); // forward to child
});

startApp();
