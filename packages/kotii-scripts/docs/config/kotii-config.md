## app

The `app` object defines core settings for how the application should render and which state management system is used.

### Properties

- **`type`** _(default: `"ssr"`)_ – Specifies the rendering strategy of the application.

  - `"ssr"` enables server-side rendering, where pages are generated on the server and sent as HTML to the browser.

- **`stateVendor`** _(optional)_ – Indicates the state management library.

  - `"redux"` tells the app to use Redux for managing global application state.

example below:

```json
"app": {
  "type": "ssr",
  "stateVendor": "redux"
}
```

## appStyles

The `appStyles` section controls how styles are included in your application.

### Properties

- **`useTag`** _(default: `"link"`)_ – Determines how the CSS file is inserted into the HTML.

  - `"link"` inserts the CSS using a `<link>` tag in the `<head>`.

- **`fileName`** – The name of the generated or linked CSS file.

Example Below:

```json
{
  "appStyles": {
    "useTag": "link",
    "fileName": "kotii-styles.css"
  }
}
```

## htmlSettings

This section defines the contents of the HTML `<head>` element, including meta tags, the title, and external resources.

### Properties

- **`title`** – Sets the document title shown in the browser tab.

- **`meta`** – An object containing meta tags:

  - **`viewport`** – Controls responsive behavior.
  - **`theme-color`** – Sets the browser's UI color on mobile.

- **`scripts`** – List of JavaScript files to include.

- **`links`** – External stylesheets or assets to be linked in the `<head>`.

Example below:

```json
{
  "htmlSettings": {
    "title": "My App",
    "meta": {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "theme-color": "#4285f4"
    },
    "scripts": [
      {
        "name": "my-test-script.js",
        "src": "https://www.my-test-script.com"
      }
    ],
    "links": [
      {
        "href": "https://www.w3schools.com/w3css/5/w3.css",
        "options": {
          "id": "my-test-id"
        }
      }
    ]
  }
}
```

## staticBuildSettings

Controls static build behavior for special content types.

### Properties

- **`markdown.runType`** _(default: `"dynamic"`)_ – Determines how Markdown content is rendered:

  - `"dynamic"` means Markdown files are rendered at runtime instead of being precompiled during the build process.

  Example below:

  ## staticBuildSettings

Controls static build behavior for special content types.

### Properties

- **`markdown.runType`** _(default: `"dynamic"`)_ – Determines how Markdown content is rendered:

  - `"dynamic"` means Markdown files are rendered at runtime instead

  | Flag               | Default          | Description                                                             |
  | ------------------ | ---------------- | ----------------------------------------------------------------------- |
  | `useHttps`         | `false`          | Enables serving the app over HTTPS.                                     |
  | `useCustomDomain`  | _(unspecified)_  | Indicates that the app is deployed under a custom domain.               |
  | `useSetPort`       | _(unspecified)_  | Allows configuring the server to run on a specified port.               |
  | `useInlinedPngs`   | _(unspecified)_  | Small PNG files are embedded as base64 strings to reduce HTTP requests. |
  | `useLazyLoad`      | _(unspecified)_  | Enables lazy loading for assets (e.g., images) to improve performance.  |
  | `useAsDefaultPage` | _(e.g., "blog")_ | Sets which page should load by default.                                 |

```json
{
  "useHttps": false,
  "useCustomDomain": true,
  "useSetPort": true,
  "useInlinedPngs": true,
  "useLazyLoad": true,
  "useAsDefaultPage": "blog"
}
```

## Build Output Paths

These fields control where the production build files and static assets are stored.

### Properties

- **`build`** – Directory where the app is compiled to during build (e.g., `"build"`).

- **`static`** – Directory that serves static assets (e.g., images, fonts).

Example Below:

```json
{
  "build": "build",
  "static": "static"
}
```

## aliases

Specifies path aliases to simplify import statements in the codebase. Instead of long relative paths, you can use custom shortcuts to refer to modules or directories.

### Structure

- Each **key** represents an alias.
- Each **value** represents the full file path that the alias points to.

### Example

```json
"aliases": {
  "@components": "./src/components",
  "@utils": "./src/utils"
}

```

```json
{
  "aliases": {
    "Layouts": "/src/components/layout/index",
    "Pages": "/src/components/pages/index",
    "Docs": "/src/components/docs/index",
    "Markdowns": "/src/mds/",
    "Modules": "/src/modules/",
    "Startup": "/src/components/startup/index",
    "UI": "/src/components/ui/index",
    "Config": "/src/config/index",
    "HOC": "/src/hoc/",
    "Hooks": "/src/hooks/index",
    "Context": "/src/context/",
    "Language": "/src/language/index",
    "AppRoutes": "/src/routes/",
    "AppModules": "/src/modules/",
    "Store": "/src/store/",
    "Utilities": "/src/utils/index",
    "Services": "/src/services/",
    "Constants": "/src/constants/",
    "Assets": "/src/assets/index",
    "AppGlobals": "/src/globals/index"
  }
}
```

## file-loader

Defines how static files (such as images) are handled during the build process.

### Properties

- **`name`** – Output naming format using placeholders (e.g., `[name].[ext]`).

- **`output`** – Directory where processed files will be placed (e.g., `"public/imgs"`).

- **`inline`** – Controls when a file should be inlined as base64:
  - **`limit`** – Max file size in bytes. Files below this limit are inlined.
  - **`mime`** – MIME type(s) allowed to be inlined (e.g., `"all"` to allow all).

Example below:

```json
{
  "file-loader": {
    "name": "[name].[ext]",
    "output": "public/imgs",
    "inline": {
      "limit": 2500,
      "mime": "all"
    }
  }
}
```
