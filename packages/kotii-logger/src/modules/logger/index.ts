const debug = require("debug");

class KOLogger {
  debugas: object = {};
  debugasy = ["events", "start-up", "pages", "config"];

  constructor() {
    this.debugasy.forEach((debugr, i) => {
      console.log("KOLogger initializing;;;", `kotii:${debugr}`);
      this.debugas[debugr] = debug(`kotii:${debugr}`);
    });
  }
  public log = (scope: string, message: string) => {
    const self = this;
    console.log("THE DEBUGAS;;;", self.debugas);
    console.log("THE SCOPE", scope);
    console.log(">>> PROCESS", process.env);
    if (self.debugas[scope]) return self[scope](scope, message);
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
    const debugrr = self.debugas[debugr];
    if (!debugrr.enabled) debugrr.enabled = true;
    debugrr(message);
    return true;
  };
}

const logger = new KOLogger();

export { logger, KOLogger };
