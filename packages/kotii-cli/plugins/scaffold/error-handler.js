class ScaffoldError extends Error {
  message = "";
  error = true;
  type = "";
  name = "ScaffoldError";
  extendedError = null;

  constructor(err) {
    super();
    this.message = err?.message;
    this.type = err?.type;
    this.extendedError = err?.extendedError;
  }
}

module.exports = ScaffoldError;
