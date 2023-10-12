const methods = require("./methods");

const arg = require("arg");
const chalk = require("chalk");
const figlet = require("figlet");
const cleya = require("clear");
const inquirer = require("inquirer");

class Interpreter {
  constructor(pao) {
    this.pao = pao;
    this.arg = arg;
    this.chalk = chalk;
    this.figlet = figlet;
    this.clear = cleya;
    this.inquirer = inquirer;
    this.commands = {
      ["create-app"]: {
        options: [
          {
            option: "--help",
            optionAlias: "-h",
            type: "boolean",
            description:
              "Displays help information for kotii create-app command",
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
            optionAlias: "-temp",
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

    this.init = methods.init;
    this.handleInterpreterCliInput = methods.handleInterpreterCliInput;
    this.handlePromptUser = methods.handlePromptUser;
    this.handleCommands = methods.handleCommands;
    this.getFeedback = methods.getFeedback;
    this.prompt = methods.prompt;
    this.outPut = methods.outPut;
    this.showAvailableCommands = methods.showAvailableCommands;
    this.createKotiiAppCommand = methods.createKotiiAppCommand;
    this.helpCommand = methods.helpComand;
    this.versionCommand = methods.versionCommand;
    this.parseCommands = methods.parseCommands;
  }
}

module.exports = Interpreter;
