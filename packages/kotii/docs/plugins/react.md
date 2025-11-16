# React

<h2><strong>What it is?</strong></h2>

<p>This is a plugin whose task is to generate static web pages that can be taken and deployed to some static file server. [static](./static.md) plugin emits an event to this plugin for its static content generation. It is central to the rendering of components on the server. AnziiJS client request handler emits an event to this plugin for any react-related view request.</p>

<h2><strong>Events It Listens To?</Strong></h2>

- handle-react-static
- handle-react-view
- take-ssr-routes

<h2><strong>Event Handlers for each event</Strong></h2>

- handle-react-static
- handle-react-view
- take-ssr-routes

# **What it does**

- It registers a listener to listen to handle-react-static events
- It registers a listener to listen to handle-react-view events
- It registers a listener to listen to take-ssr-routes events

## **What each of the event-handlers does**

### **_handleReactStaticViews_**

- It saves the data to generate pages from the event object(Pages routes)
- It then mapes through the routes data
- It then calls an html creater function
- It then checks if there's an api data to be fetched for the page
- It then retrieves the react component from which page is to created
- It then process any other resources associated with the page like css, header tags, etch
- It then generates the html document
- It then calls back the event emitter that emitted the event and hand it the html

### **_handleReactViews_**

- It saves the data to generate pages from the event object(Pages routes)
- It then mapes through the routes data
- It then calls an html creater function
- It then checks if there's an api data to be fetched for the page
- It then retrieves the react component from which page is to created
- It then process any other resources associated with the page like css, header tags, etch
- It then generates the html document
- It then calls back the event emitter that emitted the event and hand it the html

> **NOTE:** The difference between handleReactViews and handleReactStaticViews is in the way they individually initiate

### **_takeSsrRoutes_**

- It retrieves routes data from the event object
- It then saves this data and retain it for the duration of the process(a kotii running instance)
- It then calls back the event emitter that emitted the event and hand it the html
