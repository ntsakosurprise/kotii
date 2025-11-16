import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const kotiiRootPath = path.join(__dirname);
const kotiiPluginsPath = path.join(kotiiRootPath, "plugins");
const kotiiKotiiLandPath = path.join(kotiiRootPath, "kotii-land");
export { kotiiRootPath, kotiiPluginsPath, kotiiKotiiLandPath };
