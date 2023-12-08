if (import.meta.webpackHot) {
  console.log("THE META.HOT");
  import.meta.webpackHot.accept();
}
import App from "kotii-scripts";
// import AppRoot from "";
import { Layout, Root } from "Startup";

App(Root, Layout);
