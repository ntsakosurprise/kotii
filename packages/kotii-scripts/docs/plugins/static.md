# Static

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that interprets command line input. The ability to process command line inputs is based on some emitted event. The event is emitted by anziiJS' framework. AnziiJS emits this event for any command line program. A program is marked as a command line if the progam's main file contains an A statement</p>

<h2><strong>Events It Listens To?</Strong></h2>

- static

<h2><strong>Event Handlers for each event</Strong></h2>

- handleStaticScript

# **What it does**

- It registers a listener to listen to static events

## **What each of the event-handlers does**

### **_handleStaticScript_**

- It sets operation type to be build
- It sets the environment to be production
- It asks [contextapp](./contextapp.md) plugin to provide it with data it needs to generate production static of the project
- It receives the data from contextapp plugin
- It takes the received data and hand it over to [wbpconfig](./wbpconfig.md) plugin
- It asks [ssg](./ssg.md) plugin to generate static web pages
- It then receives an update from ssg plugin for the sucessful or failure of the static content generation
- It then calls back [interpreter](./interpreter.md) plugin to notify that it has completed its task
