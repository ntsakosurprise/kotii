import * as ERORR_MESSAGES from "../error_messages";
import { defaultValues } from "./defaults";

export const getDefaultValue = (proKey, isNumeric = false, text = "") => {
  console.log("getDefaultValue;;;", proKey, isNumeric, text);
  if (defaultValues[proKey]) {
    if (isNumeric) return defaultValues[proKey]["numeric"];
    if (!text) return defaultValues[proKey];
    console.log(
      "Value to be returned string;;;",
      defaultValues[proKey]["string"][text]
    );
    return defaultValues[proKey]["string"][text];
  }
  throw new Error(ERORR_MESSAGES.property_is_not_supported);
};

export const getVendorThemeProps = (themeProps, prop): any => {
  return themeProps?.theme?.global[prop]
    ? themeProps?.theme?.global[prop]
    : null;
};
