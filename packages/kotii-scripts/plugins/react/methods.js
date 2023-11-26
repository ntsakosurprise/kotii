const methods = {};

methods.init = function () {
  this.adLog("React View has been initialised");
  this.listens({
    "handle-react-view": this.handleReactView.bind(this),
  });
};

methods.handleReactView = function (data) {
  const self = this;
  self.adLog("Handling ReactView Event");
  self.adLog(data);
  self.callback = data.callback;

  self.runReactView(data);
};

methods.runReactView = function (data) {
  const self = this;
  const { store, React, StaticRouter, renderToString, Provider, REACTAPP } =
    self;
  const { view } = data;

  // Render the component to a string
  const html = renderToString(
    <StaticRouter location={view.match} context={{}}>
      <Provider store={store}>
        <REACTAPP />
      </Provider>
    </StaticRouter>
  );

  // Grab the initial state from our Redux store

  const finalState = store.getState();
  const fullPage = self.renderFullPage(html, finalState, view);
  return self.callback(null, fullPage);
};

methods.renderFullPage = function (html, preloadedState, view, scripts = []) {
  return `
		<!doctype html>
		<html>
		<head>


		<meta charset="utf-8" />
		<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#000000" />
		<meta
		  name="description"
		  content="
		  South Septic PTY Limited is a sewage removal company that focuses 
		  on emptying septic tanks using a truck fitted with a vacuum system to effectively pump out sewage waste."
		/>
		<link rel="apple-touch-icon" href="logo192.png" />
		<link rel="apple-touch-icon" href="logo192.png" /> 
		<link rel="stylesheet" type="text/css" href="/css/style.css">
		<!--
		  manifest.json provides metadata used when your web app is installed on a
		  user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
		-->
		<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
		<!--
		  Notice the use of %PUBLIC_URL% in the tags above.
		  It will be replaced with the URL of the "public" folder during the build.
		  Only files inside the "public" folder can be referenced from the HTML.
	
		  Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
		  work correctly both with client-side routing and a non-root public URL.
		  Learn how to configure a non-root public URL by running "npm run build".
		-->
			<title>${view.title}</title> 
			<script src="/static/js/2.176c43eb.chunk.js" defer></script>
    		<script src="/static/js/main.8a703e28.chunk.js" defer></script>
		</head>
		<body>
			<div id="root">${html}</div>
			<script>
			
			window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        "\\u003c"
      )}
			</script>
			<script src="/build/client.js" ></script>
  
		</body>
		</html>
    `;
};

module.exports = methods;
