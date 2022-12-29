// import Home from "Pages";
// import Personal from "Pages";
// import Home from "../Home/component";
// import Personal from "../Personal/component";
// import HelpSupport from "Pages";
// import ProductServices from "Pages";
// import Store from "../Store/component";
import { Welcome } from "Docs";
import { HelpSupport, Home, Personal, ProductServices } from "Pages";

export default [
  {
    component: Home,
    name: "Home",
    path: "/",
  },
  {
    component: Personal,
    name: "Personal",
    path: "/personal",
  },
  {
    component: HelpSupport,
    name: "Help",
    path: "/help-support",
  },
  {
    component: ProductServices,
    name: "Product",
    path: "/products-services",
  },
  {
    component: Welcome,
    name: "Welcome",
    path: "/get-started/welcome",
  },
  //   {
  //     component: Store,
  //     name: "Store",
  //     path: "/store",
  //   },
];
