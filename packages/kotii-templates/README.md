<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>Kotii-Templates</strong>
  </a>
</p>

**kotii-templates** is a lightweight template provider for the Kotii ecosystem.  
It delivers ready-to-use **SSR (Server-Side Rendering)** and **SPA (Single-Page Application)** templates, supporting both **JavaScript** and **TypeScript** project setups.

The package exposes a single class, `Template`, that allows developers to fetch template paths and manage template generation dynamically.

---

## Features

- Supports **SSR** and **SPA** templates
- Works with **JavaScript** and **TypeScript**
- Unified `Template` API for template resolution
- Lightweight and modular
- Ideal for scaffolding, CLI generators, or project bootstrapping

---

## Installation

```bash
npm install kotii-templates
```

## Requesting a Template

In an event-driven architecture, templates are requested by emitting an event:

```js
self.emit({
  type: "get-template",
  data: {
    name: apptype, // "spa" or "ssr"
    type: template, // "javascript" or "typescript"
    callback: (templateInfo) => {
      console.log("The template info:", templateInfo);

      let kotiiMain = options["local-scripts"] || null;
      let kotiiPackages = kotiiMain ? path.join(kotiiMain, "./packages") : null;

      resolve({
        newFolder,
        folderName,
        repoUrl,
        ...templateInfo,
        kotiiMain,
        kotiiPackages,
      });
    },
  },
});
```

## Template variants

| Rendering Mode | Language   | Example Identifier |
| -------------- | ---------- | ------------------ |
| SSR            | JavaScript | `ssr/javascript`   |
| SSR            | TypeScript | `ssr/typescript`   |
| SPA            | JavaScript | `spa/javascript`   |
| SPA            | TypeScript | `spa/typescript`   |

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

© Kotii Ecosystem 2025-present. Ntsako (Surprise) Mashele
