import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.tsx";

export default useLocation = () => {
  const { path } = useContext(KotiiRouterContenxt);
  return {
    location: path,
  };
};
