import React from "react";
export default (componentLoader) => {
  console.log("THE COMPONENT LOADER", componentLoader);
  let LoadedComponent = null;
  let loadModulePromise = null;

  async function loadModule() {
    if (!LoadedComponent) {
      loadModulePromise = await componentLoader();
      LoadedComponent = loadModulePromise?.default || loadModulePromise;
      console.log("THE LOADED", loadModulePromise);
    }
    return LoadedComponent;
  }

  function Lazy(props) {
    console.log("Lazy runs", props);
    if (!LoadedComponent) {
      console.log("Component is not loaded");
      loadModulePromise = componentLoader();

      loadModulePromise.then((componentModule) => {
        console.log("LAZY COMPONENT IS RESOLVED", componentModule?.default);
        LoadedComponent = componentModule.default || componentModule;
        return componentModule.default || componentModule;
      });
      console.log(
        "WE ARE ABOUT TO THROW",
        "typeof",
        typeof loadModulePromise,
        "instanceof",
        loadModulePromise instanceof Promise
      );
      throw loadModulePromise;
    }
    console.log("THE COMPONENT IS LOADED");
    return <LoadedComponent {...props} />;
  }
  Lazy.preload = loadModule;
  return Lazy;
};
