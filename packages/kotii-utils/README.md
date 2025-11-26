# kotii-utils

`kotii-utils` is a lightweight JavaScript utility library that provides helpful functions for string manipulation and local storage management. Perfect for small projects or quick utilities.

## Features

### String Utilities

- **capitalizeFirstLetter**: Capitalizes the first letter of a string.
- **capitalizeLastLetter**: Capitalizes the last letter of a string.

### Storage Utilities

- **getFromStorage**: Retrieves an item from `localStorage`.
- **setInStorage**: Sets an item in `localStorage`.
- **removeFromStorage**: Removes an item from `localStorage`.

## Installation

You can install it via npm:

```bash
npm install kotii-utils
```

## Usage

```js
import {
  capitalizeFirstLetter,
  capitalizeLastLetter,
  getFromStorage,
  setInStorage,
  removeFromStorage,
} from "kotii-utils";

// String Utilities
console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
console.log(capitalizeLastLetter("world")); // Output: "WorlD"

// Storage Utilities
setInStorage("username", "kotii");
console.log(getFromStorage("username")); // Output: "kotii"
removeFromStorage("username");
```

# Questions & Support

For questions and support please use kotii-utilsjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii-utils/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/kotii-utils/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/kotii-utils/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/kotii-utils/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/kotii-utils/development/CONTRIBUTING.md) before making a pull request. If you have an kotii-utils plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/kotii-utils/development/LICENSE.md) file for details.

© Kotii Ecosystem 2025-present. Ntsako (Surprise) Mashele
