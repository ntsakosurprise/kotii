import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.tsx";

export default useRedirect = (redirectUrl) => {
  const { navigateByReplace } = useContext(KotiiRouterContenxt);
  return navigateByReplace;
};
