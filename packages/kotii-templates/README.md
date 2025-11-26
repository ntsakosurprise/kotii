# kotii-templates Roadmap

A structured roadmap outlining the planned features, improvements, and long-term vision for the **kotii-templates** package.

---

## Phase 1 – Core Stabilization (Short-term, 0–3 months)

**Objective:** Solidify the core functionality and ensure the package works reliably with SSR/SPA templates in JS/TS.

- ✅ Finalize `Template` class API
- ✅ Event-driven template fetching (`get-template`)
- ✅ SSR and SPA templates for JavaScript and TypeScript
- ✅ Path resolution across different environments (dist vs src)
- ✅ Basic error handling for unsupported template types or names
- ✅ Documentation and README with examples

---

## Phase 2 – Developer Experience Enhancements (Mid-term, 3–6 months)

**Objective:** Make `kotii-templates` more user-friendly and ready for CLI or programmatic use.

- [ ] Implement `getPackageJson()` and `savePackageJson()` to allow template `package.json` management
- [ ] Add TypeScript typings for `Template` and event payloads
- [ ] Create CLI tool for scaffolded project generation
- [ ] Add template validation (check required files, folder structure)
- [ ] Expand README with interactive examples and diagrams
- [ ] Add logging options or verbosity levels

---

## Phase 3 – Ecosystem & Integration (Long-term, 6–12 months)

**Objective:** Make `kotii-templates` a fully integrated solution in the Kotii ecosystem and beyond.

- [ ] Add support for additional template types (e.g., React, Vue, Svelte starters)
- [ ] Publish npm package with versioning and changelog
- [ ] Integration with CI/CD pipelines for automated scaffolding
- [ ] Event-driven plugin system for custom template hooks
- [ ] Add template update/upgrade functionality
- [ ] Community-driven template repository (allow users to contribute new templates)

---

## Phase 4 – Advanced Features (Optional / Future)

**Objective:** Enable advanced templating and automation capabilities.

- [ ] Template configuration system (custom settings per project)
- [ ] Template preview & diff system before generation
- [ ] Hot-swappable templates for live scaffolding
- [ ] Analytics and usage tracking (optional, privacy-friendly)

---

## Vision

By completing this roadmap, **kotii-templates** will evolve from a simple template resolver into a **full-featured, event-driven, multi-language scaffolding system** that integrates seamlessly with Kotii projects and developer tooling pipelines.
