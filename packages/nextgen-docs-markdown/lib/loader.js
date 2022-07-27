const { parseMarkdown } = require("./markdownParser");

console.log(parseMarkdown);

module.exports = async () => {
  this.getLogger();
  const rePath = this.resourcePath;
  console.log("MarkDownFolder", rePath);
};
