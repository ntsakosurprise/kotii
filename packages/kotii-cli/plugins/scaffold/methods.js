/** 

 * Copyright (c) iiprodakts, PTY (LTD). and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the 
 * LICENSE file in the root directory of this source tree.
 * 
 * 
 
 */

/**
 * The methods container file for Scaffold plugin. Methods files in anzii
 * ecosystem's plugins are usually created to prevent clutter in the plugin's
 * class file
 
 
 */
const childProcess = require("child_process");
const path = require("path");
const fs = require("fs");
const ScaffoldError = require("./error-handler.js");
const SCAFFOLD_ERRORS = require("./constants.js");

const methods = {};

methods.init = function () {
  this.listens({
    "scaffold-app": this.handleScaffoldApp.bind(this),
  });
};

methods.handleScaffoldApp = function (data) {
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const createFolderContent = pao.pa_createFolderContent;
  const makeFolderSync = pao.pa_makeFolderSync;
  const getRootDir = pao.pa_getRootDir;
  const chalk = self.chalk;
  self.callback = data.callback;
  const command = data.command;
  let { appName, commandName = null, tasks = {} } = command;

  //   const {
  //     git = false,
  //     remote = false,
  //     public = false,
  //     private = false,
  //   } = tasks;

  self.infoSync("WORKING DIR");
  self.infoSync(getWorkingFolder());
  self.infoSync(data);

  //   let commandsLen = Object.keys(data.commands).length;
  let repoName = "";

  if (commandName) {
    repoName = appName;
    if (self.isExistingDir(repoName)) {
      console.log();
      console.log(
        `${chalk.red.bold("Error:")} The app name: ${chalk.cyan.bold(
          repoName
        )} already exists.`
      );
      console.log();
      console.log(`${chalk.yellow.bold("Please try a different name")}`);
      return self.callback({ message: "" });
    }
    if (tasks?.yes) {
      tasks = { ...self.defaultAnswers, ...tasks };
    }

    self
      .startQuestionnaire(self.mergeQuestions("general", tasks))
      .then((provideAnswers) => {
        // console.log('Questionaire answers')
        // console.log(answers)
        self.infoSync("General Answers");

        let answers = {};
        let mergeAnswers = self?.answers ? { ...self.answers } : {};
        answers = provideAnswers.truthy
          ? { ...mergeAnswers }
          : { ...provideAnswers, ...mergeAnswers };
        // console.log("THE PROVIDED ANSWERS", JSON.stringify(answers));
        self.infoSync(answers);
        let appType = answers.apptype;
        answers["remote"] = null;
        answers["init"] = "yes";
        answers["apptype"] =
          appType.indexOf("spa") >= 0
            ? "spa"
            : appType.indexOf("ssr") >= 0 || appType.indexOf("ssra") >= 0
            ? "ssr"
            : "ssr";
        self.infoSync("PROVIDED ANSWERS AFTER DELETION");
        self.infoSync(answers);
        // console.log("ANSWERS AFTER", answers);

        if (answers.remote && answers.remote.toLowerCase().trim() === "yes") {
          if (!self.isInternetConnected)
            return self.callback({
              message: "There's no internet connection to create remote repo",
            });
          self
            .startQuestionnaire({ remote: ["provider"] })
            .then((versionProvider) => {
              answers = { ...answers, ...versionProvider };
              // console.log("THE VERSION PROVIDER", versionProvider);
              self
                .getStoredUserToken({
                  version: versionProvider.provider.toLowerCase(),
                })
                .then((token) => {
                  // console.log("THE TOKEN RETURNED FROM GETSTOREDuSERTOKEN");
                  // console.log(token);

                  if (token.isNotFound) {
                    self
                      .startQuestionnaire({ remote: ["username", "password"] })
                      .then((credentials) => {
                        // console.log("THE USER CREDENTIALS");
                        // console.log(credentials);
                        // console.log("answers", answers);

                        self
                          .getRemoteUserToken({
                            ...credentials,
                            remote: answers.provider,
                          })
                          .then((token) => {
                            self
                              .startPostAuthenticationTasks(
                                token.token,
                                answers,
                                repoName
                              )
                              .then((repoUrl) => {
                                self.startProjectCreation(
                                  answers,
                                  repoName,
                                  repoUrl
                                );
                              });
                          })
                          .catch((e) => {
                            // return self.callback({message:{...answers,...credentials}})

                            return self.callback(e);
                          });
                      })
                      .catch((e) => {
                        return self.callback(e);
                      });
                  } else if (token.token) {
                    // console.log('THE TOKEN IS SET')
                    // console.log(token.token)

                    self
                      .startPostAuthenticationTasks(
                        token.token,
                        answers,
                        repoName
                      )
                      .then((repoUrl) => {
                        self.startProjectCreation(answers, repoName, repoUrl);
                      })
                      .catch((e) => {
                        // console.log('ERROR STARTING POST AUTH')
                        console.log(e);
                      });
                  } else {
                    // console.log('IT GETS HERE BECAUSE TOKEN SHOULD BE FETCHED FROM REMOTE')

                    self
                      .getRemoteUserToken({
                        ...token.creds,
                        remote: versionProvider.provider,
                      })
                      .then((remoteToken) => {
                        let mergeAnswers = {
                          ...token.creds,
                          description: answers.description,
                        };
                        self
                          .startPostAuthenticationTasks(
                            remoteToken.token,
                            mergeAnswers,
                            repoName
                          )
                          .then((repoUrl) => {
                            self.startProjectCreation(
                              answers,
                              data.commands.commands[1],
                              repoUrl
                            );
                          })
                          .catch((e) => {
                            console.log(e);
                            return self.callback({
                              message:
                                "There was an error running required tasks",
                            });
                          });
                      })
                      .catch((e) => {
                        console.log(e);
                        return self.callback({
                          message: "There was an error getting remote token",
                        });
                      });
                  }
                })
                .catch((e) => {
                  // console.log('The error in get user stored token')
                  console.log(e);
                  return self.callback({
                    message: "There was an error getting stored user token",
                  });
                });
            })
            .catch((e) => {
              console.log(e);
              return self.callback({
                message: "There was an error starting provider questionnaire",
              });
            });
        } else {
          //console.log(loadFile('./.config.js'))

          // console.log('Templates path')
          // console.log(`${getRootDir()}/templates/web`)

          //console.log(templatePath)

          self.startProjectCreation(answers, appName);
        }
      })
      .catch((e) => {
        return self.callback(e);
      });
  } else {
    return self.callback({
      message: `The length of the commands object is ${commandsLen}`,
    });
  }
};

