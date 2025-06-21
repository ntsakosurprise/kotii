
import path from "path"
import fs from "fs"
const plugin = (opts = {}) => {
  console.log("MERGE FILES OPTS", opts);

  // import: (atRule, { result }) {
  //   const importedFile = parseImport(atRule)
  //   result.messages.push({
  //     type: 'dependency',
  //     plugin: 'postcss-import',
  //     file: importedFile,
  //     parent: result.opts.from
  //   })
  // }

  let cssString = null
  let importsIndexesInThisFile = []
  return {
    postcssPlugin: "merge-css-files",
    AtRule:  { 
     import: (atRule, { result }) =>{
      importsIndexesInThisFile.length === 0 ? importsIndexesInThisFile.push(1) : importsIndexesInThisFile.push(importsIndexesInThisFile.length + 1)
      console.log("THE CURRENT AT RULE NODE", atRule)
      console.log("THE RETURNED PATH", extractImportPath(atRule.params))
      let filePath = searchForFilePath(extractImportPath(atRule.params),opts)
      let fileContents = getFileContents(filePath)
      cssString = {
        content: fileContents,
        nodeIndex: importsIndexesInThisFile[importsIndexesInThisFile.length - 1],
        importRequestString: atRule.params,
        filePath,
        // parentPathAsID: opts.pathContext.fileFullPath
      }
      console.log("THE FILE CONTENTS IN THE PLUGIN", cssString)
      // console.log("THE CURRENT AT RULE NODE import", result)
      // const importedFile = parseImport(atRule)
      // result.messages.push({
      //   type: 'dependency',
      //   plugin: 'postcss-import',
      //   file: importedFile,
      //   parent: result.opts.from
      // })
    }
    },
    OnceExit(css) {
      console.log("RESULT. CSS WITH A NEW STRING", css)
      if(cssString){
        css["processImportedFiles"] = true
        css["cssStringContent"] = cssString
        cssString = null
      }else{
        css["processImportedFiles"] = false 
      }
      

    },
  };
};

const extractImportPath = (cssDecoratedPath)=>{

  let PATH_EXTRACT_REGEX = /\("(.*)"\)/
  let pathStringMatch = PATH_EXTRACT_REGEX.exec(cssDecoratedPath)
  console.log("THE PATH STRING array", pathStringMatch)
  console.log("THE PATH STRING",pathStringMatch[1])
  return pathStringMatch[1]

}
const searchForFilePath = (pathString, opts)=>{

  console.log("THE OPTS",opts)
  if(pathString.indexOf("/") >= 0){
    let pathPieces = pathString.split("/")
    let parentFilePath = opts.pathContext.fileFullPath
    let splitParentFilePath = parentFilePath.split("/")

    if(pathPieces[0] === "" || pathPieces[0] === ".") pathPieces.splice(0,1)
    if(splitParentFilePath[0] === "" || splitParentFilePath[0] === ".") splitParentFilePath.splice(0,1)

    let parentFileName = splitParentFilePath[splitParentFilePath.length-1]
    let fileName = pathPieces[pathPieces.length - 1]
    let possibleFilePath = ''
    // console.log("PATH PIECES",pathPieces,fileName, parentFileName,splitParentFilePath)
    if(pathPieces.length === 1){
      let parentFilePathFolder = parentFilePath.replace("/"+splitParentFilePath.splice(splitParentFilePath.length - 1,1),"")
      let currentFileNamePath = `${parentFilePathFolder}/${fileName}`
      if(!fs.existsSync(currentFileNamePath)) throw new Error("Imported css file does not exist")
      console.log("THE PARENT FILE PATH FOLDER", parentFilePathFolder)
      return currentFileNamePath
    }else{
      // for(let pathIndex=0; pathIndex < pathPieces.length; pathIndex){
      //   let currentItem = pathPieces[pathIndex]
      //   if(currentItem === fileName){
 
      //   }
      //   console.log("Current Item", currentItem)
      // }
    }

     
  }else{
    // relative path
  }

}

const getFileContents = (realFilePath)=>{
  // return realFilePath
  let contents = fs.readFileSync(realFilePath,{encoding: "utf8"})
  console.log("THE FILE CONTENTS", contents)
  return contents
}

plugin.postcss = true;

export default plugin;
