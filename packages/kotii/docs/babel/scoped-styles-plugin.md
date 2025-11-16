# ScopedStylesPlugin[babel]

<h2><strong>What it is?</strong></h2>

<p>This is a babel plugin that takes style string from any known format such as .scss, .styl, .less, and save it to a json file for a later a retrieval and inclusion from the server.</p>

<h2><strong>Why was it created?</Strong></h2>

<p>This plugin was created to process styles file formats that cannot natively be loaded by nodejs. This plugin registers its self to babeljs to act as the processor of these files during build outside of webpack. This enables us the ability to hydrate styles. It also allows us to convert .xml and .csv documents to javascript objects that easily be rendered both client and serverside</p>

## **How It works**

- It uses an ast to check if an import node path contains a specifier string that matches .scss. .less, .css,etc
- It then reads the file content from disk
- It then creates a styles tag for any format it finds
- It saves the content to a file on a disk(currently reffered to as styles.json)

## **What happens to the generated file?**

- The generated file's content is read to a variable at runtime by one of kotii's plugins.
- The json file is parsed and converted to a string
- The converted string is then attached to the document head to be sent to the client
