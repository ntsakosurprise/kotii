
class finishCompilationOnErrorWebpackPlugin{

    
    closeWatcher = null
    constructor(options=null){
        this.closeWatcher = options.closeWatcher
    }
    apply(compiler){
      
        compiler.hooks.done.tap("FinishCompilationOnErrorWebpackPlugin",(stats)=>{
            
            console.log("PLUGIN:: FINISHCOMPILATION ON ERROR")
            if(stats.compilation.errors.length > 0){
                
                    console.log("PLUGIN:: FINISHCOMPILATION WE ARE EXITING CODE", stats.compilation.errors )
                    throw new Error("PLUGIN:: FINISH PLUGIN ERROR")
                    
            }         
          
        })
       
    }
}

export default finishCompilationOnErrorWebpackPlugin