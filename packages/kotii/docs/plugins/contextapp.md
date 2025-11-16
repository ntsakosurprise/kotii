# Contextapp

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that helps us manipulate the file system to create resources for our app and to prepare an environment where these resources can further be manipulated robustly and consistently</p>

<h2><strong>Events It Listens To?</Strong></h2>

- context-app

<h2><strong>Event Handlers for each event</Strong></h2>

- handleContextApp

# **What it does**

- It registers a listener to listen to context-app events

## **What each of the event-handlers does**

### **_handleContextApp_**

- It retrieves data from the event object
- It extracts build information from the data object
- It then calls `getAppInContextResources()` function to assemble resources like the app's source folder, config files, etc
- It then sets the type of environment
- It then initiates file routes processing by emitting an event to [filerouter](./filerouter.md) plugin
- It then calls back the event emitter with all assembled resources _including routes_
