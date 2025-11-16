# Env

<h2><strong>What it is?</strong></h2>

<p>This is a light-weight plugin that manipulates environment variables for use on the browser</p>

<h2><strong>Events It Listens To?</Strong></h2>

- get-env-variables

<h2><strong>Event Handlers for each event</Strong></h2>

- handleEnvironmentVariables

# **What it does**

- It registers a listener to listen to handleEnvironmentVariables events

## **What each of the event-handlers does**

### **_handleEnvironmentVariables_**

- It retrieves data from the event object
- It extracts environment information from the data object
- It then calls `getEnvFiles()` function to get environment files, e.g dotEnv files
- It then sets a callback that runs once getEnvFiles() has retrieved env files
- It then calls back the event emitter with all once the process resolves

### **_getEnvFiles_**

- It checks if file path exist
- It then retrieves the environment variables in the file

### **_handleEnvironmentVariables CALLBACK_**

- It loops through environment variables checking if they match kotii-marked environment variables, filtering them in a way
- It then loops through the filtered kotii-marked environment variables storing them in a stringified object
- It then callback the event emitter with both raw and stringified env variables
