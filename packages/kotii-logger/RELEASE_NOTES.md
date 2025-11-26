# Kotii Logger — Release Notes

## v1.0.0 — Initial Stable Release

**Release Date:** _YYYY-MM-DD_

### 🎉 Highlights

This is the first stable release of **Kotii Logger**, a lightweight, flexible logging solution for Node.js and JavaScript applications.  
It introduces a clean API, namespace-based logging, and environment-driven log filtering.

### ✨ New Features

- **Namespace-based logging system**
  - Define namespaces with unique IDs for structured output.
- **Environment variable log filtering**
  - `KOTII_SHOW_ALL_LOGS` — Enable/disable all logs.
  - `KOTII_SHOW_DEBUG_LOGS` — Enable/disable debug logs.
- **Logging levels**
  - `log`, `info`, `debug`, `warn`, `error`
- **KOLogger class**
  - Create dedicated logger instances per namespace.
- **Quick logging utility**
  - `loggas()` for simple one-off logs.
- **Extensible architecture**
  - Designed for future transports (file, cloud, etc.)

### 🛠 Improvements

- Cleaned up internal structure for easier extension.
- Improved formatting of console logs.
- Standardized project exports:
  ```javascript
  import { logger, KOLogger, loggas } from "kotii-logger";
  ```

# 📚 Documentation

- Added full README with usage examples.
- Added Roadmap outlining future development.

# 🔧 Internal

- Project prepared for future TypeScript support.
- Ensured compatibility with modern ESM Node.js projects.

---

## v1.0.1 — Patch Release

**Status:** Not yet released — placeholder for future updates

### Fixes

- Minor configuration validation improvements.
- Small performance tweaks.

---

## Upcoming Releases

See the full roadmap in [ROADMAP](./ROADMAP.md).

---
