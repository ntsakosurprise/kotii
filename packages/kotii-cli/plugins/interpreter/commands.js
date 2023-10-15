const commands = {
  ["create-app"]: {
    options: [
      {
        option: "--help",
        optionAlias: "-h",
        type: "boolean",
        description: "Displays help information for kotii create-app command",
      },
      {
        option: "--type",
        optionAlias: "-t",
        type: "string",
        description: "Sets the type of app for kotii framework",
        validValues: ["spa", "mua", "ssr"],
        validValuesAliases: ["s", "m", "sr"],
      },

      {
        option: "--template",
        description: "Sets the template for kotii framework",
        validValues: ["typescript", "javascript"],
        validValuesAliases: ["ts", "js"],
      },
      {
        option: "--packager",
        description: "Specifies package manager",
        validValues: ["npm", "pnp", "yarn"],
        validValuesAliases: ["n", "p", "y"],
      },
      {
        option: "--private",
        optionAlias: "-p",
        type: "boolean",
        description: "Determines if this should be a private repo",
      },
      {
        option: "--public",
        optionAlias: "-p",
        type: "boolean",
        description: "Determines if this should be a public repo",
      },
      {
        option: "--git",
        optionAlias: "-g",
        type: "boolean",
        description: "Determines if this should be initialized with git",
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
