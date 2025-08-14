import { useContext, useEffect } from "react";
import { KotiiRouterContenxt } from "../Router/Router.jsx";

const Redirect = ({ to }) => {
  const { navigate } = useContext(KotiiRouterContenxt);

  useEffect(() => {
    navigate(to);
  }, [to, navigate]);
  return null;
};

export default Redirect;
