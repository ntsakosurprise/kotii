import runNodeScript from "./compile/runNodeScript.js";
console.log("conditon.js:", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  //   runNpmScript(
  //     "run",
  //     `--prefix /Users/surprisemashele/Documents/kotii start:prod`
  //   )
  //     .then((ran) => {
  //       console.log("THE SCRIPT RAN", ran);
  //     })
  //     .catch((err) => {
  //       console.log("THE SCRIPTS FAILED TO RUN", err);
  //     });
  runNodeScript(
    "/Users/surprisemashele/Documents/kotii/packages/kotii-scripts",
    "app.js",
    "/Users/surprisemashele/Documents/kotii/packages/kotii-scripts",
    ["start"]
  );
} else {
  //   runNpmScript(
  //     "run",
  //     `--prefix /Users/surprisemashele/Documents/kotii start:dev`
  //   )
  //     .then((ran) => {
  //       console.log("THE SCRIPT RAN", ran);
  //     })
  //     .catch((err) => {
  //       console.log("THE SCRIPTS FAILED TO RUN", err);
  //     });
  runNodeScript(
    "/Users/surprisemashele/Documents/kotii/packages/kotii-scripts",
    "app.js",
    "/Users/surprisemashele/Documents/kotii/packages/kotii-scripts",
    ["start"]
  );
}
process.on("exit", () => {
  console.log("THE PROCESS HAS EXITED CONDITION");
});
