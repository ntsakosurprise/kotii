# Watchr

<h2><strong>What it is?</strong></h2>

<p>Watchr is a plugin that enables us to watch for file changes in the filesystem</p>

<h2><strong>Events It Listens To?</Strong></h2>

- context-app

<h2><strong>Event Handlers for each event</Strong></h2>

- watch-target
- watch-stop-target

# **What it does**

- It registers a listener to listen to watch-target events
- It registers a listener to listen to watch-stop-target events

## **What each of the event-handlers does**

### **_handleWatch_**

- It retrieves data from the event object
- It attaches event-actions to the watcher and start watching the files

### **_handleStopWatching_**

- It retrieves data from the event object
- It then closes the watcher
