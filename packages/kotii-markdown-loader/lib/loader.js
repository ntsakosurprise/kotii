import { MarkdownLoader } from "kotii-markdown";

// eslint-disable-next-line no-unused-vars
export default function (markdown) {
  //parseMarkdown(markdown);

  let markdownOptions = {};
  markdownOptions["resource"] = this.resourcePath;
  markdownOptions["dependency"] = this.addDependency;

  console.log("THE MARKDOWN OPTIONS", markdownOptions);

  const loaded = MarkdownLoader(markdownOptions);
  return loaded;
}
