# Kotii Router

**kotii-router** is a lightweight and flexible routing library for modern JavaScript and TypeScript applications. It provides declarative routing components and powerful hooks to manage navigation, route matching, and redirection.

## Features

- **Declarative Components:** `Router`, `Route`, `Routes`, `Link`
- **Hooks for Routing:** `useParams`, `useLocation`, `useMatch`, `useNavigate`, `useRedirect`, `useRoute`
- **Redirection Support:** `Redirect` component and `useRedirect` hook
- Lightweight and framework-agnostic

## Installation

```bash
npm install kotii-router
# or
yarn add kotii-router
```

## Usage

### Basic Example

```js
import { Router, Routes, Route, Link } from "kotii-router";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

### Using hooks

```js
import { useParams, useLocation, useNavigate, useMatch } from "kotii-router";

function Profile() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const match = useMatch("/profile/:id");

  const goHome = () => navigate("/");

  return (
    <div>
      <h1>Profile: {id}</h1>
      <p>Current path: {location.pathname}</p>
      {match && <p>Route matched!</p>}
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}
```

### Redirecting

#### Component

```js
import { Redirect } from "kotii-router";

function OldRoute() {
  return <Redirect to="/new-route" />;
}
```

#### Or using the hook

```js
import { useRedirect } from "kotii-router";

function Component() {
  const redirect = useRedirect();

  const handleRedirect = () => {
    redirect("/dashboard");
  };

  return <button onClick={handleRedirect}>Go to Dashboard</button>;
}
```

## API

### Components

- **Router** – Wraps your application and provides routing context.
- **Routes** – Container for multiple `Route` components.
- **Route** – Defines a single route with a `path` and an `element`.
- **Link** – Navigational component to change routes without reloading the page.
- **Redirect** – Redirects to a new route.

### Hooks

- **useParams()** – Access route parameters.
- **useLocation()** – Get current location info (`pathname`, `search`, `hash`, etc.).
- **useMatch(path)** – Check if a route matches a given path.
- **useNavigate()** – Programmatically navigate to a different route.
- **useRedirect()** – Programmatically redirect to another route.
- **useRoute()** – Access the current route configuration.

# Questions & Support

For questions and support please use kotii-routerjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii-router/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/kotii-router/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/kotii-router/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/kotii-router/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/kotii-router/development/CONTRIBUTING.md) before making a pull request. If you have an kotii-router plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/kotii-router/development/LICENSE.md) file for details.

© Kotii Ecosystem 2025-present. Ntsako (Surprise) Mashele
