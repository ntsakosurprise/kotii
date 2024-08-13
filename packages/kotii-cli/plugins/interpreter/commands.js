const commands = {
  ["create-app"]: {
    options: [
      {
        option: "--help",
        optionAlias: "-h",
        optionFlagsString: "-h | --help",
        type: "boolean",
        description: "Displays help information for kotii create-app command",
      },
      {
        name: "Description",
        isDefault: true,
        option: "--description",
        optionAlias: "-d",
        optionFlagsString: "-d | --description",
        type: "string",
        description: "Sets description for the app",
        default: "Hello World Application",
      },
      {
        name: "Type",
        isDefault: true,
        option: "--type",
        optionAlias: "-t",
        optionFlagsString: "-t | --type",
        type: "string",
        description: "Sets the type of app for kotii framework",
        validValues: ["spa", "mua", "ssr"],
        validValuesAliases: ["s", "m", "sr"],
        default: "spa",
      },

      {
        name: "Template",
        isDefault: true,
        option: "--template",
        optionAlias: "-temp",
        optionFlagsString: "-temp | --template",
        description: "Sets the template for kotii framework",
        validValues: ["typescript", "javascript", "js", `ts`],
        validValuesAliases: ["ts", "js", "javascript", "typescript"],
        default: "js",
      },
      {
        name: "Packager",
        isDefault: true,
        default: "npm",
        option: "--packager",
        optionAlias: "-pac",
        optionFlagsString: "-pac | --packager",
        description: "Specifies package manager",
        validValues: ["npm", "pnp", "yarn"],
        validValuesAliases: ["n", "p", "y"],
      },
      {
        name: "Private",
        default: "private",
        option: "--private",
        validValues: "public",
        optionAlias: "-pri",
        optionFlagsString: "-priv | --private",
        type: "boolean",
        description: "Determines if this should be a private repo",
      },
      {
        name: "Public",
        default: "public",
        isDefault: true,
        option: "--public",
        optionAlias: "-p",
        optionFlagsString: "-p | --public",
        type: "boolean",
        description: "Determines if this should be a public repo",
      },
      {
        name: "Git",
        isDefault: true,
        validValues: "git",
        default: "git",
        option: "--git",
        optionAlias: "-g",
        optionFlagsString: "-g | --git",
        type: "boolean",
        description: "Determines if this should be initialized with git",
      },
      {
        option: "--yes",
        optionAlias: "-y",
        optionFlagsString: "-y | --yes",
        type: "boolean",
        description: "Accepts default settings for kotii create-app command",
      },
      {
        option: "--remote",
        optionAlias: "-r",
        type: "boolean",
        description: "Determines if there should be a remote repo",
      },
      {
        option: "--local-scripts",
        optionAlias: "-l",
        type: "string",
        description: "Sets a path to a local copy of kotii-scripts",
      },
    ],
  },
  help: {
    options: [
      {
        option: "--help",
        type: "boolean",
        optionAlias: "-h",
        description: "Displays help information for kotii help command",
      },
    ],
  },
  version: {
    options: [
      {
        option: "--version",
        type: "boolean",
        optionAlias: "-v",
        description: "Displays version information",
      },
    ],
  },
};
const stringFlagsMessages = {
  ["--type"]: {
    invalidOption:
      "Provided app type for option --type, is not a valid kotii app name type, please use spa, mua , or ssr",
    validKeys: ["spa", "mua", "ssr"],
  },
  ["--packager"]: {
    invalidOption: `Provided packager for option --packager, is not a valid package manager, please use yarn, npm , or pnp`,
    validKeys: ["npm", "pnp", "yarn"],
  },
  ["--template"]: {
    invalidOption: `Provided template for option --template, is not a valid kotii app template, please use js or ts`,
    validKeys: ["js", "ts"],
  },
};

module.exports = { commands, stringFlagsMessages };
