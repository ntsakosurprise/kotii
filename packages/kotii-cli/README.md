<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/kotii.svg" alt="kotii logo">
    <strong>Kotii-Cli</strong>
  </a>
</p>

Kotii-cli is a command-line interface for generating and managing applications built with the Kotii Framework.
kotii-cli provides a fast, configurable way to scaffold projects, manage templates, control packaging tools, and more.

## Installation

```bash
npm install -g kotii-cli
```

## Usage

```bash
kotii <command> [options]
```

### Available commands

- create-app
- help
- version

## Quick Start Wizard

Kotii Quick Start guides you through creating an app step-by-step.
It launches automatically when you run create-app without specifying flags.

### Start the wizard(on the terminal)

```bash
kotii create-app myApp
```

### Wizard example

```bash
Welcome to the Kotii App Creator!

✔ What is the description of your app?
  → Hello World Application

✔ What type of Kotii app would you like to create?
  → spa
    (Options: spa, mua, ssr)

✔ Which template would you like to use?
  → js
    (Options: js, ts, javascript, typescript)

✔ Which package manager do you want to use?
  → npm
    (Options: npm, pnpm, yarn)

✔ Should this be a public or private repository?
  → public

✔ Initialize git for this project?
  → Yes

✔ Create remote repository?
  → No

Creating project...
Installing dependencies...
Initializing repository...
Done! 🚀

Your Kotii app "myApp" is ready!
cd myApp && npm run dev
```

## Commands

### Create-App

```bash
kotii create-app <app-name> [options]
```

Generates a new Kotii application with user-defined or default configuration.

#### Options

| Option            | Alias   | Type    | Default                     | Description                                               |
| ----------------- | ------- | ------- | --------------------------- | --------------------------------------------------------- |
| `--help`          | `-h`    | boolean | —                           | Displays help for `create-app`                            |
| `--description`   | `-d`    | string  | `"Hello World Application"` | Sets the app’s description                                |
| `--type`          | `-t`    | string  | `"spa"`                     | Sets the Kotii app type: `spa`, `mua`, `ssr`              |
| `--template`      | `-temp` | string  | `"js"`                      | Sets the template: `js`, `ts`, `javascript`, `typescript` |
| `--packager`      | `-pac`  | string  | `"npm"`                     | Package manager: `npm`, `pnpm`, `yarn`                    |
| `--private`       | `-pri`  | boolean | `"private"`                 | Marks repo as private                                     |
| `--public`        | `-p`    | boolean | `"public"`                  | Marks repo as public                                      |
| `--git`           | `-g`    | boolean | `"git"`                     | Initialize Git in the project                             |
| `--yes`           | `-y`    | boolean | —                           | Accept all default options                                |
| `--remote`        | `-r`    | boolean | —                           | Creates/links a remote repository                         |
| `--local-scripts` | `-l`    | string  | —                           | Path to local Kotii scripts                               |

## Validation Rules (String Options)

Certain string-based options receive validation and helpful error messages.

### Type (`--type`)

- **Valid values:** `spa`, `mua`, `ssr`
- **Invalid message:**

> Provided app type for option `--type` is not a valid Kotii app name type, please use `spa`, `mua`, or `ssr`.

### Packager (`--packager`)

- **Valid values:** `npm`, `pnpm`, `yarn`
- **Invalid message:**

> Provided packager for option `--packager` is not a valid package manager, please use `yarn`, `npm`, or `pnpm`.

### How To Install kotii-cli for local development

## help

```bash
kotii help [--help | -h]
```

Displays help information for all kotii-cli commands.

## Version

```bash
kotii version [--version | -v]
```

Displays the CLI version.

# Questions & Support

For questions and support please use kotii-clijs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii-cli/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/kotii-cli/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/kotii-cli/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/kotii-cli/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/kotii-cli/development/CONTRIBUTING.md) before making a pull request. If you have an kotii-cli plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/kotii-cli/development/LICENSE.md) file for details.

© Kotii Ecosystem 2025-present. Ntsako (Surprise) Mashele
