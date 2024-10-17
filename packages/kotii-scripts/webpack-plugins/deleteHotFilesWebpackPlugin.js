
import { globSync } from "glob";
import fs from "fs"


class deleteFilesWebpackPlugin{

    deleteFolder = null
    
    constructor(options=null){
        console.log("DELETE HOT FILES OPTIONS", options)
        this.deleteFolder = options.deleteFolder
      
    }

    apply(compiler){
      
        compiler.hooks.beforeCompile.tap("DeleteFilesWebpackPlugin",()=>{
            console.log("deleteFilesWebpackPlugin:: FILES TO WATCH")
         
            const filesToGet = globSync(`${this.deleteFolder}/**/*.{js,jsx,ts,tsx,json}`);
            console.log("PLUGIN:: DELETE PLUGIN", filesToGet)
            let deleteList = filesToGet.filter((filePath)=>{
                if(filePath.indexOf(".hot-update") >= 0) return true
            })
            deleteList.forEach((pathToDelete)=>{
                console.log("CURRENTLY DELETING FILE", pathToDelete)
                fs.unlinkSync(pathToDelete)
            })
            console.log("THE DELETE LIST", deleteList)

            
        })
       
    }
}

export default deleteFilesWebpackPlugin