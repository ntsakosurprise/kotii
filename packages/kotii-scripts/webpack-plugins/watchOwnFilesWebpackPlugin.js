import babel from "@babel/core";
import generate from "@babel/generator";
import parser from "@babel/parser";
import template from "@babel/template";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import fs from "fs"
import chokidar from 'chokidar';
class WatchOwnFilesWebpackPlugin{

    filesToWatch = ''
    isWatchingFiles = false
    runOnComplete=null
    
    constructor(options){
        console.log("REMOVE IMPORT OPTIONS", options)
        this.filesToWatch = options.filesToWatch
        this.runOnComplete = options.runOnComplete
        this.notifyClient = options.notifyClient
      
    }
    apply(compiler){
      
        compiler.hooks.initialize.tap("WatchOwnFilesWebpackPlugin",(stats)=>{
            console.log("PLUGIN:: WATCHFILES")
            // this.runOnComplete()
            
            if(this.isWatchingFiles) return
            this.isWatchingFiles = true 
           
            console.log("PLUGIN:: FILES TO WATCH", this.filesToWatch, compiler.close)
            this.runOnComplete(this.filesToWatch, this.isWatchingFiles)
            
        })
       
    }
}

export default WatchOwnFilesWebpackPlugin