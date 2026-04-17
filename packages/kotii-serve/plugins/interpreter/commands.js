const commands = {
  ["static"]: {
    options: [
      {
        option: "--help",
        optionAlias: "-h",
        optionFlagsString: "-h | --help",
        type: "boolean",
        description: "Displays help information for kotii-serve static command",
      },
      {
        option: "--port",
        optionAlias: "-p",
        optionFlagsString: "-h | --port",
        type: "boolean",
        description: "Takes port number where the app should run on",
      },
      {
        option: "--folder",
        optionAlias: "-f",
        optionFlagsString: "-f | --folder",
        type: "boolean",
        description: "Specifies folder where the app runs from",
      },
    ],
  },
  ["spa"]: {
    options: [
      {
        option: "--help",
        optionAlias: "-h",
        optionFlagsString: "-h | --help",
        type: "boolean",
        description: "Displays help information for kotii-serve spa command",
      },
      {
        option: "--port",
        optionAlias: "-p",
        optionFlagsString: "-p | --port",
        type: "boolean",
        description: "Takes port number where the app should run on",
      },
      {
        option: "--folder",
        optionAlias: "-f",
        optionFlagsString: "-f | --folder",
        type: "boolean",
        description: "Specifies folder where the app runs from",
      },
    ],
  },
  help: {
    options: [
      {
        option: "--help",
        type: "boolean",
        optionAlias: "-h",
        description: "Displays help information for kotii-serve help command",
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

export { commands };
