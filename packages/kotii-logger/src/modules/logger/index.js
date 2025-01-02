import debug from "debug";

class KOLogger {
  debugus = {};
  debugNameSpaces = [
    { namespace: "events", id: "event" },
    { namespace: "start-up", id: "startUp" },
    { namespace: "pages", id: "pages" },
    { namespace: "config", id: "config" },
  ];
  envLoggingContainer = null;
  createNameSpacesDebug = null;
  appName = "";

  constructor(appName = "kotii", nameSpaces = null) {
    this.appName = appName;
    this.createNameSpacesDebug = debug("KOLogger:namespaces");
    this.createEnvironment();

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
    const self = this;
    nameSpaces.forEach((debugr, i) => {
      this.createNameSpacesDebug(
        "Creating debug namespace=>",
        `${this.appName}:${debugr}`
      );
      let debugrID = debugr?.namespace ? debugr.id : debugr;
      let logger = debug(`kotii:${debugr.namespace}`);
      logger.enabled = true;
      logger.useColors = true;

      this.debugus[debugrID] = {
        info: function (...message) {
          logger(...message);
        },
        debug: function (...message) {
          if (!this.shouldShowDebugLogs) return;
          logger(...message);
        },
        log: function (...message) {
          if (!this.shouldShowStandardLogs) return;
          logger(...message);
        },
      };

      // this.debugus[debugrID].log.enabled = true;
      // this.debugus[debugrID].log.useColors = true;
    });
  };

  createEnvironment = () => {
    const isEnvDev =
      process.env?.NODE_ENV && process.env.NODE_ENV === "development"
        ? true
        : false;
    const showAllLogsSet = process.env.KOTII_SHOW_ALL_LOGS || "true";
    const debugLogsSet = process.env.KOTII_SHOW_DEBUG_LOGS || "false";
    const warningLogsSet = process.env.ANZII_SHOW_WARNING_LOGS || "true";
    const errorLogsSet = process.env.ANZII_SHOW_ERROR_LOGS || "true";
    const showStandardLogsSet = process.env.ANZII_SHOW_LOGS || "true";
    const shouldShowAllLogs = showAllLogsSet === "true" ? true : false;

    const shouldShowDebugLogs =
      debugLogsSet === "true" && shouldShowAllLogs ? true : false;
    const shouldShowWarningLogs =
      warningLogsSet === "true" && shouldShowAllLogs ? true : false;
    const shouldShowErrorLogs =
      errorLogsSet === "true" && shouldShowAllLogs ? true : false;
    const shouldShowStandardLogs =
      showStandardLogsSet && isEnvDev && shouldShowAllLogs ? true : false;

    this.envLoggingContainer = {
      shouldShowStandardLogs,
      shouldShowStandardLogs,
      shouldShowDebugLogs,
      shouldShowWarningLogs,
      shouldShowErrorLogs,
    };
  };
}

const logger = new KOLogger();
const { log, events } = logger;
let loggas = logger.debugus;
export { logger, KOLogger, log, events, loggas };
