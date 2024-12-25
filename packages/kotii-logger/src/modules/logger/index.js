import debug from "debug";

class KOLogger {
  debugus = {};
  debugNameSpaces = ["events", "start-up", "pages", "config"];

  constructor(appName = "kotii", nameSpaces = null) {
    let initializeDebug = debug("KOLogger:initializing");
    if (!nameSpaces) {
      this.debugNameSpaces.forEach((debugr, i) => {
        initializeDebug("Creating debug namespace=>", `${appName}:${debugr}`);
        this.debugus[debugr] = debug(`kotii:${debugr}`);
      });
    } else {
      nameSpaces.forEach((debugr, i) => {
        initializeDebug("Creating debug namespace=>", `${appName}:${debugr}`);
        this.debugus[debugr] = debug(`kotii:${debugr}`);
      });
    }
  }
  log = (scope, message) => {
    const self = this;
    console.log("THE debugus;;;", self.debugus);
    console.log("THE SCOPE", scope);
    console.log(">>> PROCESS", process.env);
    if (self.debugus[scope]) return self[scope](scope, message);
    console.log(message);
    const msg = debug("kotii:log");
    console.log(">>> PROCESS", process.env);
    console.log(">>> Debugr enabled?", debug.enabled);
    console.log(">>> The value of return debug", msg);
    console.log(">>> With REACT ENV VAR", process.env.REACT_APP_KOTII_DEBUG);
    console.log(">>> The value of this", this);
    msg.enabled = true;
    msg("I am the message");
    return true;
  };

  events = (debugr, message) => {
    const self = this;
    const debugrr = self.debugus[debugr];
    if (!debugrr.enabled) debugrr.enabled = true;
    debugrr(message);
    return true;
  };
}

const logger = new KOLogger();
const { log, events } = logger;
export { logger, KOLogger, log, events };
