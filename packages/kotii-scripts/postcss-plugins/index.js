import postcss from "postcss";
export default postcss.plugin("postcss-css-modules", (opts = {}) => {
  return function (css, result) {
    console.log("THE POSTCSS RESULTS", css, result);
  };
});
