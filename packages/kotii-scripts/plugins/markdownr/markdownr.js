import { MarkdownLoader } from "kotii-markdown";
import methods from "./methods.js";

class Markdownr {
  constructor(pao) {
    this.pao = pao;
    this.MarkdownLoader = MarkdownLoader;

    this.init = methods.init;
    this.handleMarkdown = methods.handleMarkdown;
    this.getPagesMarkdownContent = methods.getPagesMarkdownContent;
    this.customComponentLoader = methods.customComponentLoader;
  }
}
export default Markdownr;
