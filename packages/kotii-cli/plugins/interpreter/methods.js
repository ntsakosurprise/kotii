/* eslint-disable no-unused-vars */
let methods = {};
methods.init = function () {
  this.logSync("Interpreter is initialising");
  this.listens({
    "start-io-operations": this.handleInterpreterCliInput.bind(this),
    "prompt-user": this.handlePromptUser.bind(this),
  });
};

methods.handleInterpreterCliInput = async function (data) {
  console.log("HANDLING INTERPRETER");
  const self = this;
  const pao = self.pao;
  const contains = pao.pa_contains;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const loadFile = pao.pa_loadFile;
  const getMainFileName = pao.pa_getMainFileName;
  const getRootDir = pao.pa_getRootDir;
  const arg = self.arg;
  const figlet = self.figlet;
  const chalk = self.chalk;
  let stopFurtherExecution = false;

  self.info("LOGGING");
  self.logSync("Handling send-output Cli event");
  self.logSync("About to send output to std");
  self.logSync("LOGGING");
  self.infoSync("ilog");

  /*
   Use arg package to get passed arguments to the cli. 
   This arg packages take two objects: 1. An object of commands to be checked for availability.
   2. An object of possible arguments passed to the cli script/ program
  */

  const commands = arg(
    {
      "--cli": Boolean,
      "--web": Boolean,
      "--remote": Boolean,
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "--private": Boolean,
      "--public": Boolean,
      "--version": Boolean,
      "--help": Boolean,
      "-c": "--cli",
      "-w": "--web",
      "-r": "--remote",
      "-g": "--git",
      "-y": "--yes",
      "-i": "--install",
      "-h": "--help",
    },
    {
      argv: pao.PROMPT.slice(2), // Get passed arguments from the third item in the array of passed arguments
    }
  );

  /**
   * Passed expected commands will be included in the _ property of the commands object returned by arg
     Below, we check if the _ property contain any items, and if the first item is not 'cli'.
	 About the cli argument, we menually set this at the beginning of our cli operations to be used for
	 some internal configurations for cli applications built with kotii framework.
   * */
  if (commands._.length > 0 && commands._[0] !== "cli") {
    // Get passed user commands from arg object
    let userPassedCommands = commands._;
    // Get the first item from the commands. This item is considered a command
    // let firstItemAsCommand = userPassedCommands[0];
    // console.log("userPassedCommands", userPassedCommands);
    // console.log("Objects commands", Object.keys(commands));

    // if (Object.keys(commands).length <= 1) {
    //   let skip = false;
    //   if (
    //     firstItemAsCommand === "create-kotii-app" &&
    //     userPassedCommands.length > 2
    //   )
    //     skip = true;

    //   /*
    //    Only process commands if they are not create-kotii-app and passed commands are less than or equal to 2.
    //    These are used for help purposes and end with a 'Command' string
    //    */
    //   if (!skip) {
    //     let com = firstItemAsCommand; // Get the first expected command
    //     /*
    // 	map the command to any of the keys defined for a given expected command in the app. This was to enable alternative
    // 	commands to the cli
    //   */
    //     if (com === "--help" || com === "-h") com = "help";
    //     if (com == "--version" || com === "-v") com = "version";
    //     if (com === "create-kotii-app") {
    //       com = "createkotiiAppCommand"; // Set this command for create-kotii-app command help
    //     } else {
    //       com = `${com}Command`; // Append Command string to evey command
    //     }

    //     if (self[com]) {
    //       return self[com]();
    //     } else {
    //       console.log("THE PROCESS IS EXITING WITH ERROR CODE", com);
    //       process.exit(1);
    //     }
    //   }
    // }

    for (let cmd = 0; cmd < userPassedCommands.length; ++cmd) {
      let commandName = userPassedCommands[cmd];
      self.logSync("COMMAND NAME", commandName);
      self.logSync("THE SELF COMMANDS", self.commands);
      if (contains(self.commands, commandName) && self[commandName]) {
        console.log("THE APP CONTAINS THE COMMAND", self[commandName]);
        if (self[commandName]) self[commandName]();
        stopFurtherExecution = true;
        break;
      } else {
        let newOptions = { ...commands };
        newOptions.commands = userPassedCommands;
        delete newOptions._;
        let i = newOptions.commands.indexOf("cli");
        if (i > 0) newOptions.commands.splice(i, 1);

        // console.log(
        //   chalk.yellow(
        //     figlet.textSync("Welcome to kotii-CLI", {
        //       horizontalLayout: "full",
        //     })
        //   )
        // );

        self.emit({
          type: userPassedCommands[cmd],
          data: {
            commands: newOptions.commands,
            callback: self.getFeedback.bind(self),
          },
        });
        break;
      }
    }
  } else {
    console.log("THE LENGTH IS");
    /*
	  Show available commands that are expected to be passed if none of them has been passed to the script.
	  showAvailableCommands() contains a list of valid commands available to the cli program.
	
	*/
    return self.showAvailableCommands();
  }

  if (stopFurtherExecution) return;

  // let message = [  {

  // 	name: 'apptype',
  // 	type: 'list',
  // 	message: 'What type of kotii app would you like to create?',
  // 	choices: ['backend/api/web','cli']

  // 	 }
  // 	]

  // console.log(
  // 	chalk.yellow(
  // 	  figlet.textSync('Welcome to kotii-CLI', { horizontalLayout: 'full' })
  // 	)
  //   );

  //   self.prompt({message})
  //   .then((input)=>{

  // 	console.log(input)
  // 	console.log(chalk.green(
  // 		'Question successfully answered'
  // 	  ))

  //   })
  //   .catch((e)=>{

  // 	console.log(chalk.red('An error occured prompting for input'));
  // 	process.exit(1)

  //   })
};

