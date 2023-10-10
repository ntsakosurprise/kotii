module.exports = function () {
  let args = process.argv.length > 2 ? [] : process.argv.slice(2);
  return args;
};
