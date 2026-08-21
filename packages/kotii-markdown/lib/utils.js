const getLanguageLocal = (pattern, match) => {
  console.log("The pattern;;;", pattern);
  console.log("The patternMatch;;;", match);
  return pattern.exec(match)?.groups?.locale;
};

const capitalizeFirstLetter = (text) => {
  console.log("The text Uppercasing;;;", text);
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};

export { getLanguageLocal, capitalizeFirstLetter };
