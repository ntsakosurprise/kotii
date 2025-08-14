import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.tsx";

export default useLocation = () => {
  const { path, hash, search } = useContext(KotiiRouterContenxt);
  return {
    pathname: path,
    search,
    hash,
  };
};
