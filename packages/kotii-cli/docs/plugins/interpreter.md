# Interpreter

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that interprets command line input. The ability to process command line inputs is based on some emitted event. The event is emitted by anziiJS' framework. AnziiJS emits this event for any command line program. A program is marked as a command line if the progam's main file contains an shebang[`#!/usr/bin/env`] statement</p>

<h2><strong>Events It Listens To?</Strong></h2>

- start-io-operations
- prompt-user

<h2><strong>Event Handlers for each event</Strong></h2>

- handleInterpreterCliInput
- handlePromptUser

# **What it does**

- It registers a listener to listen to start-io-operations events
- It register a listener to listen to prompt-user events

## **What each of the event-handlers does**

### **_handleInterpreterCliInput_**

    This event handler takes

- It extracts arguments passed from the command line
- It validates arguments to check if one of the target arguments has a handler
- It runs the target-argument handler if it exists

> **NOTE:** <br>
> A target-argument is a string that has a special meaning in
> the program. There are currently 3 arguments that it looks for, namely; `create-app`, `help`,and `version`. <br><br> Each of these arguments is a reffered to as a command that represents a special kind of purpose in the program, for example, `create-app` command is used to create a kotiiJS app, while the `help` command is used to show help about the how kotiijs cli works on the terminal <br><br>
> A handler can be a function defined under interpreter plugin or another plugin that is initiated by the interpreter <br><br>

### **_handlePromptUser_**

- It receives data contained in an event object
- It extracts the message from the data object of the event
- It prompts(display/print) the message on the screen
- It awaits user input to the printed message
- It then calls back the event emitter with the input from the user
