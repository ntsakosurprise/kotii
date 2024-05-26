

const methods = {}

methods.init = function(){
  
  
    // console.log('Gitauth has been initialised')
	this.listens({
		
		'git-auth': this.handleGitAuth.bind(this),
		'get-gitauth-token': this.handleGetGitAuthToken.bind(this)
	
		
	})
	
	
}


methods.handleGitAuth = function(data){

 
	const self = this 
	self.logSync("Handling send-outpit Cli event") 
	self.logSync("About to send output to std") 
	self.logCli(data.message)
	
} 

methods.handleGetGitAuthToken = function(data){

 
	const self = this 
	const {callback} = data 

	// console.log('THE HANDLEGETGITAUTHTOKEN')
	// console.log(data)

	self.getToken(data)
	.then((token)=>{

		return callback(null,token)
	})
	.catch((e)=> callback({message: 'Getting token has failed',error: e}))
	
	
	
} 


methods.authenticate = function(data){

 
	const self = this 
	self.log("Receiving processed data Token create request")
	self.emit({type:"send-output"})

}

methods.getToken = function(data){


	return new Promise((resolve,reject)=>{
  
		  const self = this 
		  const github = self.github 
	      const {getCreds} = data
		  const {username,password,scopes} = getCreds 

	

		
  
  
			github.auth.config({
  
			   username,password
  
			  }).login(scopes, function (err, id, token, headers) {
			  
				  // console.log('THE AUTHENTICATION SCOPES')
				  if(err){
  
					//   console.log('Git hub login error')
					  reject(err)
  
				  }else{
					  
					//   console.log(token)
					//   console.log(id)
					  let accessToken = {token: token,tokenID: id, userID: username}
					  
					//   self.storeUserConfigs({key:username,value:accessToken }) 
					  return resolve(accessToken)
  
				  }
				  
			  
			  
		  }); 
  
		  
	  
	  
	  
	  })
   
  
  }


methods.byUsername = function(data){

 
	const self = this 
	self.log("Receiving processed data Token create request")
	self.emit({type:"send-output"})

} 


methods.byToken = function(data){

 
	const self = this 
	self.log("Receiving processed data Token create request")
	self.emit({type:"send-output"})

} 

module.exports = methods








