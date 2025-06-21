
const plugin = (oldAst,newAst) => {

  console.log("OLD AST.LENGH, NEW AST.LENGTH",oldAst.nodes.length, newAst.nodes.length)
  let updateContent = {}
  let oldAstNodeReferences = {}
  let oldAstNodeReferencesKeys = []
  let oldAstAtImportReferences = {}
  let newAstImportReferences = {}
  let oldAstImportRemovals = []
  let updateType = '' 
  if(newAst.length > oldAst.length) updateType = "selectorAddition"
  if(newAst.length < oldAst.length) updateType = "selectorRemoval"
  if(newAst.length === oldAst.length) updateType = "selectorUpdate"
  oldAst.nodes.forEach((node,index)=>{
    node?.selector
     ? oldAstNodeReferences[node.selector] = {
       index
      }
    : node?.params && node?.name && node?.name === "import" ? oldAstAtImportReferences[node.params] = {id: node.params} : null
  })
  console.log("The oldAst ndoe references", oldAstNodeReferences, oldAstAtImportReferences)
  oldAstNodeReferencesKeys = Object.keys(oldAstNodeReferences)

  return {
    postcssPlugin: "compare-css",
    AtRule:  { 
      import: (atRule) =>{
       
        if(oldAstAtImportReferences[atRule.params]){
          oldAstAtImportReferences[atRule.params]["matched"] = true
        }else{
          newAstImportReferences[atRule.params] = {
            id: atRule.params
          }
        }
     }
    },
    Rule: (ruleNode) => {
      console.log("THE RULE NODE.NODE.NODE", ruleNode)
     
      if(oldAstNodeReferencesKeys.includes(ruleNode.selector)){
        console.log("RULE NODE.NODES",ruleNode.selector, ruleNode.nodes)
        let oldAstExactNode =  oldAst.nodes[oldAstNodeReferences[ruleNode.selector].index]
        oldAstNodeReferences[ruleNode.selector]["matched"] = true
        let nodeDeclaresKeys = {}
        console.log("OLD AST NODE",oldAstExactNode)
       oldAstExactNode.nodes.forEach((declareNode,index)=>{
         nodeDeclaresKeys[declareNode.prop.toLowerCase()] = {index}
       })
       console.log("NODE DECLARES KEYS", nodeDeclaresKeys)
       let declareskeys = Object.keys(nodeDeclaresKeys)
       console.log("DECLARES KEYS", declareskeys)
        ruleNode.nodes.forEach((rNode)=>{
          console.log("DECLARE NODE", rNode.prop)
          if(declareskeys.includes(rNode.prop.toLowerCase())){
            nodeDeclaresKeys[rNode.prop.toLowerCase()]["matched"] = true
            if(rNode.value !== oldAstExactNode.nodes[nodeDeclaresKeys[rNode.prop.toLowerCase()].index].value){
              if(!updateContent["oldSelectors"]){
                updateContent["oldSelectors"] = {
                  [ruleNode.selector]: {
                    propsValue: {
                     [rNode.prop]: rNode.value
                    }
                  }
                }
              }else{
                if( updateContent.oldSelectors[ruleNode.selector]){
                  updateContent.oldSelectors[ruleNode.selector].propsValue[rNode.prop] = rNode.value
                }else{
                  updateContent.oldSelectors[ruleNode.selector] = {
                    propsValue: {
                      [rNode.prop]: rNode.value
                    }
                  }
                }
                
              }
            }
           
          }else{
            if(!updateContent["oldSelectors"]){
              updateContent["oldSelectors"] = {
                [ruleNode.selector]: {
                  propsValue: {
                   [rNode.prop]: rNode.value
                  }
                }
              }
            }else{
              if(updateContent.oldSelectors[ruleNode.selector]){
                updateContent.oldSelectors[ruleNode.selector].propsValue[rNode.prop] = rNode.value
              }else{
                updateContent.oldSelectors[ruleNode.selector].propsValue[rNode.prop] = rNode.value
              }
              
            }
          }
        })

        declareskeys.forEach((declareK)=>{
          let declareRef = nodeDeclaresKeys[declareK]
          if(!declareRef.matched){
            let prop = oldAstExactNode.nodes[nodeDeclaresKeys[declareK].index].prop
            let value = oldAstExactNode.nodes[nodeDeclaresKeys[declareK].index].prop
            if(!updateContent.removeSelectorsProps){        
              updateContent["removeSelectorsProps"] = {
                  [ruleNode.selector]:{
                       [prop]: value
                  }
                }
              
            }else{
              if(!updateContent.removeSelectorsProps[ruleNode.selector]){
                updateContent.removeSelectorsProps[ruleNode.selector] = {
                  [prop]: value
                }
                
              }else{
                updateContent.removeSelectorsProps[ruleNode.selector][prop] = value
              }
            }
          }
        })

      }else{

        if(!updateContent["newSelectors"]){
          updateContent["newSelectors"] = {
            [ruleNode.selector]: `${ruleNode.selector} {`
          }
          let simplifiedProp = updateContent.newSelectors[ruleNode.selector]
          ruleNode.nodes.forEach((node)=>{
            simplifiedProp = `${simplifiedProp} ${node.prop}: ${node.value};`
          })
          simplifiedProp = `${simplifiedProp} }`
          updateContent.newSelectors[ruleNode.selector] = simplifiedProp
      }else{

          updateContent.newSelectors[ruleNode.selector] = `${ruleNode.selector} {`
          ruleNode.nodes.forEach((node)=>{
            simplifiedProp = `${simplifiedProp} ${node.prop}: ${node.value};`
          })
          simplifiedProp = `${simplifiedProp} }`
          updateContent.newSelectors[ruleNode.selector] = simplifiedProp
      }
      
      }
    },
    OnceExit(css) {
     
      console.log("OLD AST NODE REFERENCES AFTER UPDATE::", oldAstNodeReferences)
      console.log("THE CSS IMPORT OBJECT", oldAstAtImportReferences)

      oldAstNodeReferencesKeys.forEach((refKey)=>{
        let ref = oldAstNodeReferences[refKey]
        if(!ref.matched){
          if(!updateContent.removeSelectorsUpdate){
            updateContent["removeSelectors"] = [refKey]
          }else{
            updateContent.removeSelectorsUpdate.push(refKey)
          }
        }
      })

      if(Object.keys(oldAstAtImportReferences).length > 0){
        Object.keys(oldAstAtImportReferences).forEach((importRef)=>{
          let ref = oldAstAtImportReferences[importRef]
          if(!ref.matched){
            oldAstImportRemovals.push(extractImportPath(ref.id))
          }
        })
      }

      if(Object.keys(updateContent).length > 0){
        css["update"] = {
          updateType,
          updateContent
        }
      }
      
      if(Object.keys(newAstImportReferences).length > 0){
        if(!css?.update){
          css["update"] = {
              importsUpdates: {
              newImports: newAstImportReferences
            }
          }
        }else{
          css.update["importsUpdates"] = {
            newImports: newAstImportReferences
          }
        }
       
      }

      if(oldAstImportRemovals.length > 0){

        if(!css?.update){
          css["update"] = {
              importsUpdates: {
              importRemovals: oldAstImportRemovals
            }
          }
        }else{
          if(!css.update?.importsUpdates){
            css.update["importsUpdates"] = {
              importRemovals: oldAstImportRemovals
            }
          }else{
            css.update.importsUpdates["importRemovals"] = oldAstImportRemovals
          }
         
        }
       
      }

      console.log("COMPARE HAS COMPLETED", css.update);

      
     
    },
  };
};
const extractImportPath = (cssDecoratedPath)=>{

  let PATH_EXTRACT_REGEX = /\("(.*)"\)/
  let pathStringMatch = PATH_EXTRACT_REGEX.exec(cssDecoratedPath)
  // console.log("THE PATH STRING array", pathStringMatch)
  // console.log("THE PATH STRING",pathStringMatch[1])
  return pathStringMatch[1]

}
plugin.postcss = true;

export default plugin;
