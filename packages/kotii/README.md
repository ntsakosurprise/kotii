<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>Kotii</strong>
  </a>
</p>

## Welcome

# Kotii Framework

**Kotii** is a next-generation **full-stack meta-framework** for building modern web applications.  
It combines a powerful compiler pipeline, flexible backend architecture, file-based routing, and first-class React support — all built on top of the **Anzii framework** and its event-driven, plugin-powered architecture.

Kotii stands among the most capable frameworks in the ecosystem — **Next.js**, **Remix**, **Nuxt**, **Astro**, **SvelteKit** —while offering its own unique combination of:

- a deeply integrated backend plugin system
- compiler-level AST transformations
- custom Node.js hooks
- full-stack file-based routing
- and an advanced markdown + content pipeline

Kotii is designed to be simple, expressive, and incredibly powerful.

---

## 🌍 Name Origin

**Kotii** comes from the Tsonga word **“kotani”**, meaning:

> **“be able (to build with)”**

This meaning reflects the framework’s purpose:  
to empower developers to build anything with clarity, speed, and confidence.

---

## ✨ Major Features at a Glance

### **Full-stack**

Kotii supports:

- API routes
- Middleware
- Custom backend logic
- Database integration
- Server actions
- Plugin-based backend extensions

All powered by Anzii’s event-driven core.

### **Modern Frontend**

- React support
- Fast HMR (JS/CSS/Markdown/Components)
- Tailwind CSS
- CSS Modules
- Custom PostCSS pipeline
- Optimized production builds

### **Compiler / Build System**

- Custom Webpack loaders + plugins
- Custom Babel plugins + transforms
- AST transformations
- Markdown transformation pipeline
- Automatic asset handling
- Image optimization pipeline
- CSV / JSON importing

### **Routing & Rendering**

- **File-based routing** (frontend and backend)
- **Server-Side Rendering (SSR)**
- **Static Site Generation (SSG)**
- **Hybrid rendering** per route
- **Server Actions** for mutating server-side operations

### **Content Pipeline**

- Advanced Markdown engine
- Frontmatter support
- React components inside markdown
- Custom Markdown extension syntax
- Slug generation + rich metadata
- Extensible via plugins

### **Runtime**

- Node.js extension hooks
- Minimal overhead execution
- Plugin-driven server
- Fully event-driven lifecycle

### **Developer Experience**

- Fast dev server
- Dedicated Kotii DevTools
- Plugin API for extending both dev and runtime
- Typed configuration
- Zero-config defaults with powerful escape hatches

---

## 🚀 Getting Started

Install:

```bash
npm install kotii
```

Start dev

```bash
kotii start
```

Start build

```bash
kotii build
```

Generate static

```bash
kotii static
```

Start production

```bash
kotii start
```

### Code Snippets

As an added convenience, some pages might have code snippets that you can quickly copy and integrate into your work in progress. This may not be as needed, but it can be imagined that there may be a case of usage for it.

As an example, you may be reading about how a given component works and wish to quickly test that part of the component before you fully utilise it, and in that case, it would be convenient for you to just quickly copy, paste, and test.

Please refer to the code below for an example of a snippet:

```jsx
import * as React from React
import Card from "./project/cardpath/card"

const CardDisplayer = ()=>{
    return(
            <Card bgColor="red" size={20}>
                <span>This is a test card</span>
            </Card>
        )

}

export default CardDisplayer;

```

### Interactive Editor

In some cases, this documentation provides an interactive editor where you can type and edit code with live results. This has an added benefit that further immense you into the project as gives you instant results that can visually aid you and give you an idea of how a given feature is implemented.

A picture is worth a glancing, please refer to the interactive editor below:

<code>My made up tag</>

### Team Support

We are fully aware that you can go through the docs and still have inconveniences understanding some parts of it, in that case, you shouldn’t hesitate to reach out to the team for assistance. We work in a collaborative environment that encourages knowledge sharing and assistance. Please reach out, we’d love to help! :smile:
