# Interpreter

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that interprets command line input. The ability to process command line inputs is based on some emitted event. The event is emitted by anziiJS' framework. AnziiJS emits this event for any command line program. A program is marked as a command line if the progam's main file contains an A statement</p>

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
> the program. There are currently 4 arguments that it looks for, namely; _dev_, _start_,_build_, _static_. <br><br>
> A handler can be a function defined under interpreter plugin or another plugin that is initiated by the interpreter <br><br>

### The Four Target-Arguments

- dev: for dev execution of kotii
- start: for production run of kotii
- build: for building kotii app for production
- static: for static generation of kotii apps

### **_handlePromptUser_**

- It receives data contained in an event object
- It extracts the message from the data object of the event
- It prompts(display/print) the message on the screen
- It awaits user input to the printed message
- It then calls back the event emitter with the input from the user

# How It works

- It creates
- On beforeCompile event, it goes to the folder, read the files contained to a variable
- It then filters the files to determine if they fit the criteria of the files to be deleted
- It then finally deletes the files and exit.
