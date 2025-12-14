/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import App from "kotii-internal";
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept("", (er) => {
    App(userWrapper, userLayout);
  });
}

export {
  Head,
  Image,
  Svg,
  useAppContext,
  useUniversalEffect,
  ServerApp,
} from "kotii-internal";

export default App;
