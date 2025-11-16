/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { KotiiRouterContenxt } from "../Router/Router.jsx";

const Redirect = ({ to }) => {
  const { navigateByReplace } = useContext(KotiiRouterContenxt);

  useEffect(() => {
    navigateByReplace(to);
  }, [to, navigateByReplace]);
  return null;
};

export default Redirect;
