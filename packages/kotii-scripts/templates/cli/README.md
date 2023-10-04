
# Introduction

An anzii framework plugin that shows how to create anzii plugins.

# Installation 

  ```
  npm install --save anzii-hello-example
  
  ```

# Usage 


    ```js

        const anzii = require('anzii') 
        const Hello = require('anzii-hello-example') // require anzii-hello-example
        anzii({Hello}) // pass it to anzii() method

    ```


### Example Plugin Hello
     


```js
class Hello{
	
	
	constructor(pao){
		
		this.pao = pao // Every plugin is passed this object
	}
	
	init(){
  
        this.listens({
            
            'handle-hello-task': this.handleHelloTask.bind(this), // Event and handling method
        
        }) // Call listens() method (available to every anzii plugin) to set events that this module  listens to
	
	}// Define the required init() method



    handleHelloTask(data){

        const self = this  
    
        self.callback = data.callback 
        const {payload} = data 
        const {user} = payload 
        const {name,surname} = user // assume name to be "Ntsako" and surname to be "Mashele"
        const message = `Hello ${name} ${surname}, I'm happy to meet you.'` 
        return self.callback(null,{message: message})

       
    }// This method is called whenever handle-hello-event is emitted

	
	
	
}
 

export default Hello 

```


Navigate to ***http://localhost:3000/hello/ntsako/mashele*** and you should see the text  ***Hello Ntsako Mashele, I'm happy to meet you***  on your browser.

**Please note:** ***The Ntsako and Mashele parameteres used above are optional, use your own parameteres***


# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

