export const extractPathFromString = (pathString) => {
  if (pathString.indexOf("#") === 0) {
    return pathString.slice(1);
  }
  return pathString;
};

export const navigate = (to) => {
  //   window.location.hash = to;
  window.history.pushState({}, "", to);
  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
};

export const matchRoutePattern = (routeComponentPath, currentPath) => {
  if (routeComponentPath === currentPath) return true;

  const routeSegments = routeComponentPath.split("/").filter(Boolean);
  const currentSegments = currentPath.split("/").filter(Boolean);

  if (routeSegments.length !== currentSegments.length) return null;

  const params = {};

  for (let i = 0; i < routeSegments.length; i++) {
    const routeSegment = routeSegments[i];
    const currentSegment = currentSegments[i];

    if (routeSegment.startsWith(":")) {
      const paramName = routeSegment.slice(1);
      params[paramName] = currentSegment;
    } else if (routeSegment !== currentSegment) {
      return null;
    }
  }

  return { params };
};
