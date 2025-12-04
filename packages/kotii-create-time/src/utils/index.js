export const matchRoutePattern = (routeComponentPath, currentPath) => {
  // if (routeComponentPath === currentPath) return true;

  const routeSegments = routeComponentPath.split("/").filter(Boolean);
  const currentSegments = currentPath.split("/").filter(Boolean);

  if (routeSegments.length !== currentSegments.length) return null;

  let params = null;

  for (let i = 0; i < routeSegments.length; i++) {
    const routeSegment = routeSegments[i];
    const currentSegment = currentSegments[i];

    if (routeSegment.startsWith(":")) {
      if (!params) params = {};
      const paramName = routeSegment.slice(1);
      params[paramName] = currentSegment;
    } else if (routeSegment !== currentSegment) {
      return null;
    }
  }

  return { params };
};
