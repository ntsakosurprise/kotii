import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.jsx";

export default () => {
  const { params } = useContext(KotiiRouterContenxt);
  return params;
};
