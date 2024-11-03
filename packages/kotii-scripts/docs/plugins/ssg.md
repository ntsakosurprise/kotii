# SSG

<h2><strong>What it is?</strong></h2>

<p>This is a plugin whose task is to generate static web pages that can be taken and deployed to some static file server. [static](./static.md) plugin emits an event to this plugin for its static content generation. </p>

<h2><strong>Events It Listens To?</Strong></h2>

- generate-static-content

<h2><strong>Event Handlers for each event</Strong></h2>

- handleGenerateStaticContent

# **What it does**

- It registers a listener to listen to generate-static-content events

## **What each of the event-handlers does**

### **_handleGenerateStaticContent_**

- It saves the data to generate pages from the event object
- It then begins content generation by emitting an handle-react-static to [react](./react.md) plugin
- It receives generated pages from react plugin
- It begins filesystem to be able to save generated pages
- It saves each page to its own file on disk
- It calls back the emitting event to notify that pages have been generated and saved.
