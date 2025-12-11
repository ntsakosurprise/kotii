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

A full-featured React Server-Side Rendering (SSR), SPA rendering, static rendering, and effects-driven data loader plugin for the **Anzii Framework** built for kotii.

This plugin brings a **Next.js-like** rendering workflow to Anzii — but with more control, zero magic, and first-class integration with the **Kotii ecosystem**.

---

## Features

### **Core Rendering**

- Server-Side Rendering (SSR)
- Static site rendering
- Single Page Application (SPA) HTML shell rendering
- Integrated React Router-based SSR via **kotii-router**
- Styled component SSR extraction (**kotii-styled**)
- Head & metadata SSR via **HeadHelmet** and **Head**

### **Data Loading & Effects System**

- Route-based async SSR data loading (`requiresData`)
- Component effects system (`effectsToRun`)
- Automatic script hydration of effects & auth state

### **Kotii Integrations**

- Kotii React **ServerApp** support
- Kotii page metadata injection
- Kotii lazy component preloading
- Kotii environment variable hydration

### **Build System Features**

- Handles Tailwind, internal styles, and bundled styles
- Handles production `process.env` injection
- Works in dev & production (bundled import paths differ)

## Installation

```bash
npm install @kotii/anzii-plugins-react-view
```

## Registering with anzii in kotii

```js
import { anzii } from "anzii";
import ReactViewPlugin from "@kotii/anzii-plugins-react-view";

const plugins = {
  ReactView: ReactViewPlugin,
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

    // SPA Rendering
    self.emit({
      type: "handle-react-spa",
      data: {
        callback: (html) => console.log(html),
      },
    });
  }

  // provide SSR ROUTES

  self.emit({
    type: "take-ssr-routes",
    data: {
      payload: {
        routes: [
          {
            path: "/",
            requiresData: (store) => store.dispatch(fetchHome()),
            hasEffectsToRun: true,
            effectsToRun: [loadHeroSection],
          }
        ]
      }
  }
});

}

export default Hello;
```

## Internal Rendering Pipeline

```scss
handle-react-view
   ⬇
Authentication (optional)
   ⬇
processViewAfterCheck
   ⬇
runReactView
   • Load redux server
   • Load SSR routes
   • Run requiresData()
   • Run effectsToRun()
   • Lazy component preload
   • Load layout + pages bundle
   • Styled components SSR
   ⬇
renderFullPage
   • Inject styles
   • Inject helmet
   • Inject effects state
   • Inject user auth
   • Attach client hydration scripts
   ⬇
callback(html)
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
