# Filerouter

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that interprets command line input. The ability to process command line inputs is based on some emitted event. The event is emitted by anziiJS' framework. AnziiJS emits this event for any command line program. A program is marked as a command line if the progam's main file contains an A statement</p>

<h2><strong>Events It Listens To?</Strong></h2>

- create-file-routes

<h2><strong>Event Handlers for each event</Strong></h2>

- handleFileRoutes

# **What it does**

- It registers a listener to listen to create-file-routes events

## **What each of the event-handlers does**

### **_handleFileRoutes_**

- It retrieves data from the event object
- It extracts the files source from the data object
- It gets all the file paths of the files inside user's src directory
- It then creates an absolute path to `manifest.js`
- It then dynamically imports `manifest.js` file content
- It then uses `getRoutesHelper`() to create routesObject
- It then creates server routes using `buildServerRoutes()` function
  > **NOTE:** <br>
  > buildServerRoutes function takes routesObject and modify it for routes that cater to react views and that can be processed by anziiJS
- It then extracts from meta object
  > **NOTE** The extracted data from meta object is used in development to track count of the files being added, renamed, and deleted. The system checks if there's been a change to things like the `source-path`, number of current pages paths vs previous,etc.
- It then calls `addToAST()` function if meta extracts are falsey. They'll be false when kotii is run for the first time aftern an installation of update from npm.
- It then cass `addOrRemoveByAST()` function if there's been updates.
- It then call back a function of whatever emitted the event.

### **_addToAST_**

- It takes an object of things to add, remove, or delete from a central pages file
- It creates a path to the `pages` file<br >
  > **NOTE** This pages file plays an important role in kotiiJS. It is used as a static importer of react modules or components in the app. It is from this file that we add, remove, or delete pages. This file is constantly updated as users add, delete, or remove pages.<br>
  > Like the manifest.js file, this file will only be a skeleton at the first installation or update of kotiiJS.<br> Once addToAST has successfully made the modifications, this file will be populated with import statements for pages, components themselves, and routes object. <br>
  > The content of this file is used at runtime to render pages and perform many other tasks. Webpack also uses contents of this file to build the client bundle that will be sent to the client.<br > > `build.js` file(which we will detail below) is dependent on this file for some of its operations.
- It then reads `pages` file
- It then parses the file to an ast tree
- It then traverses the VariableDeclaration of the tree to look for specific variables
- It then skips a VariableDeclaration node if it's an ImportDeclaration node
- It then loops through a container node skipping anything that's not a VariableDeclaration
- It then loops through declarations checking if a declaration is name `routes` or `comps`
- It then defines the two variables if they do not exist using `variableCreation()` function
- It then calls either `removeImportDeclarations()`, `variableCreation()`, or `insertImportDeclarations()` based on weather it is an add, rename, or delete operation.
- It then converts the updated ast back to string
- It then saves the code string to the pages file
  > **NOTE:** At this point, the `pages` file will either contain new or updated imports with `comps` and `routes` objects populated with necessary data.
- It then calls `addImportLineToBuildJs()` function to add an import statement to `build.js`. The import statement will be to retrieve the newly updated contents of `comps` and `routes` objects from `pages.js`.
  > **NOTE:** The `build.js` file works along `pages.js` file to achieve the kotiiJS magic. <br> The reason we add the import statement dynamically is because

### **_variableCreation_**

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
