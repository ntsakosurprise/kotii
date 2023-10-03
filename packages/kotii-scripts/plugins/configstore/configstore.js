
const methods = require("./methods")
const Configstore = require('configstore'); 



class Configstorer{
  
  
  constructor(pao){

    this.pao = pao 
    this.Configstore = Configstore
   
   
     this.init = methods.init
     this.handleStoreInConfig = methods.handleStoreInConfig 
     this.handleGetFromConfig = methods.handleGetFromConfig
    

  }


  

}
module.exports = Configstorer