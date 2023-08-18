export const capitalizeFirstLetter = (text, shouldLowerCase = false) => {
  console.log("The text Uppercasing;;;", text);
  let casedString = shouldLowerCase ? text.toLowerCase() : text;
  return `${casedString.slice(0, 1).toUpperCase()}${casedString.slice(1)}`;
};
