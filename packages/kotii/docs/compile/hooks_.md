# Hooks\_

<h2><strong>What it is?</strong></h2>

<p>This is a custom loader file for nodejs used in development to provide custom file resolution and loading functionality. The implementation of the functionality in this file plays a crucial role in kotiiJS, it helps us handle files that otherwise NodeJs wouldn't know how to handle. Not only does it provides resolution mechanisms, it also provides functionality that improves kotiiJs</p>

<h2><strong>Why was it created?</Strong></h2>

<p>This hook was created to allow us to process the varying file types that users may wish to use as part of their kotiiJS development. </p>

## **The hooks functions**

### load()

- It takes in the url, context, and nextLoad<br>
  > **NOTE:** <br> `url` reffers to the location of the currently processed file on disk. The location is searched and located by the `resolve()` function of the Nodejs runtime if no custom `resolve()` function is provided.<br> `context`<br> `nextLoad` refferes to the default file loading function that is provided and used by nodejs if no custom file loader function is provided. File-loading means reading the content of the file from disk for processing.<br><br> The `load()` function is a our custom file-loading function for special cases. We check the format of the url to determine if we should load the file ourselves. If the given url format does not meet the criteria of what we load customarily, we then hand it over to nodejs' default load function[`nextLoad`]
- It extracts the file name and extension from the url
- It checks if the file extension matches a list of pre-defined extensions
  > **WHEN IT IS .JSX** <br> - It creates a babel options object: The babel options objects allows us to transform .jsx syntax to the plain javascript understood by nodejs and to make nodejs under stand assert syntax for importing resources like .json files.<br> - It creates the url instance.<br> - It checks if the url instance cotains an `/api/` string pattern.<br> **WHEN `/api/`** -- It checks if the file really exist on disk, if it does, it reads the file content, otherwis it creates a custom module that exports an object with a key `noApi`, this key is later used for other processing in kotiiJS.<br> - It then reads the contents of the file<br><br> > **WHEN IT IS Extensions: .png|.jpeg, etc**

### resolve()
