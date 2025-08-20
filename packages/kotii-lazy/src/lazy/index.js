export default (componentLoader) => {
  let LoadedComponent = null;
  let loadModulePromise = null;
  let state = "loading";

  async function loadModule() {
    if (!LoadedComponent) {
      loadModulePromise = componentLoader().then((componentModule) => {
        return componentModule.default || componentModule;
      });
      await loadModulePromise;
    }
    return LoadedComponent;
  }

  function Lazy() {
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
