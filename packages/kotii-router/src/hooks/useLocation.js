import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.jsx";

export default () => {
  const { path, hash, search } = useContext(KotiiRouterContenxt);
  return {
    pathname: path,
    search,
    hash,
  };
};
