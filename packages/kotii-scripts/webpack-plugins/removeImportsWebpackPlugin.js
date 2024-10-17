import babel from "@babel/core";
import generate from "@babel/generator";
import parser from "@babel/parser";
import template from "@babel/template";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import fs from "fs"

class RemoveImportsWebpackPlugin{

    removeFilePath = ''
    removeImportSpecifiers=[]
    importRemoved = false
    constructor(options){
        console.log("REMOVE IMPORT OPTIONS", options)
        this.removeFilePath = options.removeFilePath
        this.removeImportSpecifiers = options.removeFileSpecifiers
    }
    apply(compiler){
      
        compiler.hooks.done.tap("RemoveImportsWebpackPlugin",()=>{
            console.log("THE REMOVE IMPORT LOG")
            if(this.importRemoved) return
            this.importRemoved = true
            let removeImportSpecifiers = this.removeImportSpecifiers
            const buildPath = this.removeFilePath;
            console.log("REMOVE BUILD PATH", buildPath)
            const buildPathFile = fs.readFileSync(buildPath,{encoding: "utf-8"});
            console.log("REMOVE READ FILE", buildPathFile)
            const buildAst = parser.parse(buildPathFile, {
                sourceType: "module",
                plugins: ["jsx"],
            });
            console.log("REMVOE BUILD AST")
          
            traverse.default(buildAst, {
                ImportDeclaration(path) {
                  console.log("AST NODE AFTER Import Node REMOVE", path.node.source.value);
                  console.log("AST NODE SPECIFIER REMOVE", path.node.specifiers[0]?.local.name);
                  console.log(
                    "AST NODE AFTER Import Test REMOVE",
                    removeImportSpecifiers.indexOf(path.node.source.value) >= 0
                  );
                  if (removeImportSpecifiers.indexOf(path.node.source.value) >= 0) {
                    let local = path.node.specifiers[0]?.local.name;
                    // removedImportsIds.push(local);
                    path.remove();
                  }
                },
              });
            const generateBuildAst = generate.default(buildAst).code;

              let newFileContent = `${generateBuildAst}`;
            fs.writeFile(buildPath,newFileContent, {encoding: "utf-8"},(err,success)=>{
                console.log("REMOVE WRITE FILE",err, success)
            })
        })

    }
}

export default RemoveImportsWebpackPlugin