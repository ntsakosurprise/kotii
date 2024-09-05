const parseContextArguments = function () {
  //console.log("THE PROCESS", process.argv);
  let args = process.argv.length <= 2 ? [] : process.argv.slice(2);
  return args;
};

module.exports = {
  parseScriptArguments: parseContextArguments,
};
