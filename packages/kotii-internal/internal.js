import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.join(__dirname);
const kotiiInternal = path.join(rootPath, "dist");
export {kotiiInternal, rootPath };
