# App\_.js

<h2><strong>What it is?</strong></h2>

<p>This is a file that is used as the basis for kotii app. Resources like exports of the kotiiJS meta framework are derived from this file. It is central to the functionality of kotiiJS as a framework</p>

## **Features**

- `App` It contains the `App()` function that is exported and imported in userland to initiate the app
- `Server` Is used in serverSideRendering to render a react application on the server
- `HotModule Subscription` It contains subscription to hot module reload
  > **NOTE** It currently assumes that every user wants to have hot module reload, but in future, it will be modified to make this optional
- `Exports` It is used to export resources from kotiiJS

## **What happens in the file?**

- Importing of all the needed resources, like redux files,build, routes, react, etc
- Creation of the needed functions
- Exporting of the necessary resources
- Subscribing to hot module reload

## **App**

- It takes `appWrapper` and `layout` as its arguments
- It gets some meta data about the app from a special kotiiJS environment variable
- It then checks the app type(`ssr` or `spa`)
- It then checks if the app has state vendor(`redux`)
- It then app is ssr, it then resolves to ssr block, otherwise to spa block

### **SSR Block [APP]**

- It checks if app has redux support, if it does, it processes the redux block

#### SSR Redux Block [APP]

- A redux store is created by calling `createReduxStore()`
  > **NOTE** Redux store in this context[APP context] is passed an object of data that is derived from a property on the `window` object. The property's name is `__PRELOADED_STATE__`. This object propery's data is derived or comes from the server and was created when the app was rendered on the server[of course, for ssr] <br><br> Please also be aware that as of this writing, the redux implementation that we have is a little minimal. We will add to it in future such so that we will also allow the user the ability to make their own custom set ups
- A function named `appWithRedux()` gets called. This function is passed the `appWrapper`, `layout`, and `store`

#### SSR None-Redux Block [APP]

- A function named `appNormal()` gets called. It also gets passed the `appWrapper` and `layout`

### **SPA Block [APP]**

- It checks if app has redux support, if it does, it processes the redux block

#### SPA Redux Block [APP]

- A redux store is created by calling `createReduxStore()`
  > **NOTE** Unlike the Server rendered app's redux setup, this function has no initiation data from the server, it therefore starts normally.
- A function named `appSpaWithRedux()` gets called. This function is passed the `appWrapper`, `layout`, and `store`

#### SPA None-Redux Block [APP]

- A function named `appSpa()` gets called. It also gets passed the `appWrapper` and `layout`

#### appWithRedux

- It checks if it was called from a server or client
- It then renders based on wheather it's client or server

### appWithRedux Server

- It returns a React component. This component is a redux's Provider component that wraps the whole app under
  > **NOTE** The app must be wrapped under a `Provider` components if it uses redux as statement management tool. The provider ensures that all the subscribed components have access to the data in the store. <br><br> The Provider wraps `AppProvider` as its immediate child. `AppProvider` is a custom kotiiJS component that uses the context-api of ReactJS. The `AppProvider` is passed the appWrapper and layout which it makes available to its child elements.<br><br> The `AppProvider` component its self wraps the `AppGeneric` component, this componet renders route components for the app[more on this later]. Depending on the environment, this component can be passed some props. On a server, it is passed a `routes` object named `goodies`, this object contains mappings of routes to components that will essentially determine the component to be rendered

### appWithRedux Client

- It returns a React component. This component is a redux's Provider component that wraps the whole app under.
  > **NOTE** Unlike with the server render, the `AppGeneric` component does not get passed any props. This is because the routes and route-to-component mapping has already been created when the app was transpiled by webpack.
- It hydrates the app if it hasn't been hydrated
