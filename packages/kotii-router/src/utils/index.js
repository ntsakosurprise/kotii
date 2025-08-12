const extractPathFromString = (pathString) => {
  if (pathString.indexOf("#") === 0) {
    return pathString.slice(1);
  }
  return pathString;
};

export const navigate = (to) => {
  window.location.hash = to;
};

export { extractPathFromString, navigate };
