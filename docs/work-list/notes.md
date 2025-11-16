# To-Do List [Fixes]

## **_To Do_**

### Cosmetics

- Fix stri-ansi package ESM issue on a yarn install of kotii
  > **NOTE** It appears that a cjs or esm module is referencing an esm module in esm or an esm module is referencing a cjs module, which is not allowed by the ESM module system. This happens with `string-ansi` npm package. A post of stackoverflow a solution that is yet to be implemented as of 17/11/2024
- Copy the copyFiles method of `scaffold` anzii plugin in kotii-cli package
  > **NOTE** Previously we were using anzii's createFolderContents function for copying files which reads and write files from source to destination, that was somewhat problematic as that was not considering the character encoding of different files and formats that users may use. A better approach was using the copyFiles method of `fs` nodejs package. Scaffold plugin has an implementation of fs for the same purpose, so we need to create a pr request on anziiJS for them to add the copyFiles method for this purpose. The approach was corrupting the images
- Create a regex for telling webpack to ingnore modules in node_modules for pnpm projects
- Fix react-redux, react-dom, and wouter@2.1.2 install issue on pnpm fresh install on kotiijs
- Fix file-loader install on fresh install of kotiiJS
- Find a way for a better installation of kotiiJS dependecies when doing local installations for testing(We will check the differenct package managers and how they deal with this)
- Fix nodejs styles hydration
- Add a pull-request on anziiJS framework.<br><br>
  > **NOTE** The pull request should be able to address an issue with anziiJS crashing with `Error: cannot set headers after headers have been sent to client`. Our discovery showed that this happened when anziiJS started processing another request while another one is in progress. <br> It just so happened that the second one overriden the req-res objects of the first one, and by the time the first one tries to send a response, it happened that it sent it on the `res` object of the second request, which then resulted in the error mentioned above. What we have currently is temporary solution. We will work with anziiJS team to find a better, permanent solution.
