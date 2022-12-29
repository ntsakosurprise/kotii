const { parseMarkdown } = require("./markdownParser");

console.log(parseMarkdown);

// eslint-disable-next-line no-unused-vars
module.exports = function (source) {
  this.getLogger();
  // const reContext = this.context;
  // const rePath = this.resourcePath;
  // console.log("MarkDownFolder", rePath);
  //   console.log("the source;;", reContext);
  const docs = {
    content: source,
  };

  const loaded = `

   export const docs = ${JSON.stringify(docs, null, 2)}
  
  `;

  return loaded;
};
