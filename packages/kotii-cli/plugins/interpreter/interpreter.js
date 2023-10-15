const methods = require("./methods");
const { commands, stringFlagsMessages } = require("./commands");

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
    this.commands = commands;
    this.messages = stringFlagsMessages;

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
    this.processOptionsAsCommands = methods.processOptionsAsCommands;
    this.createCommandAlias = methods.createCommandAlias;
    this.capitalizeFirstLetter = methods.capitalizeFirstLetter;
    this.createApp = methods.createApp;
    this.commandOptionMissing = methods.commandOptionMissing;
    this.validateStringFlags = methods.validateStringFlags;
    this.getFlagsAsTasks = methods.getFlagsAsTasks;
  }
}

module.exports = Interpreter;