methods.startQuestionnaire = function (queries) {
  // console.log('QUERIES FOR QUESTIONAIRRE')
  // console.log(queries)
  const self = this;
  const pao = self.pao;
  const contains = pao.pa_contains;
  //   const isA = isArray(queries);
  return new Promise((resolve, reject) => {
    if (contains(queries[Object.keys(queries)], "truthy"))
      return resolve({ truthy: true });

    const questions = self.questions;
    let setToAsk = queries;
    let toAsk = [];

    for (let ask in setToAsk) {
      if (contains(questions, ask)) {
        //  console.log('THE QUESTIONS OBJ CONTAINS PROP')

        setToAsk[ask].forEach((v, i) => {
          questions[ask].forEach((q) => {
            if (v === q.key) {
              toAsk.push(q);
            }
          });
          // console.log(i)
          // console.log(setToAsk[ask][i])
          // console.log(q)
          // console.log(q.key)

          // if(setToAsk[ask][i] === q.key ){

          // 	toAsk.push(q)
          // }
        });
      }
    }

    //    console.log('THE QUESTIONS')
    //    console.log(toAsk)

    self.emit({
      type: "prompt-user",
      data: {
        query: toAsk,
        callback: self.getInterpreterFeed.bind(self, resolve, reject),
      },
    });
  });
};

methods.createProjectBase = function (options, folderName, repoUrl) {
  const self = this;
  const pao = self.pao;
  const sep = path.sep;

  const getWorkingFolder = pao.pa_getWorkingFolder;
  //   const createFolderContent = pao.pa_createFolderContent;
  //   const makeFolderSync = pao.pa_makeFolderSync;
  //   const getRootDir = pao.pa_getRootDir;
  const { apptype, template } = options;
  // console.log("THE APP TYPE", options);

  return new Promise((resolve, reject) => {
    //   let templatePath = `${getWorkingFolder()}${sep}packages${sep}kotii-templates${sep}${template}${sep}${apptype}`;
    // console.log("THE TEMPLATE PATH", templatePath);
    //let dir = {templatePath,folderName: data.commands.commands[1]}
    let newFolder = `${getWorkingFolder()}${sep}${folderName}`;

    // return { newFolder, templatePath, folderName, repoUrl };
    self.emit({
      type: "get-template",
      data: {
        name: apptype,
        type: template,
        callback: (templateInfo) => {
          // console.log("THE TEMPLATE INFO ", templateInfo);
          // console.log("THE GET TEMPLATE", options);
          let kotiiMain = options["local-scripts"]
            ? options["local-scripts"]
            : null;
          let kotiiPackages = kotiiMain
            ? path.join(kotiiMain, "./packages")
            : null;

          resolve({
            newFolder,
            folderName,
            repoUrl,
            ...templateInfo,
            kotiiMain,
            kotiiPackages,
          });
        },
      },
    });
  });

  //   if (appType === "backend/api/web") appType = "web";

  //   let templatePath = `${getRootDir()}/${template}/${apptype}`;
};

