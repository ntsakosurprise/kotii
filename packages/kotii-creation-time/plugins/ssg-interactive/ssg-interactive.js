import methods from "./methods.js";
class SsgInteractive {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;

    this.handleStaticInteractivity = methods.handleStaticInteractivity;
    this.extractPageInteractiveParts = methods.extractPageInteractiveParts;
    this.generatePageJs = methods.generatePageJs;
    this.extractForReactPage = methods.extractForReactPage;
    this.reactRenderTimeInterceptor = methods.reactRenderTimeInterceptor;
    this.interactionsExtractor = methods.interactionsExtractor;
    this.withInterceptor = methods.withInterceptor;
    this.normalizeToReactElement = methods.normalizeToReactElement;
    this.startPreRenderWork = methods.startPreRenderWork;
    this.createReactProxy = methods.createReactProxy;
    this.ReactStateCapture = methods.ReactStateCapture;
    this.eventsSourceAst = methods.eventsSourceAst;
    this.modifyUseStateCallsAst = methods.modifyUseStateCallsAst;
    this.getJsxDataBindingsFromAst = methods.getJsxDataBindingsFromAst;
    this.getStateUpdater = methods.getStateUpdater;
    this.createBindElementsFromBindList =
      methods.createBindElementsFromBindList;
    this.getComponentFileContentsAst = methods.getComponentFileContentsAst;
    this.startPreRenderWork = methods.startPreRenderWork;
    this.getThisPageResourcesGraph = methods.getThisPageResourcesGraph;
    this.loadPagesModuleGraph = methods.loadPagesModuleGraph;
    this.replaceIdentifier = methods.replaceIdentifier;
    this.createExternalsState = methods.createExternalsState;
    this.restoreFunctionsForRuntime = methods.restoreFunctionsForRuntime;
    this.normalizeExternalsForBrowser = methods.normalizeExternalsForBrowser;
    this.createUpdaterFromReactSetter = methods.createUpdaterFromReactSetter;
    this.getFactoryCreator = methods.getFactoryCreator;
    this.getFactoriesRunner = methods.getFactoriesRunner;
  }
}
export default SsgInteractive;
