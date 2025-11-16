# Start

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that interprets command line input. The ability to process command line inputs is based on some emitted event. The event is emitted by anziiJS' framework. AnziiJS emits this event for any command line program. A program is marked as a command line if the progam's main file contains an A statement</p>

<h2><strong>Events It Listens To?</Strong></h2>

- dev

<h2><strong>Event Handlers for each event</Strong></h2>

- handlestartScript

# **What it does**

- It registers a listener to listen to start events

## **What each of the event-handlers does**

### **_handlestartScript_**

- It asks [contextapp](./contextapp.md) plugin to provide it with data it needs to run the app in production mode
- It receives the data from contextapp plugin
- It takes the received data and hand it over to [wbpconfig](./wbpconfig.md) plugin
- It then calls back [interpreter](./interpreter.md) plugin to notify that it has successfully began its task
