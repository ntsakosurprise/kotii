
const path = require("path");
const fs = require("fs");
let assetsManifestData = null;


module.exports = function (cssContent) {
  return cssContent;
};
module.exports.pitch = function(request){

  let contextified = stringifyRequest(this,`!!${request}`)
  // let modulesMap = getStylesMaps(this,request)
  console.log("THE PITCH REQUEST", request, contextified)

  return `
  import  modulesMap from ${contextified};
  if (module.hot) {
     console.log("THE CONTEXTIFIED",${contextified}, modulesMap )
     module.hot.accept(${contextified}, 
      function () {
      console.log("HOT MODULE RELOADED!!!");
    }
    );

    module.hot.dispose(function() {
      update();
    });
  }
  export * from ${contextified}
  export default modulesMap
  
  `

}

function stringifyRequest(loaderContext, request) {
  return JSON.stringify(
    loaderContext.utils.contextify(loaderContext.context, request),
  );
}
