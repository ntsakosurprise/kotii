# kotii-markdown Roadmap

## 1. Core Features (Current / Planned)

- **Markdown Parsing & Conversion**
  - Convert Markdown to HTML.
  - Support other output formats (optional: PDF, JSON).
- **Content Extraction**
  - Extract main content, titles, and descriptions.
  - Extract metadata as objects or key-value pairs.
- **Special Content Extraction**
  - Detect and extract demos, code snippets, or video links.
- **File Loading**
  - Load Markdown files locally (`MarkdownLoader`).
  - Load Markdown files from server URLs (`serverLoader`).

## 2. Utility Functions

- **String Utilities**
  - Capitalize first letter (`capitalizeFirstLetter`).
  - Convert strings to URL-friendly IDs (`idifyString`).
- **Localization**
  - Return localized language info (`getLanguageLocal`).

## 3. Markdown Processing

- Split Markdown into sections (`splitMarkdown`).
- Extract Markdown components (`getMarkdownComponents`).
- Retrieve demo and video sections (`getMarkdownDemos`, `getMarkdownVideos`).

## 4. Developer Experience

- Provide detailed documentation with usage examples.
- Offer TypeScript typings for all functions.
- Easy integration in Node.js and browser environments.

## 5. Future Enhancements

- **Extended Markdown Features**
  - Support for custom Markdown syntax (e.g., interactive demos, alert boxes).
  - Automatic table of contents generation.
- **Performance Improvements**
  - Optimize parsing for large Markdown files.
  - Caching mechanism for frequently loaded Markdown files.
- **Plugins & Extensions**
  - Allow third-party extensions for custom metadata or content extraction.
  - Integration with popular frameworks (React, Vue, Svelte).
- **CLI Tool**
  - Command-line interface for Markdown conversion and extraction.
- **Testing & Quality**
  - Comprehensive unit and integration tests.
  - Continuous integration setup for automated builds.

## 6. Community & Documentation

- Publish official website or documentation portal.
- Provide examples and starter templates.
- Encourage community contributions and feedback.
