
const methods = require("./methods")

// import React from 'react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import counterApp from './reducers'
// import App from './containers/App' 

import path from 'path'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom';
// import store from '../../../src/store/store'
import {renderToString} from 'react-dom/server'
import * as central from '../../src/store/store'
import App from '../../src/sevcode'



class ReactView{
  
  
  constructor(pao){

    this.pao = pao 
    this.React = React 
    this.store = central.store
    this.createStore = createStore 
    this.Provider = Provider 
    this.StaticRouter = StaticRouter
    this.REACTAPP = App 
    this.renderToString = renderToString
    // this.currentReactView = nul/
       
    

    // // methods

   

     this.init = methods.init 
     this.handleReactView = methods.handleReactView
     this.runReactView = methods.runReactView 
     this.renderFullPage = methods.renderFullPage
    
     
    

  }


  

}

module.exports = ReactView