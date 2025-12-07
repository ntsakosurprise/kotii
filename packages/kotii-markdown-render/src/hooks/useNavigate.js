import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.jsx";

export default () => {
  const { navigate } = useContext(KotiiRouterContenxt);
  return navigate;
};
