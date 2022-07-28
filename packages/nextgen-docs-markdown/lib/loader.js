const { parseMarkdown } = require("./markdownParser");

console.log(parseMarkdown);

module.exports = function (source) {
  console.log("MarkDownFolder", rePath);
  console.log("the source;;", source);
  this.getLogger();
  const rePath = this.resourcePath;
  console.log("MarkDownFolder", rePath);
  console.log("the source;;", source);
  const docs = {
    doc1: "I'm doc 1",
    doc2: "I'm doc 2",
  };

  const loaded = `

   export const docs = ${JSON.stringify(docs, null, 2)}
  
  `;

  return loaded;
};
