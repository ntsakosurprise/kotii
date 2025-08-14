import { useContext } from "react";
import { KotiiRouterContenxt } from "./Router.jsx";

export const useParams = () => {
  const params = useContext(KotiiRouterContenxt);
  return params;
};
