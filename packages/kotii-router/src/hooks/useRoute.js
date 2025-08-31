import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.jsx";

export default () => {
  const { queryParams } = useContext(KotiiRouterContenxt);
  return {
    route: queryParams?.route || null,
    query: queryParams?.params || null,
  };
};
