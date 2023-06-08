const { parseMarkdown } = require("./markdownParser");

console.log(parseMarkdown);

// eslint-disable-next-line no-unused-vars
module.exports = function (markdown) {
  this.getLogger();
  const reContext = this.context;
  // const rePath = this.resourcePath;
  // console.log("MarkDownFolder", rePath);
  console.log("the source;;", reContext);
  parseMarkdown(markdown);
  const docs = {
    content: markdown,
  };

  const loaded = `

   export const docs = ${JSON.stringify(docs, null, 2)}
  
  `;

  return loaded;
};
