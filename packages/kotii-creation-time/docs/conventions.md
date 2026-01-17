# Static Website File Structure & Asset Conventions

## Purpose

This document defines **where files live, how they flow through the build, and what ends up deployed**.

Goals:

- Predictable URLs
- Clean, reproducible builds
- Safe caching behavior
- Easy onboarding
- No ambiguity between source and output

---

## Core Principles (Non-Negotiable)

1. **`dist/` is the only deployable folder**
2. **Never edit files inside `dist/`**
3. **Files are organized by build behavior, not file type**
4. **Anything processed by the build must NOT live in `public/`**
5. **Anything in `public/` is copied verbatim to `dist/`**

---

## Folder Responsibilities

### `src/` — Source (Editable)

Contains all authored files and anything transformed by the build.

## Project Structure

- **src/pages/**  
  Page-level routes (HTML / Markdown)

- **src/layouts/**  
  Base templates

- **src/components/**  
  Reusable UI components

- **src/assets/**  
  Files processed by the build

- **src/data/**  
  Build-time only data

---

### `src/assets/` — Processed Assets

**Rule:** If the build tool touches it, it belongs here.

### Assets Structure

- **src/assets/css/**  
  Stylesheets

- **src/assets/js/**  
  JavaScript files

- **src/assets/images/**  
  Image assets

- **src/assets/videos/**  
  Video files

- **src/assets/audio/**  
  Audio files

- **src/assets/data/**  
  Runtime-fetched but processed data

- **src/assets/downloads/**  
  Downloadable files

Characteristics:

- Bundled, minified, optimized
- May be renamed or hashed
- Output always goes to `dist/assets/`

---

### `src/data/` — Build-Time Data Only

### Data Structure

- **src/data/navigation.json**  
  Navigation configuration data

- **src/data/products.yaml**  
  Product definitions and metadata

Rules:

- Used only during build or template generation
- Never fetched by the browser
- Never appears in `dist/`

---

### `public/` — Passthrough (Stable URLs)

**Rule:** Files here are copied _as-is_ to the web root.

### Public Directory

- **public/images/**  
  Open Graph, social sharing, and SEO images

- **public/videos/**  
  Videos served from stable public URLs

- **public/data/**  
  Publicly accessible feeds and APIs

- **public/downloads/**  
  Public downloadable files

- **public/favicon.ico**  
  Site favicon

- **public/robots.txt**  
  Search engine crawling rules

- **public/sitemap.xml**  
  Sitemap for search engines

Characteristics:

- No transformation
- Filenames never change
- Folder name does NOT appear in `dist/`

---

### `dist/` — Build Output (Deploy This)

### `dist/` Directory Structure (List)

- `dist/index.html`
- `dist/about/`
  - `dist/about/index.html`
- `dist/assets/`
  - `dist/assets/css/`
  - `dist/assets/js/`
  - `dist/assets/images/`
  - `dist/assets/videos/`
  - `dist/assets/data/`
- `dist/images/`
- `dist/videos/`
- `dist/data/`
- `dist/downloads/`
- `dist/favicon.ico`
- `dist/robots.txt`
- `dist/sitemap.xml`

Rules:

- Generated only
- Disposable
- Never manually edited
- Only folder that gets deployed

---

## URL & Routing Conventions

- **Folder = URL**
- Use `index.html` for clean URLs

Rules:

- Generated only
- Disposable
- Never manually edited
- Only folder that gets deployed

---

## URL & Routing Conventions

- **Folder = URL**
- Use `index.html` for clean URLs

/about → dist/about/index.html
/blog/post-1 → dist/blog/post-1/index.html

yaml
Copy code

---

## Asset Placement Rules (Decision Table)

Ask **one question**:

> **Should the build transform this file?**

| File Type               | Transform? | Stable URL? | Location            |
| ----------------------- | ---------- | ----------- | ------------------- |
| UI image                | Yes        | No          | `src/assets/images` |
| OG / social image       | No         | Yes         | `public/images`     |
| CSS / JS                | Yes        | No          | `src/assets`        |
| Hero video              | Yes        | No          | `src/assets/videos` |
| Marketing video         | No         | Yes         | `public/videos`     |
| JSON for templates      | Yes        | No          | `src/data`          |
| JSON fetched by browser | No         | Yes         | `public/data`       |
| WASM / workers          | No         | Yes         | `public/`           |

---

## Build Mapping (Canonical)

src/assets/_ ──▶ dist/assets/_
public/_ ──▶ dist/_
src/data/\* ──▶ (not emitted)

yaml
Copy code

Never allowed:

src/assets → public
public → dist/public

yaml
Copy code

---

## Naming & Caching Rules

- Files in `dist/assets/` **may be hashed**
- Files at top-level `dist/` **must not be hashed**
- Hashed assets may be cached long-term
- Public files must remain stable forever

---

## What Must NEVER Appear in `dist/`

- `src/`
- `public/`
- `.psd`, `.ai`, `.ts`
- unminified CSS or JS
- duplicate or unused assets

If any appear, the build is misconfigured.

---

## Deployment Rule

> **Only `dist/` is deployed. Nothing else.**

Applies to:

- Netlify
- Vercel
- GitHub Pages
- S3 / CDN
- Docker images

---

## Sanity Checklist (Before Merge)

- [ ] Can `dist/` be deleted and rebuilt safely?
- [ ] Are all URLs predictable?
- [ ] Are assets either hashed _or_ intentionally stable?
- [ ] Is `public/` free of source files?
- [ ] Is `src/assets/` free of final-only files?

---

## One-Line Summary

> \*\*Source files live in `src/`, passthrough files live in `public/`, and the browser onl
