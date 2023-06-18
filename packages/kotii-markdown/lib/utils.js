const getLanguageLocal = (pattern, match) => {
  console.log("The pattern;;;", pattern);
  console.log("The patternMatch;;;", match);
  return pattern.exec(match)?.groups?.locale;
};

export { getLanguageLocal };
