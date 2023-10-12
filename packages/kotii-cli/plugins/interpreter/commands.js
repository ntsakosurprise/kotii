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
