const capitalizeFirstLetter = (text) => {
  console.log("The text Uppercasing;;;", text);
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};

const capitalizeLastLetter = (text) => {
  console.log("The text Lowercasing;;;", text);
  return `${text.slice(0, text.length - 1)}${text
    .slice(text.length - 1)
    .toLowerCase()}`;
};
export { capitalizeFirstLetter, capitalizeLastLetter };
