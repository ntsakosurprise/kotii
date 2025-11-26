# Kotii Logger — API Reference

This document provides a complete reference of all public APIs exposed by **kotii-logger**.

---

## Table of Contents

- [Imports](#imports)
- [Logger Object](#logger-object)
  - [logger.setNameSpaces()](#loggersetnamespaces)
  - [logger.log()](#loggerlog)
  - [logger.info()](#loggerinfo)
  - [logger.debug()](#loggerdebug)
  - [logger.warn()](#loggerwarn)
  - [logger.error()](#loggererror)
- [KOLogger Class](#kologger-class)
  - [new KOLogger()](#new-kologger)
  - [KOLogger.log()](#kologgerlog)
  - [KOLogger.info()](#kologgerinfo)
  - [KOLogger.debug()](#kologgerdebug)
  - [KOLogger.warn()](#kologgerwarn)
  - [KOLogger.error()](#kologgererror)
- [loggas Utility](#loggas-utility)
- [Environment Variables](#environment-variables)
- [Namespace Configuration](#namespace-configuration)
- [Examples](#examples)

---

## Imports

Import any combination of the logger utilities:

```javascript
import { logger, KOLogger, loggas } from "kotii-logger";
```

# 🧾 Logger Object

The **Logger Object** provides a namespace-based logging API for structured and organized logging.

---

## 🔧 `logger.setNameSpaces()`

The `setNameSpaces` method allows you to define or update logging namespaces used throughout the application.

```js
logger.setNameSpaces(
  nameSpaces: Array<{ namespace: string; id: string }>
): void
```

Registers namespaces for structured logging.

| Name      | Type   | Description                                        |
| --------- | ------ | -------------------------------------------------- |
| namespace | string | Readable namespace name (ex: `"app:start-server"`) |
| id        | string | Unique ID used internally to reference logs        |

#### Example

```js
logger.setNameSpaces([
  { namespace: "app:start-client", id: "appClient" },
  { namespace: "app:start-server", id: "appServer" },
]);
```

---

### logger.log()

```js
logger.log(id: string, message: string): void
```

Logs a standard, general-purpose message.

---

### logger.info()

```js
logger.info(id: string, message: string): void
```

Logs an informational message.

---

### logger.debug()

```js
logger.debug(id: string, message: string): void
```

Logs a debug-level message.\
Visibility controlled by:

- `KOTII_SHOW_DEBUG_LOGS`

- `KOTII_SHOW_ALL_LOGS`

---

### logger.warn()

```js
logger.warn(id: string, message: string): void
```

Logs a warning message.

---

### logger.error()

```js
logger.error(id: string, message: string): void
```

Logs an error message.

---

## KOLogger Class

The `KOLogger` class creates a dedicated logger bound to a single namespace.

---

### new KOLogger()

```js
new  KOLogger(namespace: string)
```

Creates a new logger instance scoped to a given namespace.

#### Example

```js
const apiLogger = new KOLogger("api");
```

---

### KOLogger.log()

```js
KOLogger.log(message: string): void
```

---

### KOLogger.info()

```js
KOLogger.info(message: string): void
```

---

### KOLogger.debug()

```js
KOLogger.debug(message: string): void
```

---

### KOLogger.warn()

```js
KOLogger.warn(message: string): void
```

---

### KOLogger.error()

```js
KOLogger.error(message: string): void
```

---

## loggas Utility

A small helper for quick and unstructured logging.

---

### loggas()

```js
loggas(message: any): void
```

A shortcut for simple logs without namespace or formatting.

#### Example

```js
loggas("Quick message");
```

---

## Environment Variables

Environment variables control visibility of certain log levels at runtime.

---

### KOTII_SHOW_ALL_LOGS

```js
export KOTII_SHOW_ALL_LOGS=true
```

When enabled:

- all logs (info, warn, error, debug) are shown.

---

### KOTII_SHOW_DEBUG_LOGS

```js
export KOTII_SHOW_DEBUG_LOGS=true
```

When enabled:

- debug logs are shown

- but other logs still depend on `KOTII_SHOW_ALL_LOGS`

---

### Log Visibility Matrix

| KOTII_SHOW_ALL_LOGS | KOTII_SHOW_DEBUG_LOGS | Visible Logs      |
| ------------------- | --------------------- | ----------------- |
| true                | true                  | All logs shown    |
| true                | false                 | info, warn, error |
| false               | true                  | debug only        |
| false               | false                 | minimal output    |

---

## Namespace Configuration

Each namespace entry looks like:

```js
{ namespace: "app:start-client", id: "appClient" }
```

- **namespace** = human readable name

- **id** = key used when logging

This allows clean separation of logs from different modules.

---

## Examples

### Basic Usage

```js
import { logger } from "kotii-logger";

logger.setNameSpaces([{ namespace: "app:start-server", id: "server" }]);

logger.log("server", "Server started");
logger.debug("server", "Debug details");
```

---

### Using KOLogger

```js
import { KOLogger } from "kotii-logger";
const dbLogger = new KOLogger("database");

dbLogger.info("Connecting...");
dbLogger.error("Connection failed");
```

---

### Quick Logging

```js
import { loggas } from "kotii-logger";
loggas("Just a quick log");
```
