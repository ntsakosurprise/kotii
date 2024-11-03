# ScopedStylesPlugin[babel]

<h2><strong>What it is?</strong></h2>

<p>This is a babel plugin that takes style string from any known format such as .scss, .styl, .less, and save it to a json file for a later a retrieval and inclusion from the server.</p>

<h2><strong>Why was it created?</Strong></h2>

<p>This plugin was created as a solution to a problem that started when we enabled a <i><strong>writeToDist</strong></i> flag of webpack-dev-middleware. The middleware wrote files to the build folder, but it was unable to delete old update files that were no longer needed. The middleware has a feature to filter the files, but that still failed, and as a result, came the creation of this plugin</p>

## **How It works**

- It uses an ast to check if an import node path contains a specifier string that matches .scss. .less, .css,etc
- It then reads the file content from disk
- It then creates a styles tag for any format it finds
- It saves the content to a file on a disk(currently reffered to as styles.json)

## **What happens to the generated file?**

- The generated file's content is read to a variable at runtime by one of kotii's plugins.
- The json file is parsed and converted to a string
- The converted string is then attached to the document head to be sent to the client
