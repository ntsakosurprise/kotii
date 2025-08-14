import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.tsx";

export default useNavigate = () => {
  const { navigate } = useContext(KotiiRouterContenxt);
  return navigate;
};
