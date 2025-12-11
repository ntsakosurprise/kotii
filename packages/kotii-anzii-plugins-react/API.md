## API Documentation

Below is a reference for every method in the plugin.

---

## Initialization

### `init()`

Registers Anzii listeners:

- `handle-react-view`
- `take-ssr-routes`
- `set-html-page-settings`
- `handle-react-static`
- `handle-react-spa`
- `receive-kotii-env-variables`

---

## Routing & View Handling

### `handleReactView(data)`

Main entry for SSR rendering.

Handles:

- authentication
- route metadata
- calls `runReactView`
- returns final HTML

### `processViewAfterCheck(data, authData?)`

Runs the rendering after optional authentication has passed.

### `handleSsrRoutes(data)`

Stores SSR routes provided by another plugin (usually the routing plugin).

### `handleReactStaticViews(data)`

Renders multiple views for static site generation.

### `handleReactSpa(data)`

Returns minimal HTML shell for SPA-based rendering.

---

## SSR Core

### `runReactView(data)`

Full React SSR executor:

- loads redux store
- runs `requiresData`
- runs component effects
- loads layouts and routes
- SSR with styled components
- builds full HTML

**Returns:** HTML string.

### `renderFullPage({ html, preloadedState, ... })`

Creates complete HTML document with:

- helmet head tags
- SSR HTML markup
- styles
- preload state
- scripts

### `renderHtmlSpa()`

Returns a minimal SPA HTML shell.

---

## Hydration Scripts

### `includeScripts(preloadedState, authUser)`

Injects:

- `window.__PRELOADED_STATE__`
- `window.__KOTII_EFFECTS_STATE__`
- `window.__KOTII_AUTH_USER__`
- `window.__KOTII_APP_URL__`
- production env scripts
- `/server.js` and `/kotii-client.js`

### `getProductionProcess()`

Injects environment variables in production.

## Data Loading

### `getStateDataFromServer({ routePath, store })`

Runs all route-level `requiresData(store)` calls.

### `runComponentEffects(routePath)`

Runs `effectsToRun()` for a matching route.  
Stores effect results in `effectsData`.

### `getEffectsRouteList(routes, routePath)`

Finds the route that contains `effectsToRun`.

---

## Styling

### `doKotiiStyles()`

Loads:

- Tailwind styles
- Kotii styles (inline or linked)
- Custom style sheet

### `loaderStyles()`

Returns CSS for the built-in loading overlay.

---

## HTML Page Settings

### `handleSetHtmlPageSettings()`

Stores metadata and link instructions.

### `doPageSettings()`

Generates `<meta>` and `<link>` elements from settings.

---

## Lazy Component Preloading

### `preloadLazyComponents(view)`

Loads lazy components (`React.lazy` equivalents) **before SSR** to avoid waterfalls.

Supports:

- Normal components
- Markdown-driven components

---

## Import Handling

### `doImport(toImport, all, check)`

Wrapper around Anzii’s `pa_loadFile` dynamic loader.

---

## Auth & Environment

### `handleReceiveEnvVariables(data)`

Receives environment variables from another plugin  
(e.g., `@kotii/anzii-plugins-env`).

## Example SSR Route definition

```js
{
  path: "/profile",
  requiresData: (store) => store.dispatch(getProfile()),
  hasEffectsToRun: true,
  effectsToRun: [
    () => fetch("/api/profile/stats").then(r => r.json())
  ]
}
```
