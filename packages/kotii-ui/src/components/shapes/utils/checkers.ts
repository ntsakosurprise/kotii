import { SHAPE_SIZES } from "../constants";
import * as ERORR_MESSAGES from "../error_messages";
import { number_check_pattern } from "../patterns";
import { getDefaultValue } from "./getters";

export const checkPropertyValue = (propertyKey, value) => {
  console.log("The PropertycheckValue;;;", value);
  console.log("THePROPER KEY;;", propertyKey);
  console.log("TheTypeoF propertyValue;;;", number_check_pattern.test(value));
  console.log("SHAPE SIZES;;;", SHAPE_SIZES);
  console.log("SHAPE SIZES INCLUDES", SHAPE_SIZES.includes(value));
  if (!value) return value;
  if (number_check_pattern.test(value)) return value;
  if (typeof value === "string") {
    if (SHAPE_SIZES.includes(value))
      return getDefaultValue(propertyKey, false, value.toLowerCase());
    throw new Error(ERORR_MESSAGES.string_value_constant);
  }

  throw new Error(ERORR_MESSAGES.value_format_unrecognised);
};
