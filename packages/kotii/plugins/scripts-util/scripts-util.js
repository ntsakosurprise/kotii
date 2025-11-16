import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ScriptsUtil {
  constructor(pao) {
    this.pao = pao;
    this.kotiiScriptsPath = path.join(__dirname, "..", "..");
  }
  init() {
    this.listens({
      "get-scripts-utils": this.handleGetScriptsUtils.bind(this),
    });
  }
  handleGetScriptsUtils(data) {
    const self = this;
    self.callback = data.callback;
    self.callback({
      kotiiScriptsPath: this.kotiiScriptsPath,
    });
  }
}
export default ScriptsUtil;
