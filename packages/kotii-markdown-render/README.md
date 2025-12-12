<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>Kotii-React-Render</strong>
  </a>
</p>

### The React Renderer for Kotii's Markdown Pipeline

**kotii-react-render** is the **React renderer** used by Kotii after Markdown is parsed, transformed, and converted into a hybrid structure of:

- raw HTML chunks
- embedded component declarations
- localized content entries
- metadata and table of contents

This renderer turns processed markdown output from `kotii-markdown-render` into a fully interactive React view, supporting:

- 🧩 **Custom embedded components via Markdown**
- 🌐 **Language-based content selection**
- 🎥 **Embedded video blocks**
- 📢 **Ad blocks**
- 🧱 **Standard React components in markdown**
- ⚡ **Server and client-safe rendering**

---

# 🧠 How It Works

Kotii’s markdown engine outputs a hybrid array:

```ts
html: Array<string | MarkdownComponentNode>;
```

Where:

- `string` → raw HTML
- `MarkdownComponentNode` → `{ component: "componentID" }` or `{ video: "id" }` etc.

`MarkdownRender` maps over this array and decides:

1. If it’s **raw HTML** → render as `<MarkdownElement>`
2. If it’s a **component node** → inject the correct React component
3. If **multilingual** → choose the correct language content

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

```

```
