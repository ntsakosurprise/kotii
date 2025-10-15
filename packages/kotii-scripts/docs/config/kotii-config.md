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
