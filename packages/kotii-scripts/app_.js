import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app_redux.js";
import ClientRoutes, { RoutesAsServerRoutes } from "./build.js";

// if (module.hot) {
//   module.hot.accept();
// }
// const App = (appWrapper = null, layout = null) => {
//   if (appWrapper || layout) {
//     if (typeof window !== "undefined") {
//       const AppWrapper = appWrapper;
//       //   const Layout = props.layout;
//       if (appWrapper && layout) {
//         const Layout = layout;
//         const root = createRoot(document.getElementById("root"));
//         root.render(
//           <StrictMode>
//             <AppWrapper>
//               <Routes layout={Layout} />
//             </AppWrapper>
//           </StrictMode>
//         );
//       } else {
//         const Layout = layout;
//         const root = createRoot(document.getElementById("root"));
//         root.render(
//           <StrictMode>
//             <AppWrapper>
//               <Routes layout={Layout} />
//             </AppWrapper>
//           </StrictMode>
//         );
//       }
//     }
//   } else {
//     if (typeof window !== "undefined") {
//       const root = createRoot(document.getElementById("root"));
//       root.render(
//         <StrictMode>
//           <Routes />
//         </StrictMode>
//       );
//     }
//   }
// };

const App = (appWrapper = null, layout = null) => {
  if (appWrapper || layout) {
    if (typeof window !== "undefined") {
      const AppWrapper = appWrapper;
      //   const Layout = props.layout;
      if (appWrapper && layout) {
        const Layout = layout;
        hydrateRoot(
          document.getElementById("root"),
          <Provider store={store}>
            <AppWrapper>
              <ClientRoutes layout={Layout} />
            </AppWrapper>
          </Provider>
        );
      } else {
        const Layout = layout;
        hydrateRoot(
          document.getElementById("root"),
          <Provider store={store}>
            <AppWrapper>
              <ClientRoutes layout={Layout} />
            </AppWrapper>
          </Provider>
        );
        // root.render(
        //   <StrictMode>
        //     <AppWrapper>
        //       <Routes layout={Layout} />
        //     </AppWrapper>
        //   </StrictMode>
        // );
      }
    }
  } else {
    if (typeof window !== "undefined") {
      hydrateRoot(document.getElementById("root"), <ClientRoutes />);
    }
  }
};

const ServerApp = (appWrapper = null, layout = null) => {
  if (appWrapper || layout) {
    if (appWrapper && layout) {
      const AppWrapper = appWrapper;
      const Layout = layout;
      return (
        <Provider store={store}>
          <AppWrapper>
            <RoutesAsServerRoutes layout={Layout} />
          </AppWrapper>
        </Provider>
      );
    } else {
      const AppWrapper = appWrapper;
      const Layout = layout;
      if (AppWrapper) {
        return (
          <Provider store={store}>
            <AppWrapper>
              <RoutesAsServerRoutes />
            </AppWrapper>
          </Provider>
        );
      } else {
        return (
          <Provider store={store}>
            <RoutesAsServerRoutes layout={Layout} />
          </Provider>
        );
      }
    }
  } else {
    return (
      <Provider store={store}>
        <RoutesAsServerRoutes />
      </Provider>
    );
  }
};
export { ServerApp };
export default App;
