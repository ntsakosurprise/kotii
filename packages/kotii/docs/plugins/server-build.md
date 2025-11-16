# Server-Build

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that interprets command line input. The ability to process command line inputs is based on some emitted event. The event is emitted by anziiJS' framework. AnziiJS emits this event for any command line program. A program is marked as a command line if the progam's main file contains an A statement</p>

<h2><strong>Events It Listens To?</Strong></h2>

- generate-server-build

<h2><strong>Event Handlers for each event</Strong></h2>

- generate-server-build

# **What it does**

- It registers a listener to listen to generate-server-build events

## **What each of the event-handlers does**

### **_handleServerBuild_**

- It retrieves data from the event object
- It checks if a file named styles.json exists
- It deletes the styles.json file if it exists from the source
- It reads and parses a package.json file
- It reads and parses a babel config file(babel.server.build.json) to a container name `babelJson`
- It extracts `plugins` objects from the read babel config json file above (`babelJson`)
- It then pushes [`scoped-styles-plugin`](../babel/scoped-styles-plugin.md) babel plugin to the `plugins` object above
- It then overrides `babelJson.plugins` with the updated plugins that include `scoped-styles-plugin` babel plugin
- It then saves the babel config file above back to the disk for later use<br>
- It then adds a `babel-ssr` script to package.json read above
- It then saves the package.json back to disk
- It then runs a script function[runNpmScript()] that runs the script that's just been saved above in package.json

> **NOTE:** <br>
> styles.json file is created by the `scoped-styles-plugin` during transpilation as a result of the `runNpmScript()` call<br> `babel.server.build.json` is only read to add `scoped-styles-plugin`. <br><br>
> A `package.json` is read to add the `babel-ssr` script. <br><br>

### **_runNpmScript_**

- It creates a temp directory in user's system home directory
- It then syncs directories using `syncDirectories()`<br >
  > **NOTE** This syncs the source directory's `src` folder to the destionation's `src` folder. It ignores anything that's not supposed to be in the destionation's `src` folder
- It then copies everything from source to the temp folder ignoring any black-listed files using `copyPublicToDist()`<br />
  > **NOTE** This call is made to copy files from the main source that babel transpilation could not process and therefore were not copied. The copy ignores everything else we know is already copied or that is not supposed to be copied. Example: `src`, `build`, etc. In future we will also let users decide which files to include or ignore
- It then copies everything from temp folder to the destination folder ignoring any black-listed files using `copyPublicToDist()`<br >
  > **NOTE** This is to get exact files or folders to the actual build destination from the temp folder. At this point, we know all the content in temp folder is the content we want to be in the destination folder as it has been filtered
- It then manually removes the created temp folder from the system
- It then removes jsx or tsx references by calling `removeJsxReferences()`
- It then removes the `scoped-styles-plugin` added in handleServerBuild function
- It then re-saves the babel json
- It then saves routes in userLand using `saveRoutesInUserLand()`
- It then create pages file using the function `doKotiiLandPagesFile()`

### **_removeJsxReferences_**

- It loops through the root folder content separating files from folders
- It then filters folders return any that's not blacklisted
- It then merges filtered folders and files
- It then loops throught the filtered assets processing each file wheater in nested folders or otherwise
- It then builds absolute path for each file
- It then reads content of the current file
- It then parses the file content to ast(abstract syntax tree)
- It calls `updateJSXImportDeclarations()` function passing to it the ast and state objects<br >
  > **NOTE:** The state objects contains file paths information such as the destination of files.
- It then saves the processed file to disk

### **_updateJSXImportDeclarations_**

- It traverses the ast object that represents a file content
- It looks for ImportDeclaration nodes
- It retrieves an import specifier from every ImportDeclaration node
- It checks if it contains the .jsx extension, if it does, it then replaces the extension with .jx extension, then skips the current node
- It then checks if an import specifier contains a .xml, .json, or .csv extension
- If the specifier contains any of the extensions above, it then gets the leading slash of specifier string, and finally creates an absolute path to the file.
- It then reads the content of the file
- It then processes json content by replacing the json file with a js module with a default of export of the parsed json object, ultimately making this a file with a javscript object.
- It then repeats the step above for .xml and .csv files, essentially using their respective mechanisms to turn them into javascript objects.
- It then checks if the specifier is an absolute path that's not for a built-in modules or packages.

### **_saveRoutesInUserLand_**

- It loops throught routes filtering those that require data.
  > **NOTE:** Routes that require data are routes that expect data from some api. In kotii, a react component will typically contain a getServeState function that will then be executed from the server
- It then creates a file path with name `app_routes.js`
- It then writes routes to this file
- After writing or saving the routes to the file, and the read it again
- It then parses the file to ast
- It then loops through an object containing routes that require data
- It then uses babel ast manipulator to create objects with functions
- It then saves the file again
- It then return control

### **_doKotiiLandPagesFile_**

- It reads the `pages` file from dev
- It then parses the file to ast
- It calls `updateJSXImportDeclarations()` function passing to it the ast and state objects
- It then creates a `.kotii-land` folder
  > **NOTE:** `.kotii-land` is a special folder in kotiiJS where we save production-ready source code
- It then generates code string from ast
- It then saves the source string to the created pages path
- It copies app_routes content to a file name `routes` in the created `.kotii-land` path
- It then retrieves a saved kotii config template to a file `.config.js`
- It then saves content to `app.maniftest.json` in the created `.kotii-land` folder