methods.handlePromptUser = function (data) {
  const self = this;

  // console.log('DATA IN HANDLE PROMPT')
  // console.log(data)
  const { callback, query } = data;

  self
    .prompt({ message: query })
    .then((answers) => {
      callback(answers);
    })
    .catch((e) => {
      callback(e);
    });
};

methods.handleCommands = function (parsedCommands) {
  const self = this;
  const commands = self.commands;
  self.logSync("Handling possible tasks storage");

  if (commands.alias) {
    if (commands.alias === parsedCommands.command) {
      self.emit({
        type: commands.command,
        data: {
          callback: self.getFeedback.bind(this),
          commands: parsedCommands,
        },
      });
    } else {
      self.logSync(
        `command: ${parsedCommands} command is not recognised as kotii cli command, please type "kotii --help" to see a list of valid kotii commands.`
      );
    }
  }
};

methods.getFeedback = function (data) {
  const self = this;
  let { message } = data;

  // if(typeof message === 'object')
  self.outPut(message);
};

methods.prompt = function (data) {
  return new Promise((resolve, reject) => {
    const self = this;
    // const {callback} = data
    const { message } = data;
    const inquirer = self.inquirer;

    // input = await inquirer.prompt(message)
    // return input

    inquirer
      .prompt(message)
      .then((input) => {
        resolve(input);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

methods.outPut = function (message) {
  const self = this;
  const chalk = self.chalk;
  const figlet = self.figlet;

  if (typeof message === "object") return console.log(message);
  console.log(chalk.yellow(message));
};

methods.showAvailableCommands = function () {
  const self = this;
  const chalk = self.chalk;
  let mainHelp = `

	${chalk.greenBright("kotii [command] <options>")}
	  ${chalk.cyan.bold("create-kotii-app")} ................ Creates kotii app
	  ${chalk.cyan.bold(
      "version"
    )} ............ show the current version of kotii-cli
	  ${chalk.cyan.bold("help")} ............... show help menu for a command
	`;

  console.log(mainHelp);
};

methods.helpComand = function () {
  const self = this;
  const chalk = self.chalk;
  let help = `

	${chalk.greenBright("help <options>")}
	  ${chalk.cyan.bold("-c | --cli")} ................... Creates kotii cli app
	  ${chalk.cyan.bold(
      "-w | --web"
    )} ................... Creates kotii app suitable for building web pages, apis, and any backend
	  ${chalk.cyan.bold(
      "-r | --remote"
    )} ................ Creates a remote repo and initial commit for you kotii app 
	  ${chalk.cyan.bold(
      "-help | --help"
    )} ............... Shows help menu for create-kotii-app command
	  ${chalk.cyan.bold(
      "-g | --git"
    )} ................... Initializes git for your kotii app
	  ${chalk.cyan.bold(
      "-y | --yes"
    )} ................... Creates kotii app with default settings
	`;

  console.log(help);
};

methods.versionCommand = function () {
  const self = this;
  const pao = self.pao;
  const chalk = self.chalk;
  const loadFile = pao.pa_loadFile;
  console.log(loadFile("./package.json").version);
  // let help = `

  // ${chalk.greenBright('version <options>')}
  //   ${chalk.cyan.bold('-c | --cli')} ................ Creates kotii cli app
  //   ${chalk.cyan.bold('-w | --web')} ............ Creates kotii app suitable for building web pages, apis, and any backend
  //   ${chalk.cyan.bold('-r | --remote')} ............... Creates a remote repo and initial commit for you kotii app
  //   ${chalk.cyan.bold('-help | --help')} ............... Shows help menu for create-kotii-app command
  //   ${chalk.cyan.bold('-g | --git')} ............... Initializes git for you kotii app
  //   ${chalk.cyan.bold('-y | --yes')} ............... Creates kotii app with default settings
  // `

  // console.log(help)
};

methods.createKotiiAppCommand = function () {
  const self = this;
  const chalk = self.chalk;
  let help = `

	${chalk.greenBright("create-kotii-app <options>")}

	  ${chalk.cyan.bold(
      "-c | --cli"
    )}    ................... Creates kotii app suitable for building cli apps
	  ${chalk.cyan.bold(
      "-w | --web"
    )}    ................... Creates kotii app suitable for building web pages, apis, and any backend
	  ${chalk.cyan.bold(
      "-r | --remote"
    )} ................... Creates a remote repo and an initial commit for your kotii app 
	  ${chalk.cyan.bold(
      "-h | --help"
    )}   ................... Shows help menu for create-kotii-app command
	  ${chalk.cyan.bold(
      "-g | --git"
    )}    ................... Initializes git for your kotii app
	  ${chalk.cyan.bold(
      "-y | --yes"
    )}    ................... Creates kotii app with default settings
	`;

  console.log(help);
};

methods.startCommand = function () {
  const self = this;
  const pao = self.pao;
  const chalk = self.chalk;
};

module.exports = methods;