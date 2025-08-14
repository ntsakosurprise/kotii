import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.tsx";

export default useParams = () => {
  const { params } = useContext(KotiiRouterContenxt);
  return params;
};
