

const methods = {}
methods.init = function(){
  
  
    // console.log('Input has been initialised')
	this.listens({
		
		'gitrrttt-auth': this.handleGitAuth.bind(this),
	
		
	})
	
	
	
}


methods.handleGitAuth = function(data){

 
	const self = this 
	self.logSync("Handling send-outpit Cli event") 
	self.logSync("About to send output to std") 
	self.logCli(data.message)
	
} 


methods.authenticate = function(data){

 
	const self = this 
	self.log("Receiving processed data Token create request")
	self.emit({type:"send-output"})

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








