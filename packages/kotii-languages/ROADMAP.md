# 🗺️ kotii-languages — Roadmap

This document outlines the planned features, improvements, and long-term vision for **kotii-languages**.  
The goal is to keep the library lightweight, developer-friendly, and scalable while enabling powerful multilingual capabilities.

---

## ✅ Phase 1 — Core Foundation (Current)

### ✔ Completed

- Language context and provider (`LanguageProvider`)
- React hook for accessing and updating language (`useLanguage`)
- Basic UI component for switching languages (`LanguageSwitcher`)
- Support for unlimited languages
- Basic documentation and examples

---

## 🚧 Phase 2 — Enhancements (In Progress)

### 🔍 Improvements

- Improve `LanguageSwitcher` UI/UX and customization options
- Allow passing custom switcher components
- Add TypeScript definitions for stronger type support
- Add error boundaries for missing translations
- Improve performance for large translation objects

### 🧪 Testing

- Unit tests for provider, hook, and switcher
- Add integration testing with popular frameworks (Next.js, Remix, CRA)

---

## 🧭 Phase 3 — Advanced Features (Upcoming)

### 🌐 Translation Management

- Support for nested translation keys (`user.profile.name`)
- Translation fallback system (`fr → en → default`)
- Dynamic imports for language files (lazy loading)
- JSON-based external translation file loading

### 🎛 Configuration Improvements

- Global configuration options
- Developer tools for inspecting active language & translations
- Option to sync language with browser preferences

### 🔌 Integration / Framework Support

- Native support for:
  - **Next.js (App Router + SSR)**
  - **React Native**
  - **Vite + SPA setups**

---

## 🚀 Phase 4 — Ecosystem Expansion (Future Vision)

### 📦 Additional Components

- `<LanguageSelector />` (dropdown with flags)
- `<Translate />` component for inline translation usage
- CLI tool for:
  - validating translation files
  - detecting missing/unused keys

### 🔥 Advanced Capabilities

- Pluralization support
- Parameter interpolation (`"Hello {name}"`)
- Rich-text translation support (Markdown + JSX)
- Locale-aware formatting (dates, numbers, currencies)

---

## 🌍 Phase 5 — Community & Growth

### Planned Initiatives

- Public website + documentation portal
- Examples repo with:
  - Next.js
  - React Native
  - Electron
  - Vite
- Expand contributors
- Add GitHub discussions + feature voting

---

## 📬 Contributing

Contributions are welcome!  
If you'd like to help shape **kotii-languages**, feel free to open issues or pull requests.

---

## 🏁 Final Goal

To become a **lightweight**, **modern**, and **framework-friendly** internationalization (i18n) library for React — focused on simplicity and flexibility without the complexity of older libraries.