methods.buildTaskList = async function (answers, options) {
  const self = this;
  const pao = self.pao;
  const sep = path.sep;
  const loadFileSync = pao.pa_loadFileSync;
  //  console.log('THE OPTIONS')
  //  console.log(options)

  let tasks = [
    {
      title: "Create project folder",
      task: () => self.makeFolder(options.newFolder),
    },

    {
      title: "Copy project files",
      task: () =>
        self.pao.pa_createFolderContent(
          options.templatePath,
          options.folderName,
          [
            "node_modules",
            "build",
            "dist",
            "webpack.config.js",
            ".babelrc",
            "yarn.lock",
          ]
        ),
    },
    {
      title: "Clean package json",
      task: () => self.doPackageJson(answers, options, true),
    },
    {
      title: "Modify package content",
      task: () => self.doPackageJson(answers, options),
    },
  ];

  answers.git && answers.git.trim().toLowerCase() === "yes"
    ? tasks.push({
        title: "Initialize git repo",
        task: async () =>
          await self.gitInit(options.newFolder, options.repoUrl),
      })
    : "";

  //  console.log('THE ANSWERS')
  //  console.log(answers)
  //  let DSSZXTTOOShhhhhisIntConn = await self.isInternetConnected()
  //  console.log(isIntConn)

  answers.init && answers.init.trim().toLowerCase() === "yes"
    ? (await self.isInternetConnected()) === false
      ? console.log(
          "NO_INTERNET_CONNECTION_DETECTED_ANZII-CLI_WILL_SKIP_NPM_INSTALLATION"
        )
      : tasks.splice(3, 0, {
          title: "Install dependent packages",
          task: async () => {
            let output = await self.packagesInstall(
              options.newFolder,
              answers.packager,
              options
            );

            if (output?.errored) {
              throw new ScaffoldError({
                message: "Dependecy installation failed",
                type: SCAFFOLD_ERRORS.INSTALLATION_ERROR,
                extendedError: { ...output.extendedError },
              });
            }

            let installed = null;
            if (self.isLocalRun) {
              let fileProtocol =
                answers.packager.toLowerCase() === "yarn" ? "file:" : "";
              let kotiiScriptsPackageJson = loadFileSync(
                path.join(
                  `${options.kotiiMain}${sep}packages${sep}kotii-scripts`,
                  "package.json"
                )
              );
              let kotiiStyledPackageJson = loadFileSync(
                path.join(
                  `${options.kotiiMain}${sep}packages${sep}kotii-styled`,
                  "package.json"
                )
              );
              installed = await self.installLocally(
                [
                  `${fileProtocol}${options.kotiiMain}${sep}packages${sep}kotii-scripts${sep}kotii-scripts-${kotiiScriptsPackageJson.version}.tgz`.trim(),
                  `${fileProtocol}${options.kotiiMain}${sep}packages${sep}kotii-styled${sep}kotii-styled-${kotiiStyledPackageJson.version}.tgz`.trim(),
                ],
                options.newFolder,
                answers.packager,
                options
              );
            }

            console.log("Done Installing Packages");
            console.log(installed);
            console.log(output);
          },
        })
    : "";

  // console.log("THE TASKS", tasks);

  // options.repoUrl && options.repoUrl.trim() !== ""
  //   ? (tasks = [
  //       { title: "Create remote repository", task: () => "" },
  //       ...tasks,
  //     ])
  //   : "";

  tasks.push({
    title: "Finalize Project creation",
    task: () => true,
  });

  return tasks;
};

methods.startProjectCreation = async function (
  answers,
  repoName,
  repoUrl = null
) {
  const self = this;
  const chalk = self.chalk;

  let rName = repoName;

  self.createProjectBase(answers, rName, repoUrl).then(async (options) => {
    // let options = self.createProjectBase(answers, rName, repoUrl);
    // console.log("THE PACKAGE JSON OPTIONS", options);
    self
      .runTasks(await self.buildTaskList(answers, options), {
        appName: options.folderName,
        userPath: options.newFolder,
      })
      .then(() => {
        console.log();
        console.log("%s Project created and ready!", chalk.green.bold("DONE!"));
        console.log();
        console.log(
          `To run your new app: ${chalk.green.bold(
            options.folderName
          )}, please type the the following on your terminal:`
        );
        console.log();
        console.log(`cd ${options.folderName}`);
        console.log(`${answers.packager} run dev`);
        console.log();
        console.log(`${chalk.green.bold("Happy Coding!")}`);
        console.log();
        return self.callback({ message: "" });
      })
      .catch(async (e) => {
        console.log("Running Tasks has failed", e);
        self.renderError(
          {
            customMessage: e.message,
            type: e.type,
            code: "error",
            message: e.extendedError.message,
            cmd: e.extendedError.cmd,
          },
          options
        );
        return self.callback({ message: "" });
      });
  });
};

