# Changelog

All notable changes to **kotii-cli** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and follows [Semantic Versioning](https://semver.org/).

---

## [1.0.0] - 2025-11-26

**Initial Release**

### Added

- `create-app` command to scaffold new Kotii projects
  - Options for app type: `spa`, `mua`, `ssr`
  - Template selection: `js`, `ts`, `javascript`, `typescript`
  - Package manager selection: `npm`, `pnpm`, `yarn`
  - Public/private repository toggle
  - Git initialization and optional remote repository
- Quick Start Wizard for guided app creation
- Default settings shortcut (`--yes / -y`)
- `help` command for CLI instructions
- `version` command for CLI version display
- Validation and error messages for string-based options: `--type`, `--template`, `--packager`
- Support for local Kotii scripts using `--local-scripts`

### Changed

- N/A (first release)

### Fixed

- N/A (first release)

---

## [1.1.0] - Planned

**Upcoming Improvements**

### Added

- Interactive wizard with color highlights and emoji feedback
- Multiple starter templates (blog, dashboard, e-commerce)
- `add-feature` command to scaffold modules into existing apps
- `update-app` command to update project scaffolds

### Changed

- Wizard now dynamically skips prompts when defaults are acceptable
- Inline help messages for wizard options

### Fixed

- Edge-case handling in CLI arguments
- Platform-specific compatibility issues (Windows, Linux, macOS)

---

## [2.0.0] - Future

**Major Features**

### Added

- Plugin system for third-party CLI extensions
- Interactive CLI dashboard
- Visual dependency graph for projects
- CI/CD scaffolding (`GitHub Actions`, `GitLab CI`, `CircleCI`)
- Cloud deployment scaffolding (Vercel, Netlify, AWS)
- Official documentation generator
- Community template marketplace
- CLI analytics & telemetry for usage insights

### Changed

- Improved project scaffolding performance
- Streamlined template selection and dependency installation

### Fixed

- Minor UX and CLI stability improvements

---

### Notes

- Versions follow **Semantic Versioning (MAJOR.MINOR.PATCH)**.
- Keep your CLI updated to access the latest features and fixes.
- Contributions are welcome via GitHub pull requests.
