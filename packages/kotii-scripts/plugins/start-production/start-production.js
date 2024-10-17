import path from "path";
import { fileURLToPath } from "url";
import methods from "./methods.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class StartProduction {
  constructor(pao) {
    this.pao = pao;
    this.cwd = path.join(__dirname, "..", "..");

    this.init = methods.init;
    this.handleConfigIsReady = methods.handleConfigIsReady;
    this.doStartUp = methods.doStartUp;
    this.copyFromToFolder = methods.copyFromToFolder;
    this.createFolder = methods.createFolder;
  }
}
export default StartProduction;
