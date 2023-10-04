
const methods = require("./methods")
const  octonode = require('octonode')



class Gitauth{
  
  
  constructor(pao){

    this.pao = pao 
    this.github = octonode 
   
   
     this.init = methods.init
     this.handleGitAuth = methods.handleGitAuth 
     this.handleGetGitAuthToken = methods.handleGetGitAuthToken
     this.authenticate = methods.authenticate
     this.getToken = methods.getToken 
     this.byUsername = methods.byToken
    
     
    

  }


  

}

module.exports = Gitauth