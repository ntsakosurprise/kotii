
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

const methods = {}

methods.init = function(){
  
  
	this.listens({
		
		'create-anzii-app': this.handleScaffoldApp.bind(this)
	})
	
	
}


methods.handleScaffoldApp = function(data){

 
	const self = this 
	const pao = self.pao 
	const getWorkingFolder =  pao.pa_getWorkingFolder 
	const createFolderContent = pao.pa_createFolderContent 
	const makeFolderSync = pao.pa_makeFolderSync 
	const getRootDir = pao.pa_getRootDir
	self.callback = data.callback 

	
	

	


	
	let commandsLen = Object.keys(data.commands).length 
	let repoName = ''

	if(commandsLen === 1){

		repoName = data.commands.commands[1] 
		if(self.isExistingDir(repoName)) return self.callback({message: "The set app name has been taken"})  
		
		
		self.startQuestionnaire({general: ['type','description','git','init','repotype','remote']})
		.then((answers)=>{

			// console.log('Questionaire answers')
			// console.log(answers) 
			if(answers.remote && answers.remote.toLowerCase().trim() === 'yes'){

         		if(!self.isInternetConnected) return self.callback({message: "There's no internet connection to create remote repo"})
				self.startQuestionnaire({remote: ['provider']})
				.then((versionProvider)=>{

					self.getStoredUserToken({version: versionProvider.provider})
					.then((token)=>{

						// console.log('THE TOKEN RETURNED FROM GETSTOREDuSERTOKEN')
						// console.log(token) 

				
						if(token.isNotFound){

							self.startQuestionnaire({remote: ['username','password']})
							.then((credentials)=>{

								// console.log('THE USER CREDENTIALS')
								// console.log(credentials) 
				
								self.getRemoteUserToken({...credentials,remote: answers.provider})
								.then((token)=>{

								self.startPostAuthenticationTasks(token.token,answers,repoName)
									.then((repoUrl)=>{

										self.startProjectCreation(answers,repoName,repoUrl)
									})

								})
								.catch((e)=>{
									// return self.callback({message:{...answers,...credentials}})

									return self.callback(e)

								})

								

							})
							.catch((e)=>{

								return self.callback(e)
							})


						}else if(token.token){

								// console.log('THE TOKEN IS SET')
								// console.log(token.token)

								self.startPostAuthenticationTasks(token.token,answers,repoName)
								.then((repoUrl)=>{

									self.startProjectCreation(answers,repoName,repoUrl)
					
								})
								.catch((e)=>{

									// console.log('ERROR STARTING POST AUTH')
									console.log(e)
								})
						}else{

							// console.log('IT GETS HERE BECAUSE TOKEN SHOULD BE FETCHED FROM REMOTE')
		
							self.getRemoteUserToken({...token.creds,remote: versionProvider.provider})
							.then((remoteToken)=>{

								let mergeAnswers = {...token.creds,description: answers.description}
								self.startPostAuthenticationTasks(remoteToken.token,mergeAnswers,repoName)
								.then((repoUrl)=>{

									self.startProjectCreation(answers,data.commands.commands[1],repoUrl)
								

								})
								.catch((e)=>{

									console.log(e) 
									return self.callback({message: 'There was an error running required tasks'})
								})
								
							})
							.catch((e)=>{
								console.log(e)
								return self.callback({message: 'There was an error getting remote token'})
							})

								
						}
					})
					.catch((e)=>{

						// console.log('The error in get user stored token')
						console.log(e)
						return self.callback({message: 'There was an error getting stored user token'})
					})

				})
				.catch((e)=>{

					console.log(e)
					return self.callback({message: 'There was an error starting provider questionnaire'})

				})
				

				
			}else{

				
			
				//console.log(loadFile('./.config.js'))

				// console.log('Templates path') 
				// console.log(`${getRootDir()}/templates/web`)
				
				
				
				//console.log(templatePath) 
				
				
				self.startProjectCreation(answers,data.commands.commands[1])

				
			}
			

		})
		.catch((e)=>{

			return self.callback(e)
		})

	}else{

		return self.callback({message: `The length of the commands object is ${commandsLen}`})


	}
	

	
} 

