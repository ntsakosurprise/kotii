import fs from "fs";

class getStatsWebpackPlugin {
  writeFilePath = "";

  constructor(options) {
    this.writeFilePath = options.writeFilePath;
  }
  apply(compiler) {
    compiler.hooks.done.tap("getStatsWebpackPluging", (stats) => {
      fs.writeFileSync(
        `${this.writeFilePath}/stats.json`,
        JSON.stringify(stats.toJson())
      );
    });
  }
}

export default getStatsWebpackPlugin;
