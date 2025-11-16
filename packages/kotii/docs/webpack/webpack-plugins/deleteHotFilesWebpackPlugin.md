# DeleteHotFilesWebpackPlugin

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that allows us to hook to webpack's bundling process to enable us the ability to manipulate webpack's generated hot update files. It hooks to webpack's beforeCompile hook to remove any outdated hot update files</p>

<h2><strong>Why was it created?</Strong></h2>

<p>This plugin was created as a solution to a problem that started when we enabled a <i><strong>writeToDist</strong></i> flag of webpack-dev-middleware. The middleware wrote files to the build folder, but it was unable to delete old update files that were no longer needed. The middleware has a feature to filter the files, but that still failed, and as a result, came the creation of this plugin</p>

## How It works

- The plugin requires an object with a folder name to where files to be deleted are located.
- On beforeCompile event, it goes to the folder, read the files contained to a variable
- It then filters the files to determine if they fit the criteria of the files to be deleted
- It then finally deletes the files and exit.
