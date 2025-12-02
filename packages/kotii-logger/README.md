<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>Kotii-Logger</strong>
  </a>
</p>

Kotii-logger is a flexible and lightweight logger for JavaScript/Node.js projects, supporting namespaces and environment-based log level control.

## Features

- Namespace-based logging for organized output
- Configurable log levels via environment variables
- Easy-to-use API with multiple logger instances
- Supports debug, info, warn, and error logs

## Installation

```bash
npm install kotii-logger
```

## Usage

### Importing the Logger

```js
import { KOLogger, loggas, logger } from "kotii-logger";
```

## Setting Namespaces

Define different namespaces for various parts of your application:

```js
logger.setNameSpaces([
  { namespace: "app:start-client", id: "appClient" },
  { namespace: "app:start-server", id: "appServer" },
  { namespace: "app:demo", id: "app" },
]);
```

## Logging Examples

```js
// Standard log
logger.log("appClient", "Client started successfully");

// Debug log
logger.debug("appServer", "Server configuration loaded");

// Warning log
logger.warn("app", "This is a warning message");

// Error log
logger.error("app", "An error occurred while processing the request");

// Quick log
loggas("This is a quick log message");

// Using KOLogger instance
const myLogger = new KOLogger("myNamespace");
myLogger.info("Hello from KOLogger!");
```

## Environment Variables

Control what logs are displayed using environment variables:

```js
export KOTII_SHOW_ALL_LOGS=true      # Show all logs
export KOTII_SHOW_DEBUG_LOGS=true    # Show debug logs
```

## Example Behaviour

| KOTII_SHOW_ALL_LOGS | KOTII_SHOW_DEBUG_LOGS | Output Example                                          |
| ------------------- | --------------------- | ------------------------------------------------------- |
| true                | true                  | All logs (info, warn, error, debug) are shown           |
| true                | false                 | Info, warn, error logs are shown; debug logs are hidden |
| false               | true                  | Only debug logs are shown; info, warn, error are hidden |
| false               | false                 | Minimal logs; only essential output is shown            |

## Example

```js
export KOTII_SHOW_ALL_LOGS=false
export KOTII_SHOW_DEBUG_LOGS=true
```

```js
logger.log("appClient", "Client started"); // NOT shown
logger.debug("appServer", "Server loaded"); // SHOWN
logger.error("app", "Something failed"); // NOT shown
```

## API Reference

| Function/Method               | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| `logger.setNameSpaces(array)` | Sets namespaces with IDs for structured logging     |
| `logger.log(id, message)`     | Logs a standard message for a namespace             |
| `logger.debug(id, message)`   | Logs a debug message                                |
| `logger.warn(id, message)`    | Logs a warning message                              |
| `logger.error(id, message)`   | Logs an error message                               |
| `loggas(message)`             | Quick logging utility                               |
| `KOLogger(namespace)`         | Creates a dedicated logger instance for a namespace |

# Questions & Support

For questions and support please use kotii-loggerjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii-logger/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/kotii-logger/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/kotii-logger/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/kotii-logger/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/kotii-logger/development/CONTRIBUTING.md) before making a pull request. If you have kotii-logger feature you want to integrate, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/kotii-logger/development/LICENSE.md) file for details.

copyright (c) 2018-present. Ntsako (Surprise) Mashele

# Questions & Support

For questions and support please use kotii-loggerjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii-logger/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/kotii-logger/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/kotii-logger/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/kotii-logger/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/kotii-logger/development/CONTRIBUTING.md) before making a pull request. If you have an kotii-logger plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/kotii-logger/development/LICENSE.md) file for details.

copyright (c) 2018-present. Ntsako (Surprise) Mashele