methods.isExistingDir = function (repo) {
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const getRootDir = pao.pa_getRootDir;
  const isExistingDir = pao.pa_isExistingDir;
  const sep = path.sep;

  //  console.log(isExistingDir)
  //  console.log(pao)

  if (isExistingDir(`${getWorkingFolder()}${sep}${repo}`)) {
    //   console.log('THE FOLDER EXISTS')
    //   console.log(`${getWorkingFolder()}/${repo}`)
    return true;
  } else {
    // console.log('THE FOLDER DOES NOT EXIST')
    // console.log(`${getWorkingFolder()}/${repo}`)
    return false;
  }
};

methods.isInternetConnected = async function (repo) {
  const self = this;
  const pao = self.pao;
  const isOnline = self.isOnline;
  let isInternetUp = await isOnline();

  if (isInternetUp) {
    // console.log('tHERS INTERNET CONNECTION')
    // console.log(isInternetUp)
    return true;
  } else {
    // console.log('NO INTERNET')
    // console.log(isInternetUp)
    return false;
  }
};

methods.getStoredUserToken = function (vendor) {
  return new Promise((resolve, reject) => {
    const self = this;
    const pao = self.pao;
    if (vendor.version !== "bitbucket" || vendor.version !== "github") {
      self.emit({
        type: "get-from-config",
        data: {
          callback: self.getStoredUserTokenFeedback.bind(this, resolve, reject),
          key: vendor.version,
        },
      });
    } else {
      return resolve(false);
    }
  });
};

methods.getStoredUserTokenFeedback = function (resolve, reject, result) {
  const self = this;

  // console.log('THE CONFIG RESULT')
  // console.log(result)

  if (!result) {
    // console.log('Configstore could not complete')
    return reject(new Error("Configstore could not complete"));
  } else {
    if (result.isFound) {
      let found = result.found;
      let storedKeys = Object.keys(found);
      self.questions.account[0].choices = [...storedKeys];

      self.questions.account[0].choices.push("Another account");
      // console.log(self.questions.account[0].choices)

      self
        .startQuestionnaire({ account: ["account"] })
        .then((confirmAnswer) => {
          //  console.log('THE CONFIRM ANSWER')
          //  console.log(confirmAnswer.account.toLowerCase().trim()  === 'another account' )
          if (
            confirmAnswer.account.toLowerCase().trim() === "another account"
          ) {
            self
              .startQuestionnaire({ remote: ["username", "password"] })
              .then((answers) => {
                // console.log("Answers in getStoredConfig");
                // console.log(answers);
                return resolve({ creds: answers });
              })
              .catch((e) => {
                return reject(e);
              });
          } else {
            return resolve(found[confirmAnswer.account]);
          }
        })
        .catch((e) => {
          return reject(e);
        });
    } else {
      // console.log('THE CONFIG HAS NOT BEEN FOUND')
      return resolve({ isNotFound: true });
    }
  }
};

methods.getAccessCreds = function (data) {
  return new Promise((resolve, reject) => {
    const self = this;

    self.emit({
      type: "prompt-user",
      data: {
        query: self.getRemoteAccess,
        callback: self.getInterpreterFeed.bind(self, resolve, reject, res),
      },
    });
  });
};

methods.getTwoFactorAuthentication = function (data) {
  return new Promise((resolve, reject) => {
    const self = this;

    self.emit({
      type: "prompt-user",
      data: {
        query: self.getTwoFactor,
        callback: self.getInterpreterFeed.bind(self, resolve, reject, res),
      },
    });
  });
};

