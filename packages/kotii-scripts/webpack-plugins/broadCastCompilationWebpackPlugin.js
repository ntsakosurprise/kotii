class BroadcastCompilationWebpackPlugin {
    runOnceDone = null 
    shouldRunOnceDone = true
    constructor(runOnceDone,loggas) {
      this.loggas = loggas;
      this.runOnceDone = runOnceDone
      this.loggas.broadcastCompilationWebpackPlugin.debug("");
    }
    apply(compiler) {
      compiler.hooks.done.tap("BroadcastCompilationWebpackPlugin", () => {
        this.loggas.broadcastCompilationWebpackPlugin.debug("Compilation has succeded");
        try {
          if(this.shouldRunOnceDone){
            this.shouldRunOnceDone = false
            this.runOnceDone()
          }
        } catch (error) {
          console.log("RUN ONCE DONE ERRORED",error)
        }
        
        
      });
    }
  }
  
  export default BroadcastCompilationWebpackPlugin;
  