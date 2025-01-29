import sass from "sass";

export default (sassFile) => {
  console.log("THE SASS FILE", sassFile);
  let compileResult = sass.compile(sassFile);
  return compileResult.css;
};
