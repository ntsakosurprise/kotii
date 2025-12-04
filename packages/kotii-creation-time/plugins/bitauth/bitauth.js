
const methods = require("./methods")
const  bitbucket = require('bitbucket')



class Bitauth{
  
  
  constructor(pao){

    this.pao = pao 
    this.bitbucket = bitbucket
   
   
     this.init = methods.init
     this.handleBitbucketAuth = methods.handleBitbucketAuth
    

  }


  

}

module.exports = Bitauth