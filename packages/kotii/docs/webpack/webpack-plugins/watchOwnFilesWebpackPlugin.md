# WatchOwnFilesWebpackPlugin

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that watches for file changes in a development mode. It sets up a watcher on webpack's initialization stage by hooking to an initialize hook. The watcher restarts the server on file changes. It also keeps a copy of the PORT number to re-reun the app on when any file changes </p>

<h2><strong>Why was it created?</Strong></h2>

<p>This plugin was created to compliment webpack's hot reload mode in development. Where hot reload only updates the browser when there are changes in a file, the watcher enables the user to add, remove, or rename files and have the results reflected in real time on the browser. For this behavior, kotii via this watcher silently restarts the server and allow the user to re-fetch the results by navigating to a file. </p>

## How It works

- It checks the type of file change that's been made
- It then restarts the server based on some condition
-
