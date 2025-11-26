<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>Kotii-Modules</strong>
  </a>
</p>

**kotii-modules** provides a collection of reusable functional components for React, Vue, and AngularJS, designed for working with Markdown content, interactive demos, and media. It’s perfect for building documentation, blogs, and interactive content platforms.

## Features

- Render Markdown content with ease.
- Generate Table of Contents automatically.
- Embed videos and interactive demos.
- Styled GitHub-flavored Markdown support.
- Works with React, Vue, and AngularJS.

## Components

| Component       | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| MarkdownElement | Base component for rendering Markdown content.                        |
| MarkdownRender  | Renders Markdown strings into HTML.                                   |
| MarkdownSidebar | Sidebar navigation for Markdown pages.                                |
| MarkdownToc     | Automatically generates a Table of Contents.                          |
| MarkdownVideo   | Embed videos inside Markdown content.                                 |
| GithubMarkdown  | GitHub-flavored Markdown renderer.                                    |
| Editor          | Markdown editor for live editing (WYSIWYG or code-editor style).      |
| MarkdownAd      | Embed ads within Markdown content.                                    |
| MarkdownDemo    | Display demo code or interactive Markdown examples.                   |
| MarkdownHeader  | Reusable header component for Markdown pages.                         |
| FlexSandBox     | Flexible container for embedding interactive code sandboxes or demos. |

## Installation

```bash
npm install kotii-modules
# or
yarn add kotii-modules
```

## Usage

### React

```js
import React from "react";
import { MarkdownRender, MarkdownSidebar, Editor } from "kotii-modules";

function App() {
  const markdownContent = `
# Welcome to Kotii
This is a Markdown-rendered page.
  `;

  return (
    <div className="app-layout">
      <MarkdownSidebar />
      <main>
        <MarkdownRender content={markdownContent} />
        <Editor initialValue={markdownContent} />
      </main>
    </div>
  );
}

export default App;
```

# Questions & Support

For questions and support please use kotii-react-modulesjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii-react-modules/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/kotii-react-modules/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/kotii-react-modules/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/kotii-react-modules/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/kotii-react-modules/development/CONTRIBUTING.md) before making a pull request. If you have an kotii-react-modules plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/kotii-react-modules/development/LICENSE.md) file for details.

© Kotii Ecosystem 2025-present. Ntsako (Surprise) Mashele
