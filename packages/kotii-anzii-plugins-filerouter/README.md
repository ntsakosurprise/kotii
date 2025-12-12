<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>@kotii/anzii-plugins-filerouter</strong>
  </a>
</p>

# @kotii/anzii-plugins-react

# FileRouter

**FileRouter** is an advanced file-based routing engine that automatically scans your filesystem, parses your files into ASTs, generates React components, builds static and lazy route imports, processes Markdown, and maintains a live routing manifest with caching and file watching.

It is designed for frameworks, CLIs, meta-frameworks, static site generators, or any environment that needs automatic routing from the filesystem.

---

## 🚀 Features

### 📁 File-Based Routing

- Reads your directory structure and converts it automatically into route definitions
- Supports dynamic route parameters like:
  - `[id]`
  - `[...slug]`
  - `[[...optional]]`
- Extracts metadata from file names and folder structure

---

### ⚙️ AST-Driven Code Generation

- Uses Babel to parse, modify, and generate code
- Creates router components automatically
- Inserts or removes import declarations based on live changes
- Supports JSX → React AST conversion

---

### 🧠 Markdown Engine

- Detects `.md` and `.mdx` files
- Converts them into AST nodes with metadata
- Generates Markdown variable exports
- Creates Markdown route entries seamlessly

---

### 🌀 Static & Lazy Imports

- Static imports (default)
- Dynamic lazy imports (`React.lazy`) when `useLazyLoad="dynamic"` is enabled
- Dedupes imports and avoids duplicates through AST detection

---

### 👁️ File Watcher

Watches directories for:

- File additions
- File deletions
- File changes (using caching logic)

Updates the routing manifest **instantly**.

---

### 🌐 Server Routes Support

- Generates server-specific routes
- Extracts server state from components

---

### 💾 Cache System

- Persists discovered file lists
- Detects changes and decides whether re-generation is needed
- Supports incremental builds

## Installation

```bash
npm install @kotii/anzii-plugins-filerouter
```

## Registering with anzii in kotii

```js
import { anzii } from "anzii";
import Filerouter from "@kotii/anzii-plugins-filerouter";

const plugins = {
  Filerouter: Filerouter,
};

anzii(plugins);
```

## Emmitting the Events

```js
class Hello {
  constructor(pao) {
    this.pao = pao; // Every plugin is passed this object
  }

  init() {
    this.listens({
      "handle-hello-task": this.handleHelloTask.bind(this), // Event and handling method
    });
  } // Define the required init() method

  handleHelloTask(data) {
    const self = this;

    self.callback = data.callback;

    // SSR a Single React View

    self.emit({
      type: "handle-react-view",
      data: {
        view: { match: "/home" },
        payload: {},
        callback: (err, html) => {
          console.log(html);
        },
      },
    });





}

export default Hello;
```

# Questions & Support

For questions and support please use @kotii/anzii-plugins-reactjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/ntsakosurprise/kotii/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/ntsakosurprise/kotii/CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/ntsakosurprise/kotii/RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/ntsakosurprise/kotii/CONTRIBUTING.md) before making a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/ntsakosurprise/kotii/LICENSE.md) file for details.

© Kotii Ecosystem 2025-present. Ntsako (Surprise) Mashele

```

```
