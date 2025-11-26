# kotii-lazy

`kotii-lazy` is a lightweight utility library for lazy loading React components with ease. It provides a simple API to dynamically load components and wrap them in suspense for optimal performance.

## Features

- Simple API for lazy loading React components
- Suspense support for fallback UI
- Lightweight and minimal

## Installation

```bash
npm install kotii-lazy
```

# or

```bash
yarn add kotii-lazy
```

## Usage

### Import

```js
import { LazySuspense, lazyLoad } from "kotii-lazy";
```

### lazyLoad

`lazyLoad` allows you to dynamically import a component, enabling code-splitting and improving initial load performance.

```js
import { lazyLoad } from "kotii-lazy";

const MyComponent = lazyLoad(() => import("./MyComponent"));
```

## LazySuspense

`LazySuspense` is a wrapper component that handles the loading state while your lazy-loaded component is being fetched.

```js
import { LazySuspense, lazyLoad } from "kotii-lazy";

const MyComponent = lazyLoad(() => import("./MyComponent"));

function App() {
  return (
    <LazySuspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </LazySuspense>
  );
}
```

fallback — React node displayed while the lazy component is loading.

## Example

```js
import React from "react";
import { LazySuspense, lazyLoad } from "kotii-lazy";

const Dashboard = lazyLoad(() => import("./Dashboard"));

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <LazySuspense fallback={<p>Loading dashboard...</p>}>
        <Dashboard />
      </LazySuspense>
    </div>
  );
}

export default App;
```

# Questions & Support

For questions and support please use kotii-lazyjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii-lazy/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/kotii-lazy/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/kotii-lazy/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/kotii-lazy/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/kotii-lazy/development/CONTRIBUTING.md) before making a pull request. If you have an kotii-lazy plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/kotii-lazy/development/LICENSE.md) file for details.

© Kotii Ecosystem 2025-present. Ntsako (Surprise) Mashele
