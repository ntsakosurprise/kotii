
import * as methods from "./methods.js"


class Logout{
  
  
  constructor(pao){

    this.pao = pao 

    this.init = methods.init
    this.handleLogoutTask = methods.handleLogoutTask 
    
    this.logoutUser = methods.logoutUser
    
     
    

  }


  

}

export default Logout