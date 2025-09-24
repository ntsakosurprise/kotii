import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.jsx";

export default () => {
  const { navigateByReplace } = useContext(KotiiRouterContenxt);
  return navigateByReplace;
};
