<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>@kotii/anzii-plugins-viewguard</strong>
  </a>
</p>

# @kotii/anzii-plugins-viewguard

ViewGuard is a Node.js plugin for the Anzii backend framework that provides view-level authentication for server-side rendered (SSR) applications. It ensures that only authenticated users can access protected views, while remaining modular and compatible with other Anzii plugins.

## Installation

```bash
npm install @kotii/anzii-plugins-viewguard
```

## Using with Anzii

### 1. Register the Plugin

Register your plugins when creating an Anzii instance:

```js
import { anzii } from "anzii";
import ViewGuard from "@kotii/anzii-plugins-viewguard";
import HelloPlugin from "./plugins/Hello.js";

const plugins = {
  ViewGuard: ViewGuard,
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

# How it Works

The plugin automatically registers an event listener for `run-view-authentication`. Whenever a view is requested:

1. ViewGuard checks if the request has an authenticated user (`req.authUser`).
2. If the user is authenticated, the view is rendered immediately.
3. Otherwise, it emits a `view-guard` event for other plugins or logic to handle authentication.
4. The authentication result is returned asynchronously via a callback.

## API

### `new ViewGuard(pao)`

Creates a new ViewGuard instance.

- **pao** – The Anzii backend plugin context used to register listeners and emit events.

### Methods

#### `init()`

Registers the listener for view authentication:

```javascript
viewGuard.init();
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
