import methods from "./methods.js";
import arg from "arg";
import chalk from "chalk";
import figlet from "figlet";
import cleya from "clear";
import * as inquirer from "inquirer";
class Interpreter {
    constructor(pao) {
        this.pao = pao;
        this.arg = arg;
        this.chalk = chalk;
        this.figlet = figlet;
        this.clear = cleya;
        this.inquirer = inquirer;
        this.commands = {
            ["create-anzii-app"]: "create-anzii-app",
        };
        this.init = methods.init;
        this.handleInterpreterCliInput = methods.handleInterpreterCliInput;
        this.handlePromptUser = methods.handlePromptUser;
        this.handleCommands = methods.handleCommands;
        this.getFeedback = methods.getFeedback;
        this.prompt = methods.prompt;
        this.outPut = methods.outPut;
        this.showAvailableCommands = methods.showAvailableCommands;
        this.createAnziiAppCommand = methods.createAnziiAppCommand;
        this.helpCommand = methods.helpComand;
        this.versionCommand = methods.versionCommand;
    }
}
export default Interpreter;
