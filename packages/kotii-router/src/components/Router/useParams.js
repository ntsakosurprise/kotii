import { useContext } from "react";
import { KotiiRouterContenxt } from "./Router";

export const useParams = () => {
  const params = useContext(KotiiRouterContenxt);
  return params;
};
