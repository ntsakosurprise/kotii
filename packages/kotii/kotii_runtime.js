const run = (commandToRun) => {
  import("kotii-runtime").then((kotiiRuntime) => {
    const { start } = kotiiRuntime;
    start(commandToRun);
  });
};

export { run };
