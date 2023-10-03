
const methods = require("./methods")
const  octonode = require('octonode')



class Github{
  
  
  constructor(pao){

    this.pao = pao 
    this.github = octonode 
   
   
     this.init = methods.init
     this.handleGitAuth = methods.handleGitAuth
    
     
    

  }


  

}
module.exports = Github