methods.getRemoteUserToken = function (data) {
  return new Promise((resolve, reject) => {
    const self = this;
    const github = self.github;
    const { username, password, remote } = data;
    const scopes = {
      scopes: ["user", "repo", "gist"],
      note: "Kotii-cli remote repository creation",
    };

    console.log("THE REMOTE");
    console.log(data);

    if (remote.toLowerCase() === "github") {
      self.emit({
        type: "get-gitauth-token",
        data: {
          callback: self.getRemoteUserTokenFeedback.bind(
            this,
            resolve,
            reject,
            remote.toLowerCase()
          ),
          getCreds: { username, password, scopes },
        },
      });
    } else if (remote.toLowerCase() === "bitbucket") {
      self.emit({
        type: "get-bitauth-token",
        data: {
          callback: self.getRemoteUserTokenFeedback.bind(
            this,
            resolve,
            reject,
            remote.toLowerCase()
          ),
          getCreds: { username, password, scopes },
        },
      });
    } else {
      return reject(new Error("No supported remote token source"));
    }
  });
};

methods.getRemoteUserTokenFeedback = function (
  resolve,
  reject,
  vendor,
  err = null,
  result = null
) {
  const self = this;

  // console.log('THE CONFIG RESULT')
  // console.log(result)

  if (err) {
    // console.log('Configstore could not complete')
    // console.log('THE ERROR OCCURED')
    // console.log(err)
    return reject(err);
  } else {
    //  console.log('REMOTE TOKEN RESULT')
    //  console.log(result)

    // let accessToken = result.accessToken
    // console.log(accessToken)

    // let accessToken = {token: token,tokenID: id, userID: username}

    // self.storeUserConfigs({key:username,value:accessToken })

    self.emit({
      type: "store-in-config",
      data: {
        // callback: self.getRemoteUserTokenFeedback.bind(this,resolve,reject),
        key: `${vendor}.${result.userID}`,
        value: result,
      },
    });

    return resolve(result);
  }
};

methods.authenticateUser = function (token) {
  //   console.log('AUTHENTICATE USERS')
  //   console.log(token)
  return new Promise((resolve, reject) => {
    const self = this;
    const github = self.github;
    const client = github.client(token);
    return resolve(client);
  });
};

methods.startPostAuthenticationTasks = function (token, answers, repoName) {
  // console.log('STARTpostauthentication tasks')
  // console.log(token)
  // console.log(answers)
  // console.log(repoName)

  return new Promise((resolve, reject) => {
    const self = this;
    self
      .authenticateUser(token)
      .then((client) => {
        //   console.log('THE WEB PLUGIN')
        //   console.log(client)

        let options = {
          name: repoName,
          private: answers.private ? true : false,
          description:
            answers.description.trim() !== ""
              ? answers.description
              : `This is a ${repoName} app`,
        };

        self
          .createRemoteRepo(client, options)
          .then((repoUrl) => {
            //   console.log('THE REMOTE REPO URL')
            //   console.log(repoUrl)
            return resolve(repoUrl);
            //   self.callback({message: "Finished creating remote url"})
          })
          .catch((e) => {
            return reject(e);
          });
      })
      .catch((e) => {
        //  console.log('Error authenticating')
        //  console.log(e)
        return reject(e);
        // process.exit(1)
      });
  });
};

methods.storeUserConfigs = function (data) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const { key, value } = data;
  const sep = path.sep;
  const config = new self.Configstore(loadFile(`.${sep}package.json`).name);
  config.set(key, value);
};

methods.getScaffoldOptions = function (data) {
  return new Promise((resolve, reject) => {
    const self = this;

    self.emit({
      type: "prompt-user",
      data: {
        query: self.getScaffolOpts,
        callback: self.getInterpreterFeed.bind(self, resolve, reject, res),
      },
    });
  });
};

methods.createRemoteRepo = function (authenticatedClient, options) {
  //  console.log('CREATE REMOTE REPO')
  //  console.log(authenticatedClient)
  //  console.log(options)

  return new Promise((resolve, reject) => {
    const self = this;

    authenticatedClient.me().repo(
      options,

      (err, res) => {
        if (err) {
          // console.log('Failed to create remote repo')
          return reject(err);
        } else {
          let url = res.clone_url;
          return resolve(url);
        }
      }
    );
  });
};

methods.getInterpreterFeed = function (resolve, reject, res = null) {
  const self = this;

  if (!res) {
    return reject(new Error("There was an error collecting answers"));
  } else {
    return resolve(res);
  }
};

methods.gitInit = function (initFolder, remoteUrl = null) {
  const self = this;
  const git = self.simpleGit(initFolder);

  // git.cwd(initFolder)

  return new Promise((resolve, reject) => {
    git
      .init()
      .add(".")
      .commit("Add initial commit to this repo")
      .then(() => resolve(true))
      .catch((e) => {
        //    console.log('GIT INIT ERROR')
        //    console.log(e)
        reject(e);
      });

    // 	if(remoteUrl){

    // 		git.init()
    // 	   .add('.')
    // 	   .commit('Add initial commit to this repo')
    // 	   .addRemote('origin',remoteUrl)
    // 	   .push('origin', 'master')
    // 	   .then(()=>resolve(true))
    // 	   .catch((e)=>{

    // 		   console.log('GIT INIT ERROR')
    // 		   console.log(e)
    // 		   reject(false)
    // 	   })

    //    }else{

    // 	   git.init()
    // 	   .add('.')
    // 	   .commit('Add initial commit to this repo')
    // 	   .then(()=>resolve(true))
    // 	   .catch((e)=>{

    // 		   console.log('GIT INIT ERROR')
    // 		   console.log(e)
    // 		   reject(false)
    // 	   })

    //    }
  });
};

