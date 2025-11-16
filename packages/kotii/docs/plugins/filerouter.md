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
  > **NOTE:** <br> The `build.js` file works along `pages.js` file to achieve the kotiiJS magic. <br> The reason we add the import statement dynamically is due to the strict caching nature of esm modules. <br> If we have the import done statically, we never get the updated `comps` and `routes` objects because nodejs will process the empty objects exported by these variables when it first loads the file, and because the esm modules cache in nodejs cannot be mutated, we never get the needed imports.<br><br> As a solution to this problem, we add and remove the import dynamically for webpack transpilation, and we remove it immediately after until the next restart of the server. <br> Internally for our server, outside of webpack, we pass the objects that `build.js` require dynamically from the [react](./react.md) and [react-pruned](./react-pruned.md) plugins<br><br> In future, we will look at ways of improving this.<br>
- It then calls `createMetaAst()` function, which creates the manifest.js' meta object.
