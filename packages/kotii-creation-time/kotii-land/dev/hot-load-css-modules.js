import { loggas, logger } from "kotii-logger";
if (import.meta.webpackHot) {
  console.log("THE DEPS MET HOT WEBPACK");
  let deps = typeof dependecies === "undefined" ? [] : dependecies;
  let depsRefined = deps instanceof Array ? deps : Object.keys(deps);
  loggas.startUp.debug("ONE OF THE CSS MODULES DEPS", dependecies, deps, depsRefined);
  import.meta.webpackHot.accept("!!/todo.module.less", function () {
    console.log("HOT MODULE RELOADED!!!");
  }, (er, {
    moduleId,
    dependencyId
  }) => {
    console.log("THE HOT ERROR", er, moduleId, dependencyId);
  });
}
export default {};