const beginCreations = (commandToRun) => {
  import("kotii-creation-time").then((kotiiCreateTime) => {
    console.log("IMPORTED KOTII-CREAT-TIME", kotiiCreateTime);
    const { dev, build, ssg } = kotiiCreateTime;

    switch (commandToRun) {
      case "dev":
        return dev();
      case "build":
        return build();
      case "static":
        return ssg();
      default:
        throw new Error("KotiiJS was started with an unrecognised command");
    }
  });
};

export { beginCreations };
