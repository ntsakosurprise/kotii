import React from "react";
export default (componentLoader) => {
  let LoadedComponent = null;
  let loadModulePromise = null;

  async function loadModule() {
    if (!LoadedComponent) {
      loadModulePromise = await componentLoader();
      LoadedComponent = loadModulePromise?.default || loadModulePromise;
    }
    return LoadedComponent;
  }

  function Lazy(props) {
    if (!LoadedComponent) {
      loadModulePromise = componentLoader();

      loadModulePromise.then((componentModule) => {
        LoadedComponent = componentModule.default || componentModule;
        return componentModule.default || componentModule;
      });

      throw loadModulePromise;
    }

    return <LoadedComponent {...props} />;
  }
  Lazy.preload = loadModule;
  return Lazy;
};
