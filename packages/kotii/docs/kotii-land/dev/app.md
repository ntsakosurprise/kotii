# App.js

<h2><strong>What it is?</strong></h2>

<p>This is a file that is loaded by kotii.cjs when running in all other environments except production. Its role is to set up the app bases like loadding kotiijs plugins as well as user plugins using dynamic imports. Plugins are loaded and fed to anziiJS to kick-start the app.</p>

## **What happens in the file?**

- It sets up the app as a cli app in environments other than production
- It attaches neccessary environment variables needed during development<br>
- It hooks up to an exit event of the process to run some special functionality in kotiijs
  > **NOTE:** <br> The callback hooked to the process's exit event is used to restart the server when required. Restarting the server sometimes retains things like previously used ports to achieve a goal of using the same port throughout a dummy-session. A dummy-session because the restart may make the server appear to be running continously to a user when in reality it's being restarted.<br><br> We restart the server on hard changes of the files and folders being watched for. Hard changes are things like renaming, adding, or deleting files during development.<br>
- It imports plugins modules dynamically
- It takes the plugins and them over to anziijs to process
- It then starts up the app using anziiJS
