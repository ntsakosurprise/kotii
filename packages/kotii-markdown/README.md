<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>Kotii-Markdown</strong>
  </a>
</p>

**kotii-markdown** is a lightweight JavaScript library for parsing, extracting, and converting Markdown content. It provides a set of utility functions and loaders to help you efficiently handle Markdown files in Node.js or browser environments.

## Features

- Convert Markdown to HTML or other formats.
- Extract content, titles, descriptions, and metadata from Markdown files.
- Extract special content like demos and videos.
- Load Markdown files locally or via a server.
- Utility functions for string manipulation and language localization.
- Easily split and process Markdown files into components.

## Installation

```bash
npm install kotii-markdown
```

## Usage

### Importing

```js
import MarkdownLoader, { serverLoader } from "kotii-markdown";
import {
  convertMarkdown,
  extractContent,
  extractDescription,
  extractMetaData,
  extractMetaKeyPairs,
  extractSpecialContent,
  extractTitle,
  getMarkdownComponents,
  getMarkdownDemos,
  getMarkdownVideos,
  idifyString,
  splitMarkdown,
  capitalizeFirstLetter,
  getLanguageLocal,
} from "kotii-markdown";
```

### Loading Markdown

```js
// Load a local markdown file
const markdownContent = await MarkdownLoader("./example.md");

// Load markdown from a server
const serverContent = await serverLoader("https://example.com/example.md");
```

### Parsing and Extraction

```js
const html = convertMarkdown(markdownContent);
const title = extractTitle(markdownContent);
const description = extractDescription(markdownContent);
const metaData = extractMetaData(markdownContent);
const components = getMarkdownComponents(markdownContent);
const demos = getMarkdownDemos(markdownContent);
const videos = getMarkdownVideos(markdownContent);
```

## Markdown Loaders

- `MarkdownLoader(path: string): Promise<string>` – Loads a local Markdown file.
- `serverLoader(url: string): Promise<string>` – Loads a Markdown file from a server URL.

## Markdown Parsing

- `convertMarkdown(markdown: string): string` – Converts Markdown to HTML.
- `extractContent(markdown: string): string` – Extracts the main content.
- `extractDescription(markdown: string): string` – Extracts description from metadata.
- `extractMetaData(markdown: string): object` – Extracts metadata as an object.
- `extractMetaKeyPairs(markdown: string): Array<[string, string]>` – Extracts metadata key-value pairs.
- `extractSpecialContent(markdown: string, type: string): string[]` – Extracts special content like demos or videos.
- `extractTitle(markdown: string): string` – Extracts the title from Markdown.
- `getMarkdownComponents(markdown: string): string[]` – Returns components defined in Markdown.
- `getMarkdownDemos(markdown: string): string[]` – Returns demo snippets.
- `getMarkdownVideos(markdown: string): string[]` – Returns video links.
- `splitMarkdown(markdown: string): string[]` – Splits Markdown into sections.

## Utilities

- `capitalizeFirstLetter(str: string): string` – Capitalizes the first letter of a string.
- `idifyString(str: string): string` – Converts a string into a URL-friendly ID.
- `getLanguageLocal(lang: string): object` – Returns localized language info.

# Questions & Support

For questions and support please use kotii-markdownjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii-markdown/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/kotii-markdown/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/kotii-markdown/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/kotii-markdown/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/kotii-markdown/development/CONTRIBUTING.md) before making a pull request. If you have an kotii-markdown plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/kotii-markdown/development/LICENSE.md) file for details.

© Kotii Ecosystem 2025-present. Ntsako (Surprise) Mashele