methods.packagesInstall = function (packagesFolder, packager = null, options) {
  return new Promise(async (resolve, reject) => {
    const self = this;
    //    console.log(self)
    const projectInstall = self.projectInstall;

    // console.log("After projectInstall");
    // console.log(projectInstall);

    // const {options} = data
    // options && options.cli ? self.scaffoldCliApp : self.scaffoldApp
    // self.logSync("Handling send-outpit Cli event")
    // self.logSync("About to send output to std")
    // self.logCli(data.message)

    //   projectInstall({
    // 	  cwd: packagesFolder,
    // 	}),

    // const { stdout } = await projectInstall({
    //   prefer: packager ? packager : "npm",
    //   cwd: packagesFolder,
    // });

    let installResult = await self.runTerminal({
      context: packagesFolder,
      packager,
      installOptions:
        packager === "npm" ? ["--force", "--loglevel silent"] : null,
      options,
    });
    resolve(installResult);

    // console.log("Local install results", installResult);

    // console.log('THE INSTALLATION OUTPUT')
    // console.log(stdout);

    // resolve(stdout);
  });
};

methods.installLocally = function (packages, folder, packager = null, options) {
  console.log("THE PACKAGES INSTALL LOCALLY", packages);
  console.log("PACKAGES.LENGTH", packages.length);
  return new Promise((resolve, reject) => {
    let installations = packages.map(async (package) => {
      const self = this;
      console.log("THE PACKAGE", package);
      return await self.runTerminal({
        packages: package,
        context: folder,
        packager,
        options,
        installOptions: packager === "npm" ? ["--force"] : null,
        stdIO: "inherit",
      });
    });
    Promise.all(installations).then((completed) => {
      console.log("MADE INSTALLATIONS", installations);
      resolve(completed);
    });
  });

  //   // console.log('THE INSTALLATION OUTPUT')
  //   // console.log(stdout);
  //   resolve(installations);
  // });
};

methods.makeFolder = function (filepath) {
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const createFolderContent = pao.pa_createFolderContent;
  const makeFolderSync = pao.pa_makeFolderSync;
  const getRootDir = pao.pa_getRootDir;

  return makeFolderSync(filepath);
};

