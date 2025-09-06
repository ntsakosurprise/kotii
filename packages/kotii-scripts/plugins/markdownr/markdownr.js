import { MarkdownLoader } from "kotii-markdown";
import methods from "./methods";
class Markdownr {
  constructor(pao) {
    this.pao = pao;
    this.MarkdownLoader = MarkdownLoader;

    this.init = methods.init;
    this.handleMardownPages = methods.handleMardownPages;
  }
}
export default Markdownr;