methods.startQuestionnaire = function(queries){ 

	// console.log('QUERIES FOR QUESTIONAIRRE')
	// console.log(queries)
	return new Promise((resolve,reject)=>{
   
	   const self = this 
	   const pao = self.pao 
	   const contains = pao.pa_contains
	   const questions = self.questions 
	   let   setToAsk = queries
	   let toAsk = [] 
	   

	   for(let ask in setToAsk){ 

		  
		 if(contains(questions,ask)){
			 
			//  console.log('THE QUESTIONS OBJ CONTAINS PROP')
			
			 setToAsk[ask].forEach((v,i)=>{
				
				questions[ask].forEach((q)=>{

					if(v === q.key){

						toAsk.push(q)
					}

				})
				// console.log(i)
				// console.log(setToAsk[ask][i])
				// console.log(q)
				// console.log(q.key)
				
				// if(setToAsk[ask][i] === q.key ){

				// 	toAsk.push(q)
				// }

			 })
		 }


	   }

	//    console.log('THE QUESTIONS')
	//    console.log(toAsk)


	   self.emit({type:'prompt-user',data:{
	  	  
			query: toAsk,
			callback: self.getInterpreterFeed.bind(self,resolve,reject),
		
	 
		}})

	   


	   })
	   
   
	
} 
 
 
methods.createProjectBase = function(appType='web',folderName,repoUrl){
	
	const self = this 
	const pao = self.pao 
	const getWorkingFolder =  pao.pa_getWorkingFolder 
	const createFolderContent = pao.pa_createFolderContent 
	const makeFolderSync = pao.pa_makeFolderSync 
	const getRootDir = pao.pa_getRootDir 	
	
	if(appType === "backend/api/web") appType = "web" 

	let templatePath = `${getRootDir()}/templates/${appType}` 
	//let dir = {templatePath,folderName: data.commands.commands[1]} 
	let newFolder = `${getWorkingFolder()}/${folderName}` 
	
	return {newFolder,templatePath,folderName,newFolder,repoUrl}
	
	
}

methods.buildTaskList = async function(answers,options){
	
	
	 const self = this 
	//  console.log('THE OPTIONS')
	//  console.log(options)
	 
	 
	 let tasks = [

					{ title: 'Create project folder', task: () => self.makeFolder(options.newFolder)},
					{ title: 'Copy project files', task: () => self.pao.pa_createFolderContent(options.templatePath,options.folderName)},
	
				] 

	 answers.git && answers.git.trim().toLowerCase() === "yes" 
	       
	       ?  tasks.push(
			{ title: 'Initialize git repo', task: async () => await self.gitInit(options.newFolder,options.repoUrl)},
	        ) 
		   :'' 
	
	//  console.log('THE ANSWERS')
	//  console.log(answers) 
	//  let DSSZXTTOOShhhhhisIntConn = await self.isInternetConnected()
	//  console.log(isIntConn)
	        
	 answers.init && answers.init.trim().toLowerCase() === "yes" 
	       
	       ? await self.isInternetConnected() === false
	           ? console.log("NO_INTERNET_CONNECTION_DETECTED_ANZII-CLI_WILL_SKIP_NPM_INSTALLATION")
	           : tasks.push(
	 	      { title: 'Install dependent packages', task: async () => {

				   let output = await self.packagesInstall(options.newFolder) 
				   console.log('Done Installing Packages')
				   console.log(output)
				}}
	        ) 
			:''
			
	options.repoUrl && options.repoUrl.trim() !== ''
		? tasks = [{title: 'Create remote repository', task: () => ''},...tasks]
		: ''

	tasks.push({title:'',task: ()=> true})
	 
	
	return tasks
}


methods.startProjectCreation = async function(answers,repoName,repoUrl=null){
	
	
	const self = this 
	
	let rName = repoName
	let options = self.createProjectBase(answers.apptype,rName,repoUrl)
			
	 	self.runTasks(await self.buildTaskList(answers,options)) 
			.then((completedTasks)=>{

				// console.log('%s Project ready', chalk.green.bold('DONE'));
				return self.callback({message:'Project Ready!'})

			})
			.catch((e)=>{
				return self.callback({message:e})
			})

}

