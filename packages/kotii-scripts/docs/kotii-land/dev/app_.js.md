# App\_.js

<h2><strong>What it is?</strong></h2>

<p>This is a file that is used as the basis for kotii app. Resources like exports of the kotiiJS meta framework are derived from this file. It is central to the functionality of kotiiJS as a framework</p>

## **Features**

- `App` It contains the `App()` function that is exported and imported in userland to initiate the app
- `Server` Is used in serverSideRendering to render a react application on the server
- `HotModule Subscription` It contains subscription to hot module reload
  > **NOTE** It currently assumes that every user wants to have hot module reload, but in future, it will be modified to make this optional
- `Exports` It is used to export resources from kotiiJS

## **Wha happens in the file?**

- Importing of all the needed resources, like redux files,build, routes, react, etc
- Creation of the needed functions
- Exporting of the necessary resources
- Subscribing to hot module reload

## **App**

- It takes `appWrapper` and `layout` as its arguments
- It gets some meta data about the app from a special kotiiJS environment variable
- It then checks the app type(`ssr` or `spa`)
- It then checks if the app has state vendor(`redux`)
- It then calls applicable functions based on the app type and a possible state manegement vendor
