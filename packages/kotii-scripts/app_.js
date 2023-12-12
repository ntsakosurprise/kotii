import React from "react";
import { hydrateRoot } from "react-dom/client";
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
          <AppWrapper>
            <ClientRoutes layout={Layout} />
          </AppWrapper>
        );
      } else {
        const Layout = layout;
        hydrateRoot(
          document.getElementById("root"),
          <AppWrapper>
            <ClientRoutes layout={Layout} />
          </AppWrapper>
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
        <AppWrapper>
          <RoutesAsServerRoutes layout={Layout} />
        </AppWrapper>
      );
    } else {
      const AppWrapper = appWrapper;
      const Layout = layout;
      if (AppWrapper) {
        return (
          <AppWrapper>
            <RoutesAsServerRoutes />
          </AppWrapper>
        );
      } else {
        return <RoutesAsServerRoutes layout={Layout} />;
      }
    }
  } else {
    return <RoutesAsServerRoutes />;
  }
};
export { ServerApp };
export default App;
