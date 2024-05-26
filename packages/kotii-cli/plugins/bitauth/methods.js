
const methods = {}

methods.init = function(){
  
  
    // console.log('Bitbucket has been initialised')
	this.listens({
		
		'bitbucket-authenticate-user': this.handleBitbucketAuthUser.bind(this),
	
		
	})

	
}


methods.handleBitbucketAuthUser = function(data){

 
	const self = this 
	
	self.authenticate(data)
	.then((bitbucket)=>{
		
		return self.callback(null,bitbucket)
		
	})
	.catch((e)=>{
		
		return self.callback(e) 
		
	})
} 


methods.authenticate = function(auth){

 
	const self = this 
	
 switch(user.type){
		
		case 'username': {
			
			self[user.type](user.creds)
	 	
		}
		break;
	  case 'token': {
			
	 	 self[user.type](user.token) 
	 	 
		}
		break;
		default: 
		self.callback(new Error('Unknown data request'),null)
		
		
	}





} 


methods.username = function(data){

 
	const self = this  
	
	const clientOptions = { auth: data.creds } 
	const bitbucket = new Bitbucket(clientOptions)
	return bitbucket 

} 


methods.token = function(data){

 
	const self = this 
	const clientOptions = { auth: data.token } 
	const bitbucket = new Bitbucket(clientOptions)
	return bitbucket 

	


} 

module.exports = methods