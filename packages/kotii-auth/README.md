<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="./kotii.svg" alt="Example">
    <strong style="font-size:50px; font-weight: 800">kotii-auth</strong>
  </a>
</p>

  <p align="center" style="font-size: 20px;"><strong style="font-size:22px; font-weight: 800; color: #B8FFD7">kotii-auth</strong> is a tiny authentication library that helps secure your app.</p>

# Description

kotii-auth is an authentication library that is made to help secure your app. Built to be a reliable guard of the protected areas of your application, it is currently built for use in the React ecosystem. It is intended to be as simple to use as possible, but powerful in handling security aspects of your app.

It currently uses the `context` api of the React framework to provide authentication mechanism that allows any part of your application access to auth related resources, such as the login and logout functions, authenticated user, etc.

Kotii-auth allows you the ability to register functions that you wish to run on various stages of an authentication workflow, such as when a user successfully login or logout.

# FEATURES OF KOTII-AUTH

- Login
- Logout
- Login/Logout subscription
- Error Handlers
- Redirects

# Installation

```
npm i kotii-auth

```

# Get Started

```js
import routes from "./includes/routes";
import * as middlewares from "./includes/globals";

export default {
  middleware: {
    publik: { addMiddleware: middlewares.public },
    privet: { addMiddleware: middlewares.pprivate },
    all: { addMiddleware: middlewares.all },
  }, // Your middlewares configurations
  view: true, // Enable rendering web pages
  router: routes, // Your api routes
  logger: { level: "info" }, // Enable info logging
  cluster: { workers: 3, spawn: true }, // Enabble cluster
};
```

# Questions

For questions and support please use the official twitter page. The issue list of this repo is exclusively for bug reports and feature requests.

# Issues

Please make sure to read the Issue Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in the release notes.

# Stay In Touch

[Twitter @kotii-authjs](https://twitter.com/kotii-authjs).

# Contribution

Please make sure to read the Contributing Guide before making a pull request. If you have a kotii-auth-related plugins, add it with a pull request.

# Licence

[MIT](https://.github.com/).

copyright (c) 2019-present, iiprodatks. Ntsako (Surprise) Mashele
