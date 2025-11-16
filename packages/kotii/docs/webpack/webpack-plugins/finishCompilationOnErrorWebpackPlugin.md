# FinishCompilationOnErrorWebpackPlugin

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that throws a fatal error if a webpack compilation finishes with errors. It throws this error to prevent webpack-dev-middleware from hanging and blocking further execution. Throwing an error causes webpack-dev-middleware to unblock execution as a result of an error. In a way, it throws to cause webpack to render an error.</p>

<h2><strong>Why was it created?</Strong></h2>

<p>This plugin was created to ensure that webpack-dev-middleware's hanging nature on webpack errors is prevented. The reason for this is that we have a custom watcher that watches for file changes, if execution is blocked, it fails to execute, furthermore, what causes webpack-dev-middleware to hang is the files being added, renamed, or deleted. These file operations are what the custom watcher watches for to react as set.</p>

## How It works

- It checks if webpack has completed compilation with errors
- It then throws an error if webpack compilation has errors.
