<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>Kotii-creation-time</strong>
  </a>
</p>

`kotii-creation-time` is a development-time and build-time utilities for the **Kotii Framework**.

This package provides internal tooling used by Kotii to:

- run the framework's development server
- execute production builds
- generate static site output (SSG)
- perform framework-level JavaScript transformations

It is designed for **Node.js environments only** and should be used **during development or build**, not shipped to client-side bundles.

---

## 📦 Installation

```sh
npm install kotii-creation-time --save-dev
```

## Example Usage

Below is a typical usage pattern inside a CLI or framework bootstrap script.  
The tools are imported dynamically so they are only loaded when needed.

```js const beginCreations = (commandToRun) => {
  import("kotii-creation-time").then((kotiiCreateTime) => {
    const { dev, build, ssg } = kotiiCreateTime;

    switch (commandToRun) {
      case "dev":
        return dev();
      case "build":
        return build();
      case "static":
        return ssg();
      default:
        throw new Error("KotiiJS was started with an unrecognised command");
    }
  });
};

export { beginCreations };
```

# Questions & Support

For questions and support please use kotii-lazyjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/CONTRIBUTING.md) before making a pull request. If you have an kotii-creation-time plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/LICENSE.md) file for details.

© Kotii Ecosystem 2025-present. Ntsako (Surprise) Mashele