methods.isExistingDir = function(repo){


 const self = this 
 const pao = self.pao
 const getWorkingFolder =  pao.pa_getWorkingFolder 
 const getRootDir = pao.pa_getRootDir 
 const isExistingDir = pao.pa_isExistingDir 

//  console.log(isExistingDir)
//  console.log(pao)
 
 if(isExistingDir(`${getWorkingFolder()}/${repo}`)){
	 
	//   console.log('THE FOLDER EXISTS')
	//   console.log(`${getWorkingFolder()}/${repo}`)
 	 return true
 }else{
	 
	// console.log('THE FOLDER DOES NOT EXIST')
	// console.log(`${getWorkingFolder()}/${repo}`)
 	return false
 }
 

} 


methods.isInternetConnected = async function(repo){


 const self = this 
 const pao = self.pao
 const isOnline = self.isOnline 
 let isInternetUp = await isOnline()


 
 if(isInternetUp){
	 
	// console.log('tHERS INTERNET CONNECTION')
	// console.log(isInternetUp)
 	 return true
 }else{
	 
	// console.log('NO INTERNET')
	// console.log(isInternetUp)
 	return false
 }
 
} 



methods.getStoredUserToken = function(vendor){


	return new Promise((resolve,reject)=>{
  
	  const self = this 
	  const pao = self.pao 
		  if(vendor.version !== 'bitbucket' || vendor.version !== 'github'){
  
			  self.emit({
				  type: 'get-from-config',
				  data: {
					  callback: self.getStoredUserTokenFeedback.bind(this,resolve,reject),
					  key: vendor.version.toLowerCase()}})
		  }else{
  
			  return resolve(false)
		  }
	  })
   
  
  } 
  
  methods.getStoredUserTokenFeedback = function(resolve,reject,result){
	  
	  const self = this 
	  
		  // console.log('THE CONFIG RESULT')
		  // console.log(result)
  
		  if(!result){
  
			  // console.log('Configstore could not complete')
			  return reject(new Error('Configstore could not complete'))
  
		   }else{
	  
			  if(result.isFound){
  
				  let found = result.found 
				  let storedKeys = Object.keys(found) 
				  self.questions.account[0].choices = [...storedKeys]
  
				  self.questions.account[0].choices.push('Another account')
				  // console.log(self.questions.account[0].choices)
  
				  self.startQuestionnaire({account: ['account']})
				  .then((confirmAnswer)=>{
					  
					  //  console.log('THE CONFIRM ANSWER')
					  //  console.log(confirmAnswer.account.toLowerCase().trim()  === 'another account' )
					  if(confirmAnswer.account.toLowerCase().trim() === 'another account'){
  
						  self.startQuestionnaire({remote: ['username','password']})
						  .then((answers)=>{
  
							  // console.log('Answers in getStoredConfig')
							  // console.log(answers)
							  return resolve({creds: answers})
  
						  })
						  .catch((e)=>{
  
							  return reject(e)
						  })
					  }else{
  
						  return resolve(found[confirmAnswer.account])
  
					  }
  
				  })
				  .catch((e)=>{
  
					  return reject(e)
				  })
  
  
  
			  }else{
  
				  // console.log('THE CONFIG HAS NOT BEEN FOUND')
				  return resolve({isNotFound: true})
				  
			  }
			  
			  
		   }
  
		   
	  
	  
	  
	  
  }
  
  
  
  methods.getAccessCreds = function(data){
  
  
	return new Promise((resolve,reject)=>{
  
	  const self = this 
	  
		self.emit({type:'prompt-user',data:{
			  
			   query: self.getRemoteAccess,
			   callback: self.getInterpreterFeed.bind(self,resolve,reject,res),
			   
			
		}})
	  
	  
	  
	  })
   
  
  } 
  
  
  methods.getTwoFactorAuthentication = function(data){
  
  
	return new Promise((resolve,reject)=>{
  
	  const self = this 
	  
		self.emit({type:'prompt-user',data:{
			  
			   query: self.getTwoFactor,
			   callback: self.getInterpreterFeed.bind(self,resolve,reject,res),
			   
			
		}})
	  
	  
	  
	  })
   
  
  } 
  
  
  
  methods.getRemoteUserToken = function(data){
  
  
	return new Promise((resolve,reject)=>{
  
		  const self = this 
		  const github = self.github 
		  const {username,password,remote} = data  
		  const scopes = {
			  'scopes': ['user', 'repo', 'gist'],
			  'note': 'Anzii-cli remote repository creation'
			};
  
		  //   console.log('THE REMOTE')
		  //   console.log(data) 
			
		  
  
		  if(remote.toLowerCase() === 'github'){
  
			  self.emit({
				  type: 'get-gitauth-token',
				  data: {
					  callback: self.getRemoteUserTokenFeedback.bind(this,resolve,reject,remote.toLowerCase()),
					  getCreds: {username,password,scopes}}})
  
  
		  }else if(remote.toLowerCase() === 'bitbucket'){
  
			  self.emit({
				  type: 'get-bitauth-token',
				  data: {
					  callback: self.getRemoteUserTokenFeedback.bind(this,resolve,reject,remote.toLowerCase()),
					  getCreds: {username,password,scopes}}})
		  }else{
  
			  return reject(new Error('No supported remote token source'))
		  }
  
		  
  
	  })
   
  
  } 
  
  methods.getRemoteUserTokenFeedback = function(resolve,reject,vendor,err =null,result=null){
	  
	  const self = this 
	  
		  // console.log('THE CONFIG RESULT')
		  // console.log(result)
  
		  if(err){
  
			  // console.log('Configstore could not complete')
			  // console.log('THE ERROR OCCURED')
			  // console.log(err)
			  return reject(err)
  
		   }else{
	  
		  
					  //  console.log('REMOTE TOKEN RESULT')
					  //  console.log(result)
				  
					  // let accessToken = result.accessToken 
					  // console.log(accessToken)
  
					  // let accessToken = {token: token,tokenID: id, userID: username}
					  
					  // self.storeUserConfigs({key:username,value:accessToken }) 
					  
					  self.emit({
						  type: 'store-in-config',
						  data: {
							  // callback: self.getRemoteUserTokenFeedback.bind(this,resolve,reject),
							  key: `${vendor}.${result.userID}`, value: result},
							  
						  }) 
				  
  
					  return resolve(result) 
  
				  
				  
			  
		   }
  
		   
	  
	  
	  
	  
  }
  
  
  methods.authenticateUser = function(token){
  
  //   console.log('AUTHENTICATE USERS')
  //   console.log(token)
	return new Promise((resolve,reject)=>{
  
	  const self = this 
	  const github = self.github
	  const client = github.client(token) 
	  return resolve(client)
	  
	})
   
  
  } 
  
  methods.startPostAuthenticationTasks = function(token,answers,repoName){
  
	  // console.log('STARTpostauthentication tasks')
	  // console.log(token)
	  // console.log(answers)
	  // console.log(repoName)
  
	  return new Promise((resolve,reject)=>{
	
		const self = this 
		self.authenticateUser(token)
		.then((client)=>{
  
		  //   console.log('THE WEB PLUGIN')
		  //   console.log(client) 
  
			let options ={
  
				name: repoName,
				private: answers.private ? true : false,
				description: answers.description.trim() !== '' 
																? answers.description 
																: `This is a ${repoName} app`
			}
  
			self.createRemoteRepo(client,options)
			.then((repoUrl)=>{
  
			  //   console.log('THE REMOTE REPO URL')
			  //   console.log(repoUrl)
				return resolve(repoUrl)
			  //   self.callback({message: "Finished creating remote url"})
  
			})
			.catch((e)=>{
  
				return reject(e)
  
			})
  
  
  
		})
		.catch((e)=>{
		  //  console.log('Error authenticating') 
		  //  console.log(e)
		   return reject(e)
			// process.exit(1)
		})
  
		
		
	  })
	 
	
	} 
	
  
  methods.storeUserConfigs = function(data){
  
  
  
  
	  const self = this 
	  const pao = self.pao
	  const loadFile = pao.pa_loadFile
	  const {key,value} = data 
	  const config = new self.Configstore(loadFile('./package.json').name) 
	  config.set(key,value)
	  
	  
  
   
  
  } 
  
  
  methods.getScaffoldOptions = function(data){
  
  
	return new Promise((resolve,reject)=>{
  
	  const self = this 
	  
		self.emit({type:'prompt-user',data:{
			  
			   query: self.getScaffolOpts,
			   callback: self.getInterpreterFeed.bind(self,resolve,reject,res),
			   
			
		}})
	  
	  
	  
	  })
   
  
  } 
  
  
  
  methods.createRemoteRepo = function(authenticatedClient,options){
  
  //  console.log('CREATE REMOTE REPO')
  //  console.log(authenticatedClient)
  //  console.log(options)
  
	return new Promise((resolve,reject)=>{
  
		  const self = this 
  
		  authenticatedClient.me().repo(options,
  
			  (err,res)=>{
			  if(err){
  
				  // console.log('Failed to create remote repo') 
				  return reject(err)
  
			  }else{
  
				  let url = res.clone_url
				  return resolve(url)
			  }
		  })
	  
	  
	  
	  
	   })
   
  
  } 
  
  
  methods.getInterpreterFeed = function(resolve,reject,res = null){
  
	   const self = this 
  
	   if(!res){
  
		  return reject(new Error('There was an error collecting answers'))
	   }else{
  
		  return resolve(res)
	   }
  
	   
	  
  } 
	  
  
  
   
  
  methods.gitInit = function(initFolder,remoteUrl=null){
  
	  const self = this 
	  const git = self.simpleGit(initFolder) 
	  
	  // git.cwd(initFolder)
	  
	  return new Promise((resolve,reject)=>{
  
		  git.init()
			 .add('.')
			 .commit('Add initial commit to this repo') 
			 .then(()=>resolve(true))
			 .catch((e)=>{
	 
			  //    console.log('GIT INIT ERROR')
			  //    console.log(e)
				 reject(e)
			 })
  
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
		 
	 
  
  
	  })
	  
	  
  
  } 
  
  
  
  
 
   
  

  
  
  
  
  
  methods.packagesInstall = function(packagesFolder){
  
	
  
		 return new Promise(async (resolve,reject)=>{
  
			   const self = this  
			//    console.log(self)
			   const projectInstall = self.projectInstall 

			   console.log('After projectInstall')
			   console.log(projectInstall)

			   
			  // const {options} = data 
			  // options && options.cli ? self.scaffoldCliApp : self.scaffoldApp
			  // self.logSync("Handling send-outpit Cli event") 
			  // self.logSync("About to send output to std") 
			  // self.logCli(data.message)
  
			//   projectInstall({
			// 	  cwd: packagesFolder,
			// 	}),
  
			 
	
				const { stdout } = await projectInstall({
				  prefer: 'npm',
				  cwd: packagesFolder
				});

				// console.log('THE INSTALLATION OUTPUT')
				// console.log(stdout); 
				resolve(stdout)

				  
	  
	  
	  })
   
  
  } 
  
  
  
  
  
  
  methods.makeFolder = function(filepath){
   
	  const self = this 
	  const pao = self.pao 
	  const getWorkingFolder =  pao.pa_getWorkingFolder 
	  const createFolderContent = pao.pa_createFolderContent 
	  const makeFolderSync = pao.pa_makeFolderSync 
	  const getRootDir = pao.pa_getRootDir 
  
	  return makeFolderSync(filepath)
  } 
  
  
  methods.runTasks = async function(toRun,dir){
	  
	  const self = this 
	  const Listr = self.Listr
  
	  const tasks = new Listr(toRun);
  
	  await tasks.run() 
	  return true
	  
	  
	  
  }
  
  methods.getMoData = async function(resolve,reject,result){
	  
	  const self = this 
	  
	  
  
		  if(!result){
  
			  return reject(new Error('There was an error collecting answers'))
		   }else{
	  
			  return resolve(result)
		   }
  
		   
	  
	  
	  
	  
  }


module.exports = methods