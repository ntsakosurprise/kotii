import { useEffect } from "react";
import {
  registerOnLoginActions,
  registerOnLogoutActions,
} from "../components/index.js";

const useRegisterAuthActions = ({ onLogin, onLogout }) => {
  useEffect(() => {
    const unsubscribeFromLoginActions = registerOnLoginActions(onLogin);
    const unsubscribeFromLogoutActions = registerOnLogoutActions(onLogout);
    return () => {
      unsubscribeFromLoginActions();
      unsubscribeFromLogoutActions();
    };
  }, []);
};

export default useRegisterAuthActions;
