import debug from "debug";

class KOLogger {
  debugus = {};
  debugNameSpaces = ["events", "start-up", "pages", "config"];
  createNameSpacesDebug = null;
  appName = "";

  constructor(appName = "kotii", nameSpaces = null) {
    this.appName = appName;
    this.createNameSpacesDebug = debug("KOLogger:namespaces");

    if (!nameSpaces) {
      this.createNameSpaces(this.debugNameSpaces);
    } else {
      this.createNameSpaces(nameSpaces);
    }
  }
  log = (scope, message) => {
    const self = this;

    if (self.debugus[scope]) return self[scope](scope, message);
    console.log(message);
    const msg = debug("kotii:log");
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
  setNameSpaces(namespaces) {
    this.createNameSpaces(namespaces);
  }
  createNameSpaces = (nameSpaces) => {
    nameSpaces.forEach((debugr, i) => {
      this.createNameSpacesDebug(
        "Creating debug namespace=>",
        `${this.appName}:${debugr}`
      );
      let debugrID = debugr?.namespace ? debugr.id : debugr;
      if (typeof debugr == "string") {
        this.debugus[debugrID] = {
          log: debug(`kotii:${debugrID}`),
        };
      } else {
        this.debugus[debugrID] = {
          log: debug(`kotii:${debugr.namespace}`),
        };
      }

      this.debugus[debugrID].log.enabled = true;
      this.debugus[debugrID].log.useColors = true;
    });
  };
}

const logger = new KOLogger();
const { log, events } = logger;
let loggas = logger.debugus;
export { logger, KOLogger, log, events, loggas };
