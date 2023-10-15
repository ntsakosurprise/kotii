
const methods = require("./methods")

class Bitbucket{
  
  
  constructor(pao){

    this.pao = pao 
   
     this.init = methods.init
     this.handleBitbucketAction = methods.handleBitbucketAction
    

  }


  

}

module.exports = Bitbucket