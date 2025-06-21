import path from "path";
import fs from "fs"
import postcss from "postcss";
//import postcssModules from "postcss-modules";
import {mergeCssFilesPlugin} from "../postcss-plugins/index.js";
import createCssAst from "./create_css_ast.js";

const MATCH_IMPORT_LINE_REGEX = /(\s\n\r)*@import\s*(.*)\.+(css)["']\)[;\s]/gm
const INCLUDE_PRE_TEXT = "INCLUDED_CSS_HEAD:"
const INCLUDE_POST_TEXT = "INCLUDED_CSS_FOOTER:"
const mergeCssFiles = function (cssInput, moduleMeta) {
 
  
  // let readFiles = [{
  //   fileContent: cssInput,
  //   filePath: moduleMeta.pathContext.fileFullPath,
  //   parent: null
  // }]
  let loopThroughFiles = true
  console.log("THE COPIED AST", cssInput)

 

  return new Promise(async (resolve) => {
   let pathContext = moduleMeta.pathContext
   let imports = {
     [moduleMeta.pathContext.fileFullPath]: {
       inputBefore: cssInput,
      //  inputAfterMerge: '',
       inputBeforeAst: createCssAst([cssInput]),
       parent: moduleMeta?.parent || null,
       selfReferencePath: moduleMeta.pathContext.fileFullPath,
       pathAsShortID: moduleMeta?.pathAsShortID || null,
      children:{}
     }
   }
      if(!MATCH_IMPORT_LINE_REGEX.test(cssInput)){
        console.log("FILE DOES NOT CONTAIN IMPORTS, RETURNING") 
        return resolve({
          input:cssInput
        })
      }else{
       
       let inputToModify = recursivelyCombineCss(cssInput,moduleMeta,imports)
       
        imports[Object.keys(imports)[0]]["inputAfter"] = moduleMeta?.shouldWrapFile ? `/* ${INCLUDE_PRE_TEXT} ${imports[pathContext.fileFullPath].pathAsShortID} */ ${inputToModify} /* ${INCLUDE_POST_TEXT} ${imports[pathContext.fileFullPath].pathAsShortID} */` : inputToModify
       
       
      //  console.log("THE IMPORTS MODIFY OBJ", JSON.stringify(imports))
       return resolve({input: inputToModify,imports})
      
     }





  //  while(loopThroughFiles){
  //   //  runResults = await runPluginForFile(readFiles[readFiles.length - 1].fileContent,moduleMeta)
  //   //  let runResult = runResults.root
  //   //  if(runResult?.processImportedFiles && runResult?.cssStringContent) readFiles.push({
  //   //    fileContent: runResult.cssStringContent.content,
  //   //    parent: true,
  //   //   //  parentPathAsId: runResult.cssStringContent.importRequestString,
  //   //    parentIndexInReadFiles: readFiles.length - 1,
  //   //    nodeIndexInParent: runResult.cssStringContent.nodeIndex,
  //   //    importString: runResult.cssStringContent.importRequestString,
  //   //    filePath: runResult.cssStringContent.filePath
  //   //  })
  //    if(!runResult?.processImportedFiles) loopThroughFiles = false
  //  }
  //  console.log("THE RUN RESULTS",readFiles)
  //  mergeProcessedFiles(readFiles)
  //  resolve(runResults)

  //  if(while){
  //   await runPluginForFile(readFiles[readFiles.length - 1])
  //  }
  });
};

const recursivelyCombineCss = (cssInput, moduleMeta,imports=null)=>{

  console.log("THE CSS INPUT TO MATCH", cssInput)
  let matches = cssInput.match(MATCH_IMPORT_LINE_REGEX)
  let inputToModify = cssInput 
  let importKeys = Object.keys(imports)
  let parentPath = importKeys[importKeys.length - 1]
  
  
  
 
  matches.forEach((match,i)=>{

    console.log("FILE CONTAINS IMPORTS:",match)
    let importsPath = extractImportPath(match)
    let filePath = searchForFilePath(importsPath,moduleMeta)
    let fileContents = getFileContents(filePath)
  
    if(!imports[filePath]) imports[filePath] = { inputBefore: fileContents, inputBeforeAst: createCssAst([fileContents])}
    if(imports[parentPath]?.children) imports[parentPath].children[importsPath] ={
      path: filePath
    }

    if(!MATCH_IMPORT_LINE_REGEX.test(fileContents)){
      let fileName = match.match(/\.(.*)\.+(css)/)[0]
      fileContents = `/* ${INCLUDE_PRE_TEXT} ${fileName} */ ${fileContents} /* ${INCLUDE_POST_TEXT} ${fileName} */`
      imports[filePath]["inputAfter"] = fileContents
      imports[filePath]["pathAsShortID"] = importsPath.trim()
      imports[filePath]["selfReferencePath"] = filePath
      imports[filePath]["parent"] = {
        path: parentPath
      } 
    }else{
      imports[filePath]["children"] = {}
      let fileName = match.match(/\.(.*)\.+(css)/)[0]
      fileContents = recursivelyCombineCss(fileContents,moduleMeta,imports)
      fileContents = `/* ${INCLUDE_PRE_TEXT} ${fileName} */ ${fileContents} /* ${INCLUDE_POST_TEXT} ${fileName} */`
      imports[filePath]["inputAfter"] = fileContents
      imports[filePath]["pathAsShortID"] = importsPath.trim()
      imports[filePath]["selfReferencePath"] = filePath
      imports[filePath]["parent"] = {
        path: parentPath
      } 
 
    }

  console.log("MATCH FILE CONTENT",  imports[filePath])
    inputToModify =  inputToModify.replace(match,fileContents)
    
  })
  // console.log("NEW CSS", imports)
  return inputToModify
}

// const mergeCssFiles = function (cssInput, moduleMeta) {
 
//   // const astBefore = createCssAst([cssInput])
//   // const copiedAst =  JSON.parse(JSON.stringify(astBefore))
//   let readFiles = [{
//     fileContent: cssInput,
//     filePath: moduleMeta.pathContext.fileFullPath,
//     parent: null
//   }]
//   let loopThroughFiles = true
//   console.log("THE COPIED AST", cssInput)

 

//   return new Promise(async (resolve) => {

//    let runResults = null

//    while(loopThroughFiles){
//      runResults = await runPluginForFile(readFiles[readFiles.length - 1].fileContent,moduleMeta)
//      let runResult = runResults.root
//      if(runResult?.processImportedFiles && runResult?.cssStringContent) readFiles.push({
//        fileContent: runResult.cssStringContent.content,
//        parent: true,
//       //  parentPathAsId: runResult.cssStringContent.importRequestString,
//        parentIndexInReadFiles: readFiles.length - 1,
//        nodeIndexInParent: runResult.cssStringContent.nodeIndex,
//        importString: runResult.cssStringContent.importRequestString,
//        filePath: runResult.cssStringContent.filePath
//      })
//      if(!runResult?.processImportedFiles) loopThroughFiles = false
//    }
//    console.log("THE RUN RESULTS",readFiles)
//    mergeProcessedFiles(readFiles)
//    resolve(runResults)

//   //  if(while){
//   //   await runPluginForFile(readFiles[readFiles.length - 1])
//   //  }
//   });
// };

const runPluginForFile = async (fileInput,moduleMeta)=>{
 
  const astBefore = createCssAst([fileInput])
  let pluginResults = await postcss([mergeCssFilesPlugin(moduleMeta)]).process(astBefore) 
  return pluginResults

  //  if(pluginResults)

  // .then((result) => {
    
  //   resolve({ css: result.css, cssAst: copiedAst});
  // });
  
}
const mergeProcessedFiles = (readFiles)=>{
  let mergedCssString = readFiles[0].fileContent

   readFiles.reverse().forEach((fileNode,index)=>{

    //  console.log("FILE NODE CONTENT:",MATCH_IMPORT_LINE_REGEX.test(fileNode.fileContent),fileNode.fileContent.match(MATCH_IMPORT_LINE_REGEX), fileNode.fileContent,fileNode.filePath)
    //  if(MATCH_IMPORT_LINE_REGEX.test(fileNode.fileContent)){
    //    console.log("Theres an import match for: ", fileNode.filePath)
    //   //  mergedCssString.replace(fileNode.fileContent.match(MATCH_IMPORT_LINE_REGEX)[0],readFiles[index+1].fileContent)
    //  }else{
    //    console.log("NO import matched for:", fileNode.filePath)
    //  }


   })
}

const extractImportPath = (cssDecoratedPath)=>{

  let PATH_EXTRACT_REGEX = /\("(.*)"\)/
  let pathStringMatch = PATH_EXTRACT_REGEX.exec(cssDecoratedPath)
  // console.log("THE PATH STRING array", pathStringMatch)
  // console.log("THE PATH STRING",pathStringMatch[1])
  return pathStringMatch[1]

}
const searchForFilePath = (pathString, opts)=>{

  // console.log("THE OPTS",opts)
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
      if(!fs.existsSync(currentFileNamePath)) throw new Error(`Imported css file with path: ${currentFileNamePath} does not exist.`)
      // console.log("THE PARENT FILE PATH FOLDER", parentFilePathFolder)
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
  if(!fs.existsSync(realFilePath)) throw new Error("Imported css file path:",realFilePath,"does not exist")
  let contents = fs.readFileSync(realFilePath,{encoding: "utf8"})
  // console.log("THE FILE CONTENTS", contents)
  return contents
}

export default mergeCssFiles
