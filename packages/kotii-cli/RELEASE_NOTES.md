# Kotii-CLI Release Notes

A chronological log of changes, features, and fixes for **kotii-cli**.

---

## [v1.0.0] - 2025-11-26

**Initial Release**

### Added

- `create-app` command to scaffold new Kotii projects
  - Options for app `type` (`spa`, `mua`, `ssr`)
  - Template selection (`js`, `ts`, `javascript`, `typescript`)
  - Package manager selection (`npm`, `pnpm`, `yarn`)
  - Public/private repository toggle
  - Git initialization and remote repository creation
- `help` command to display CLI instructions
- `version` command to display CLI version
- Quick Start Wizard for guided app creation
- Default shortcut (`--yes / -y`) to accept default settings
- Validation for string-based options (`--type`, `--template`, `--packager`)

### Improvements

- User-friendly CLI error messages for invalid options
- Support for local Kotii scripts with `--local-scripts` option
- Consistent cross-platform command usage

---

## [v1.1.0] - Planned

**Upcoming Features**

### Added

- Interactive wizard with color highlights and emoji feedback
- Multiple starter templates (blog, dashboard, e-commerce)
- `add-feature` command to scaffold new modules into existing projects
- `update-app` command to update project scaffolds

### Improvements

- Dynamic skipping of wizard questions based on default options
- Inline help descriptions for each wizard prompt
- Automatic dependency installation based on template

### Fixed

- Edge-case handling in CLI arguments
- Platform-specific compatibility issues (Windows/Linux/macOS)

---

## [v2.0.0] - Future Roadmap

**Ambitious Goals**

### Added

- Plugin system for third-party CLI extensions
- Interactive CLI dashboard
- Visual dependency graph for projects
- CI/CD scaffolding templates (GitHub Actions, GitLab CI, CircleCI)
- Cloud deployment templates (Vercel, Netlify, AWS)

### Improvements

- Official documentation generator for projects
- Community template marketplace
- CLI analytics & telemetry for feature improvement

---

### Notes

- The release notes follow **semantic versioning (MAJOR.MINOR.PATCH)**.
- Keep your `kotii-cli` updated to enjoy the latest features and fixes.
- Contributions and feedback are welcome via GitHub pull requests.
