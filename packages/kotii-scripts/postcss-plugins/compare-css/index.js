const plugin = (oldAst, newAst) => {
  let updateContent = {};
  let oldAstNodeReferences = {};
  let oldAstNodeReferencesKeys = [];
  let oldAstAtImportReferences = {};
  let newAstImportReferences = {};
  let oldAstImportRemovals = [];
  let updateType = "";
  if (newAst.length > oldAst.length) updateType = "selectorAddition";
  if (newAst.length < oldAst.length) updateType = "selectorRemoval";
  if (newAst.length === oldAst.length) updateType = "selectorUpdate";
  oldAst.nodes.forEach((node, index) => {
    node?.selector
      ? (oldAstNodeReferences[node.selector] = {
          index,
        })
      : node?.params && node?.name && node?.name === "import"
      ? (oldAstAtImportReferences[node.params] = { id: node.params })
      : null;
  });

  oldAstNodeReferencesKeys = Object.keys(oldAstNodeReferences);

  return {
    postcssPlugin: "compare-css",
    AtRule: {
      import: (atRule) => {
        if (oldAstAtImportReferences[atRule.params]) {
          oldAstAtImportReferences[atRule.params]["matched"] = true;
        } else {
          newAstImportReferences[atRule.params] = {
            id: atRule.params,
          };
        }
      },
    },
    Rule: (ruleNode) => {
      if (oldAstNodeReferencesKeys.includes(ruleNode.selector)) {
        let oldAstExactNode =
          oldAst.nodes[oldAstNodeReferences[ruleNode.selector].index];
        oldAstNodeReferences[ruleNode.selector]["matched"] = true;
        let nodeDeclaresKeys = {};

        oldAstExactNode.nodes.forEach((declareNode, index) => {
          nodeDeclaresKeys[declareNode.prop.toLowerCase()] = { index };
        });

        let declareskeys = Object.keys(nodeDeclaresKeys);

        ruleNode.nodes.forEach((rNode) => {
          if (declareskeys.includes(rNode.prop.toLowerCase())) {
            nodeDeclaresKeys[rNode.prop.toLowerCase()]["matched"] = true;
            if (
              rNode.value !==
              oldAstExactNode.nodes[
                nodeDeclaresKeys[rNode.prop.toLowerCase()].index
              ].value
            ) {
              if (!updateContent["oldSelectors"]) {
                updateContent["oldSelectors"] = {
                  [ruleNode.selector]: {
                    propsValue: {
                      [rNode.prop]: !rNode?.important
                        ? rNode.value
                        : `${rNode.value} !important`,
                    },
                  },
                };
              } else {
                if (updateContent.oldSelectors[ruleNode.selector]) {
                  updateContent.oldSelectors[ruleNode.selector].propsValue[
                    rNode.prop
                  ] = rNode?.important
                    ? rNode.value
                    : `${rNode.value} !important`;
                } else {
                  updateContent.oldSelectors[ruleNode.selector] = {
                    propsValue: {
                      [rNode.prop]: rNode?.important
                        ? rNode.value
                        : `${rNode.value} !important`,
                    },
                  };
                }
              }
            }
          } else {
            if (!updateContent["oldSelectors"]) {
              updateContent["oldSelectors"] = {
                [ruleNode.selector]: {
                  propsValue: {
                    [rNode.prop]: rNode?.important
                      ? rNode.value
                      : `${rNode.value} !important`,
                  },
                },
              };
            } else {
              if (updateContent.oldSelectors[ruleNode.selector]) {
                updateContent.oldSelectors[ruleNode.selector].propsValue[
                  rNode.prop
                ] = rNode?.important
                  ? rNode.value
                  : `${rNode.value} !important`;
              } else {
                updateContent.oldSelectors[ruleNode.selector].propsValue[
                  rNode.prop
                ] = rNode?.important
                  ? rNode.value
                  : `${rNode.value} !important`;
              }
            }
          }
        });

        declareskeys.forEach((declareK) => {
          let declareRef = nodeDeclaresKeys[declareK];
          if (!declareRef.matched) {
            let prop =
              oldAstExactNode.nodes[nodeDeclaresKeys[declareK].index].prop;
            let value =
              oldAstExactNode.nodes[nodeDeclaresKeys[declareK].index].prop;

            if (!updateContent.removeSelectorsProps) {
              updateContent["removeSelectorsProps"] = {
                [ruleNode.selector]: {
                  [prop]: value,
                },
              };
            } else {
              if (!updateContent.removeSelectorsProps[ruleNode.selector]) {
                updateContent.removeSelectorsProps[ruleNode.selector] = {
                  [prop]: value,
                };
              } else {
                updateContent.removeSelectorsProps[ruleNode.selector][prop] =
                  value;
              }
            }
          }
        });
      } else {
        if (!updateContent["newSelectors"]) {
          updateContent["newSelectors"] = {
            [ruleNode.selector]: `${ruleNode.selector} {`,
          };
          let simplifiedProp = updateContent.newSelectors[ruleNode.selector];
          ruleNode.nodes.forEach((node) => {
            simplifiedProp = `${simplifiedProp} ${node.prop}: ${node.value};`;
          });
          simplifiedProp = `${simplifiedProp} }`;
          updateContent.newSelectors[ruleNode.selector] = simplifiedProp;
        } else {
          updateContent.newSelectors[
            ruleNode.selector
          ] = `${ruleNode.selector} {`;
          ruleNode.nodes.forEach((node) => {
            simplifiedProp = `${simplifiedProp} ${node.prop}: ${node.value};`;
          });
          simplifiedProp = `${simplifiedProp} }`;
          updateContent.newSelectors[ruleNode.selector] = simplifiedProp;
        }
      }
    },
    OnceExit(css) {
      oldAstNodeReferencesKeys.forEach((refKey) => {
        let ref = oldAstNodeReferences[refKey];
        if (!ref.matched) {
          if (!updateContent.removeSelectorsUpdate) {
            updateContent["removeSelectors"] = [refKey];
          } else {
            updateContent.removeSelectorsUpdate.push(refKey);
          }
        }
      });

      if (Object.keys(oldAstAtImportReferences).length > 0) {
        Object.keys(oldAstAtImportReferences).forEach((importRef) => {
          let ref = oldAstAtImportReferences[importRef];
          if (!ref.matched) {
            oldAstImportRemovals.push(extractImportPath(ref.id));
          }
        });
      }

      if (Object.keys(updateContent).length > 0) {
        css["update"] = {
          updateType,
          updateContent,
        };
      }

      if (Object.keys(newAstImportReferences).length > 0) {
        if (!css?.update) {
          css["update"] = {
            importsUpdates: {
              newImports: newAstImportReferences,
            },
          };
        } else {
          css.update["importsUpdates"] = {
            newImports: newAstImportReferences,
          };
        }
      }

      if (oldAstImportRemovals.length > 0) {
        if (!css?.update) {
          css["update"] = {
            importsUpdates: {
              importRemovals: oldAstImportRemovals,
            },
          };
        } else {
          if (!css.update?.importsUpdates) {
            css.update["importsUpdates"] = {
              importRemovals: oldAstImportRemovals,
            };
          } else {
            css.update.importsUpdates["importRemovals"] = oldAstImportRemovals;
          }
        }
      }
    },
  };
};
const extractImportPath = (cssDecoratedPath) => {
  let PATH_EXTRACT_REGEX = /\("(.*)"\)/;
  let pathStringMatch = PATH_EXTRACT_REGEX.exec(cssDecoratedPath);

  return pathStringMatch[1];
};
plugin.postcss = true;

export default plugin;
