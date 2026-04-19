import methods from "./methods.js";
import { commands } from "./commands.js";

import arg from "arg";
import chalk from "chalk";
import figlet from "figlet";
import cleya from "clear";
import inquirer from "inquirer";

class Interpreter {
  constructor(pao) {
    this.pao = pao;
    this.arg = arg;
    this.chalk = chalk;
    this.figlet = figlet;
    this.clear = cleya;
    this.inquirer = inquirer;
    this.commands = commands;
    this.messages = "";

    this.init = methods.init;
    this.handleInterpreterCliInput = methods.handleInterpreterCliInput;
    this.handlePromptUser = methods.handlePromptUser;
    this.handleCommands = methods.handleCommands;
    this.getFeedback = methods.getFeedback;
    this.prompt = methods.prompt;
    this.outPut = methods.outPut;
    this.showAvailableCommands = methods.showAvailableCommands;
    this.createKotiiServveCommandHelpOption =
      methods.createKotiiServveCommandHelpOption;
    this.help = methods.help;
    this.version = methods.version;
    this.parseCommands = methods.parseCommands;
    this.processOptionsAsCommands = methods.processOptionsAsCommands;
    this.createCommandAlias = methods.createCommandAlias;
    this.capitalizeFirstLetter = methods.capitalizeFirstLetter;
    this.spa = methods.spa;
    this.commandOptionMissing = methods.commandOptionMissing;
    this.validateStringFlags = methods.validateStringFlags;
    this.getFlagsAsTasks = methods.getFlagsAsTasks;
    this.getTemplateResponse = methods.getTemplateResponse;
  }
}

export default Interpreter;
