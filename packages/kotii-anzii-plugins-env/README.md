<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>@kotii/anzii-plugins-react</strong>
  </a>
</p>

# @kotii/anzii-plugins-react

An Anzii plugin for managing and retrieving environment variables in Node.js applications. This plugin is designed to work within the Anzii framework's event-driven architecture, allowing you to load `.env` files, filter environment variables with the prefix `KOTII_APP_`, and return them in raw and stringified formats.

## Features

- Load environment variables from a `.env` file.
- Filter variables prefixed with `KOTII_APP_`.
- Fully compatible with the Anzii event-driven system.
- Returns environment variables in raw and stringified formats.
- Supports dynamic module imports via `doImport`.
- Debug logging for easier troubleshooting.

## Installation

```bash
npm install @kotii/anzii-plugins-react
```

## Using with Anzii

### 1. Register the Plugin

Register your plugins when creating an Anzii instance:

```js
import { anzii } from "anzii";
import EnvPlugin from "@kotii/anzii-plugins-react";
import HelloPlugin from "./plugins/Hello.js";

const plugins = {
  Env: EnvPlugin,
  Hello: HelloPlugin,
};

anzii(plugins);
```

## Create Your plugin

Note: From within the plugin, anzii events are available

```js
class Hello {
  constructor(pao) {
    this.pao = pao; // Every plugin is passed this object
  }

  init() {
    this.listens({
      "handle-hello-task": this.handleHelloTask.bind(this), // Event and handling method
    }); // Call listens() method (available to every anzii plugin) to set events that this module  listens to
  } // Define the required init() method

  handleHelloTask(data) {
    const self = this;

    self.callback = data.callback;
    self.emit({
      type: "get-env-variables",
      data: {
        envPath: envPath,
        meta: "",
        callback: (envVariables) => {
          console.log("Fetched Environment Variables:", envVariables);
        },
      },
    });
  }
}

export default Hello;
```

The callback received an object:

```js
{
  "message": "Environment variables check done",
  "raw": { "KOTII_APP_KEY": "value", ... } || null,
  "stringified": { "KOTII_APP_KEY": "\"value\"", ... } || null
}
```

## Environment Variable Filtering

By default, the plugin filters environment variables using this regex:

```js
/^KOTII_APP_/i;
```

## Notes

- The plugin relies on **dotenv** for loading `.env` files.
- Debugging is handled via `self.debug`.
- Methods like `doImport` and `loadEnvVariables` are for advanced use cases.
- Designed to work only within the **Anzii** framework.

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
