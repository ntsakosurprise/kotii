# kotii-languages

`kotii-languages` is a lightweight and flexible library for managing multilingual support in your React applications. It provides tools to switch languages dynamically and access the current language state throughout your app.

## Installation

Install via npm:

```bash
npm install kotii-languages
```

## Features

- **LanguageProvider**: Wrap your app to provide multilingual context.
- **LanguageSwitcher**: Component to switch between languages.
- **useLanguage**: Hook to access and manipulate the current language.

## Usage

1. **Wrap your app with `LanguageProvider`**

```js
import React from "react";
import { LanguageProvider } from "kotii-languages";
import App from "./App";

const languages = {
  en: { welcome: "Welcome" },
  fr: { welcome: "Bienvenue" },
};

export default function Root() {
  return (
    <LanguageProvider defaultLanguage="en" languages={languages}>
      <App />
    </LanguageProvider>
  );
}
```

2. Switch languages with LanguageSwitcher

```js
import React from "react";
import { LanguageSwitcher } from "kotii-languages";

function Header() {
  return (
    <header>
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
```

3. Access current language with useLanguage

```js
import React from "react";
import { useLanguage } from "kotii-languages";

function WelcomeMessage() {
  const { language, setLanguage, translations } = useLanguage();

  return (
    <div>
      <p>{translations.welcome}</p>
      <button onClick={() => setLanguage("fr")}>Switch to French</button>
    </div>
  );
}

export default WelcomeMessage;
```

# API

## Language Provider

| Prop              | Type   | Description                                      |
| ----------------- | ------ | ------------------------------------------------ |
| `defaultLanguage` | string | The default language code (e.g., `"en"`)         |
| `languages`       | object | An object mapping language codes to translations |

## LanguageSwitcher

A ready-to-use component for switching languages.

## useLanguage

Returns an object:

| Key            | Type     | Description                             |
| -------------- | -------- | --------------------------------------- |
| `language`     | string   | Current active language                 |
| `setLanguage`  | function | Function to switch language dynamically |
| `translations` | object   | Translations for the current language   |
