
const methods = {}

methods.init = function(){
  
  
    // console.log('Configstore has been initialised')
	this.listens({
		
		'store-in-config': this.handleStoreInConfig.bind(this),
		'get-from-config': this.handleGetFromConfig.bind(this)
	})

	
}


methods.handleStoreInConfig = function(data){

 
	const self = this 
	const pao = self.pao
	const loadFile = pao.pa_loadFile
	const {key,value} = data 
	// self.callback = data.callback

	// console.log('THE KEY VALUE PAIRS')
	// console.log(data)
	// console.log(key)
	// console.log(value)

	const config = new self.Configstore(loadFile('./package.json').name) 
    config.set(key,value) 
	// self.callback()


	
	
} 


methods.handleGetFromConfig = function(data){

	// console.log('THE HANDgetfromconfig data')
	// console.log(data)
 
	const self = this 
	const pao = self.pao
	const loadFile = pao.pa_loadFile
	const {key} = data 
	self.callback = data.callback

	const config = new self.Configstore(loadFile('./package.json').name) 
	let set = config.get(key)

	if(set){

		return self.callback({isFound: true, found: set})
	}else{

		return self.callback({isFound: false})

	}
	
	
	


} 


methods.storeUserConfigs = function(data){




	const self = this 
	const pao = self.pao
	const loadFile = pao.pa_loadFile
	const {key,value} = data 
	const config = new self.Configstore(loadFile('./package.json').name) 
	config.set(key,value)
	
	

 

} 



methods.getStoredUserToken = function(){


  return new Promise((resolve,reject)=>{

	const self = this 
	const pao = self.pao
	const loadFile = pao.pa_loadFile
	const config = new self.Configstore(loadFile('./package.json').name) 
	// console.log(config)
	// console.log(loadFile('./package.json').name)
	// console.log(config.get)
	// console.log(config.all)
	// console.log(config.get('iiprodakts'))
	let allStoredKeys = config.all

	if(allStoredKeys){

		let storedKeys = Object.keys(allStoredKeys)

		// console.log('THE STORED KEYS')
		// console.log(storedKeys)
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

					console.log('Answers in getStoredConfig')
					console.log(answers)
					return resolve({creds: answers})

				})
				.catch((e)=>{

					return reject(e)
				})
			 }else{

	
				 return resolve(allStoredKeys[confirmAnswer.account])

				
			 }

		})
		.catch((e)=>{

			return reject(e)
		})
		// resolve(allStoredKeys) 


	}else{

		return resolve(false)
	}
	
	//  if(!key) return reject(new Error('No token has been provided')) 
	//  return resolve(config.get(key))
	 
	
	
	})
 

}



module.exports = methods