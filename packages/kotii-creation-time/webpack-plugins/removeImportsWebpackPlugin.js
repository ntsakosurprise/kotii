import generate from "@babel/generator";
import parser from "@babel/parser";
import traverse from "@babel/traverse";
import fs from "fs";

class RemoveImportsWebpackPlugin {
  removeFilePath = "";
  removeImportSpecifiers = [];
  importRemoved = false;
  constructor(options, loggas) {
    this.removeFilePath = options.removeFilePath;
    this.removeImportSpecifiers = options.removeFileSpecifiers;
    this.loggas = loggas;
  }
  apply(compiler) {
    compiler.hooks.afterCompile.tap("RemoveImportsWebpackPlugin", () => {
      this.loggas.removeImportsWebpackPlugin.debug("PLUGIN:: REMOVEIMPORTS");
      if (this.importRemoved) return;
      this.importRemoved = true;
      let removeImportSpecifiers = this.removeImportSpecifiers;
      const buildPath = this.removeFilePath;
      this.loggas.removeImportsWebpackPlugin.debug(
        "REMOVE BUILD PATH",
        buildPath
      );
      const buildPathFile = fs.readFileSync(buildPath, { encoding: "utf-8" });
      this.loggas.removeImportsWebpackPlugin.debug(
        "REMOVE READ FILE",
        buildPathFile
      );
      const buildAst = parser.parse(buildPathFile, {
        sourceType: "module",
        plugins: ["jsx"],
      });
      this.loggas.removeImportsWebpackPlugin.debug("REMVOE BUILD AST");

      traverse.default(buildAst, {
        ImportDeclaration(path) {
          if (removeImportSpecifiers.indexOf(path.node.source.value) >= 0) {
            let local = path.node.specifiers[0]?.local.name;
            // removedImportsIds.push(local);
            path.remove();
          }
        },
      });
      const generateBuildAst = generate.default(buildAst).code;

      let newFileContent = `${generateBuildAst}`;
      fs.writeFile(
        buildPath,
        newFileContent,
        { encoding: "utf-8" },
        (err, success) => {
          this.loggas.removeImportsWebpackPlugin.debug(
            "REMOVE WRITE FILE",
            err,
            success
          );
        }
      );
    });
  }
}

export default RemoveImportsWebpackPlugin;
