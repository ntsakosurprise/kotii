module.exports = {
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
