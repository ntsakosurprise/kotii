import postcss from "postcss";

export default (inputCss = [], opts = null) => {
  let asts = inputCss.map((css) => {
    return postcss.parse(
      css,
      !opts ? { from: undefined, to: undefined } : opts
    );
  });

  if (asts.length === 1) return asts[0];
  return asts;
};
