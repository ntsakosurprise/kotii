import sass from "sass";

export default (sassFile) => {
  let compileResult = sass.compile(sassFile);
  return compileResult.css;
};