methods.doPackageJson = function (answers, options, deletePackage = false) {
  const self = this;
  const pao = self.pao;
  const sep = path.sep;
  const loadFileSync = pao.pa_loadFileSync;
  const saveToFile = pao.pa_saveToFile;
  const getRootDir = pao.pa_getRootDir;
  const packageJson = loadFileSync(
    path.join(options.templatePath, "package.json")
  );
  // console.log("THE TEMPLATES PACKAGEJSON", packageJson);

  if (deletePackage) {
    // console.log("DELETE PACKAGE", packageJson);
    if (packageJson.dependencies["kotii-scripts"].indexOf("file") >= 0) {
      // console.log("Index of ZERO", options);
      const scriptsJson = loadFileSync(
        path.join(options.kotiiPackages, `kotii-scripts${sep}package.json`)
      );
      // console.log(
      //   "THE SCRIPT JSON PATH",
      //   path.join(options.kotiiPackages, "kotii-scripts/package.json")
      // );
      // console.log("THE SCRTIPS JSON", scriptsJson);
      self.isLocalRun = true;
      delete packageJson.dependencies["kotii-scripts"];
      packageJson["devDependencies"] = { ...scriptsJson.devDependencies };

      saveToFile(
        path.join(options.newFolder, "package.json"),
        JSON.stringify(packageJson, null, 2)
      );
    }
    //   // console.log("THE OPTIONS IN DO PACKAGE JSON", answers, options);

    return;
  }
  // let fileFolder = getRootDir(module.name);
  // console.log("FILE FOLDER BASE", path.basename(fileFolder));
  packageJson["name"] = options.folderName;
  packageJson["description"] = answers?.description ? answers.description : "";
  // packageJson.dependencies["kotii-scripts"] = answers["local-scripts"];
  packageJson["scripts"] = {
    dev: "kotii dev",
    start: "kotii start",
    static: "kotii static",
    build: "kotii build",
  };
  saveToFile(
    path.join(options.newFolder, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );

  // console.log("THE LOADED FILE", packageJson);

  //   return makeFolderSync(filepath);
};

methods.runTasks = async function (toRun, info) {
  const self = this;
  const Listr = self.Listr;
  const chalk = self.chalk;

  const tasks = new Listr(toRun);

  console.log();
  console.log(
    `Creating app: ${chalk.cyan.bold(info.appName)} in: ${chalk.cyan.bold(
      info.userPath
    )}`
  );

  console.log();
  await tasks.run();
  return true;
};

methods.getMoData = async function (resolve, reject, result) {
  const self = this;

  if (!result) {
    return reject(new Error("There was an error collecting answers"));
  } else {
    return resolve(result);
  }
};

methods.mergeQuestions = function (qsGroup, merge) {
  // console.log("THE MERGE GROUP", qsGroup);
  // console.log("MERGE", merge);
  const self = this;
  const questions = self.questions;
  const groupQuestions = questions[qsGroup].map((qs) => qs.name);

  // console.log("groupMap", JSON.stringify(groupQuestions));
  let initialAnswers = {};
  if (!merge) return { [qsGroup]: [...groupQuestions] };

  Object.keys(merge).forEach((ma) => {
    let skip = false;
    if (ma === "public" || ma === "private") {
      initialAnswers["repotype"] = ma;
      self.deleteMatchedQuestion("repotype", groupQuestions);
      skip = true;
    }
    if (ma === "template") {
      initialAnswers["template"] = merge[ma];
      self.deleteMatchedQuestion("template", groupQuestions);
      skip = true;
    }
    if (ma === "type") {
      initialAnswers["apptype"] = merge[ma];
      self.deleteMatchedQuestion("apptype", groupQuestions);
      skip = true;
    }
    if (ma === "packager") {
      initialAnswers["packager"] = merge[ma];
      self.deleteMatchedQuestion("packager", groupQuestions);
      skip = true;
    }

    !skip && typeof merge[ma] != "string"
      ? (initialAnswers[ma] = "yes")
      : (initialAnswers[ma] = merge[ma]);
    self.deleteMatchedQuestion(ma, groupQuestions);
  });

  // console.log("FOUND ANSWERS", initialAnswers);
  // console.log("FOUND QUESTIONS", groupQuestions);
  // console.log("Merge", merge);
  // console.log("isREMOTE", initialAnswers?.remote);
  // console.log("Is git", initialAnswers?.remote && !initialAnswers?.git);
  initialAnswers?.remote && !initialAnswers?.git
    ? ((initialAnswers["git"] = "yes"),
      self.deleteMatchedQuestion("git", groupQuestions))
    : null;

  if (initialAnswers) self.answers = initialAnswers;
  if (groupQuestions.length === 0) return { [qsGroup]: ["truthy"] };
  return { [qsGroup]: [...groupQuestions] };
};

methods.deleteMatchedQuestion = function (toDelte, groupQuestions) {
  const self = this;
  const contains = self.pao.pa_contains;
  contains(groupQuestions, toDelte)
    ? groupQuestions.splice(groupQuestions.indexOf(toDelte), 1)
    : "";
};

methods.runTerminal = function ({
  packages,
  context,
  packager,
  installOptions = [],
  stdIO = "ignore",
  options,
} = args) {
  return new Promise((resolve, reject) => {
    console.log("THE PACKAGES", packages);
    const self = this;
    try {
      let commandToRun = self[`${packager}InstallationConfig`]({
        packages: packages && packages.trim() ? [packages] : null,
        options: installOptions ? installOptions : null,
      });
      console.log("THE COMMAND TO RUN", commandToRun);
      let currentWorkingDirectory = context;

      // console.log(
      //   "CUDRREN WORK DIR",
      //   currentWorkingDirectory,
      //   package,
      //   commandToRun
      // );
      // console.log(
      //   "COMMAND TO RUN",
      //   `sudo ${commandToRun} ${package} --include dev`
      // );

      childProcess.exec(
        `${commandToRun}`,
        {
          stdio: stdIO,
          cwd: `${currentWorkingDirectory}`,
        },
        (err, stdout, stderr) => {
          // console.log("THE CHILD PROCESS HAS COMPLETED WITH:", err);
          if (err) {
            // self.renderTerminalError(err, options);
            // console.log()
            resolve({
              errored: true,
              extendedError: { ...err, message: `${err}` },
            });
          } else {
            resolve(stdout);
          }
        }
      );
    } catch (error) {
      console.log("THE TRY EERROR", error);
      resolve({
        errored: true,
        extendedError: { ...error, message: `${error}` },
      });
    }

    // console.log("THE CREATED TAR", installRes);
    // return installRes;
  });
};
methods.renderTerminalError = async function (err, options) {
  // console.log("RENDER TERMINAL ERROR OPTIONS", options);
  const self = this;
  const chalk = self.chalk;
  const Listr = self.Listr;
  const tasks = new Listr([
    {
      title: "Delete made folder and generated files",
      task: () => self.cancellProjectCreation(options.newFolder),
    },
    {
      title: "Finishing up clean-up",
      task: () => {
        fs.existsSync(options.newFolder);
      },
    },
  ]);

  // console.log("ERROR MESSAGE", err.message);
  // console.log("ERROR JSON", JSON.stringify(err));
  console.log();
  console.log(
    `${err.cmd ? "Command:" : "Action"}${chalk.cyan.bold(
      err?.cmd || ""
    )} has failed with error: ${chalk.red.bold(err.message)}`
  );
  console.log();
  console.log(
    `Kotii will cancell creation of project: ${chalk.red.bold("newMetta")} `
  );
  await tasks.run();
  console.log();
  console.log(
    `Project creation of: ${chalk.cyan.bold(
      options.folderName
    )} has been ${chalk.red("cancelled")}`
  );
  console.log();
  process.exit(1);
};
methods.cancellProjectCreation = function (userPath) {
  fs.rmSync(userPath, { recursive: true, force: true });
  return true;
};

methods.renderError = function (err, options) {
  const self = this;
  if (SCAFFOLD_ERRORS[err.type.toUpperCase()]) {
    self[self.camelCaseText(err.type.toUpperCase(), "_")](err, options);
  } else {
    self[SCAFFOLD_ERRORS["UNKNOWN_ERROR"]](err, options);
  }
};

methods.installationError = async function (err, options) {
  const self = this;
  await self.renderTerminalError(err, options);
};

methods.unknownError = async function (err, options) {
  const self = this;
  console.log("UNKNOW ERROR TEST");
};
methods.createFolderError = async function () {
  const self = this;
  await self.renderTerminalError(err, options);
};
methods.capitalizeFirstLetter = function (text) {
  const self = this;
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};
methods.camelCaseText = function (text, delimeter) {
  const self = this;
  if (!text || !delimeter) {
    throw new Error("Please provide text and delimeter to camel case");
  } else {
    let camelCased = text
      .split(delimeter)
      .map((piece, index) => {
        if (index > 0) {
          return self.capitalizeFirstLetter(piece.toLowerCase());
        } else {
          return piece.toLowerCase();
        }
      })
      .join("");

    return camelCased;

    //  let camelCased =
    //  return
  }
};
methods.npmInstallationConfig = function ({
  packages = null,
  options = null,
} = args) {
  const self = this;
  let installString = "";
  if (packages && options) {
    installString = `npm i ${packages.join(" ")} ${options.join(" ")}`;
    return installString;
  } else if (packages) {
    installString = `npm i ${packages.join(" ")}`;
    return installString;
  } else if (options) {
    installString = `npm i ${options.join(" ")}`;
    return installString;
  } else {
    installString = `npm i ${packages.join(" ")}`;
    return installString;
  }
};
methods.yarnInstallationConfig = function ({
  packages = null,
  options = null,
} = args) {
  const self = this;
  console.log("YARN INSTALL", packages);
  let installString = "";
  if (packages && options) {
    console.log("YARN INSTALL PACKAGES AND OPTIONS", options);
    installString = `yarn add ${packages.join(" ")} ${options.join(" ")}`;
    return installString;
  } else if (packages) {
    console.log("YARN INSTALL PACKAGES");
    installString = `yarn add ${packages.join(" ")}`;
    return installString;
  } else if (options) {
    console.log("YARN INSTALL OPTIONS", options);
    installString = `yarn install ${options.join(" ")}`;
    return installString;
  } else {
    console.log("YARN INSTALL NO OPTIONS", options);
    installString = `yarn install`;
    return installString;
  }
};
methods.pnpmInstallationConfig = function ({
  packages = null,
  options = null,
} = args) {
  const self = this;
  let installString = "";
  if (packages && options) {
    installString = `pnpm add ${packages.join(" ")} ${options.join(" ")}`;
    return installString;
  } else if (packages) {
    installString = `pnpm add ${packages.join(" ")}`;
    return installString;
  } else if (options) {
    installString = `pnpm install ${options.join(" ")}`;
    return installString;
  } else {
    installString = `pnpm install`;
    return installString;
  }
};
module.exports = methods;
