import createRandomName from "../createRandomName.js";
const plugin = (opts = {}) => {
  console.log("POSTCSSPLUGIN OPTS", opts);

  let cssFileStylesMap = {};
  return {
    postcssPlugin: "transform-css-classes",
    Rule: (ruleNode) => {
      let selectorName = ruleNode.selector;
      if (selectorName[0] === ".") {
        let nameWithoutPeriod = selectorName.substr(1, selectorName.length);
        let scopedClassName = `${selectorName}_${createRandomName(
          5
        )}_${createRandomName(3)}`;
        cssFileStylesMap[nameWithoutPeriod] = scopedClassName.substr(
          1,
          scopedClassName.length
        );

        ruleNode.selector = scopedClassName;
      }
    },
    OnceExit(css) {
      console.log("THE JSON MAP", cssFileStylesMap);
      css["modulesMap"] = cssFileStylesMap;
    },
  };
};

plugin.postcss = true;

export default plugin;
