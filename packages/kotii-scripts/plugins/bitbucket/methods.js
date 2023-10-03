

const methods = {}
methods.init = function(){
  
  
    // console.log('Bitbucket has been initialised')
	this.listens({
		
		'bitbucket-take-action': this.handleBitbucketAction.bind(this),
	
		
	})

	
}



methods.handleBitbucketAction = function(data){

 
	const self = this 
	const {bit} = data 
	self.callback = data.callback
	
 switch(bit.namespace){
		
		case 'repositories': {
			
			self.namespace(user.creds) 
			.then((isValidNamespace)=>{
				
				 self.api(bit.action) 
				 .then((isValidApi)=>{
				 	
				 	  data.client[bit.namespace][bit.action](options)
				 })
				 .then((e)=>{
				 	
				 	 
				 })
				
			})
			.catch((e)=>{
				
				
			})
	 	
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


methods.namespace = function(data){

 
	const self = this  
	
	const clientOptions = { auth: data.creds } 
	const bitbucket = new Bitbucket(clientOptions)
	return bitbucket 

} 


methods.api = function(data){

 
	const self = this 
	const clientOptions = { auth: data.token } 
	const bitbucket = new Bitbucket(clientOptions)
	return bitbucket 

	


} 


module.exports = methods