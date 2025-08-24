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

  function Lazy() {
    console.log("Lazy runs");
    if (!LoadedComponent) {
      loadModulePromise = componentLoader().then((componentModule) => {
        return componentModule.default || componentModule;
      });
      throw loadModulePromise;
    }
    return <LoadedComponent />;
  }
  Lazy.preload = loadModule;
  return Lazy;
};
