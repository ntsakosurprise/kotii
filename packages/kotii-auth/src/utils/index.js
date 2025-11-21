export const extractPathFromString = (pathString) => {
  if (pathString.indexOf("#") === 0) {
    return pathString.slice(1);
  }
  return pathString;
};

export const cleanRouteUrl = (pathString) => {
  return pathString.replace(/\/+/g, "/").replace(/\/$/, "") || "/";
};

export const navigate = (to, routeState = {}) => {
  //   window.location.hash = to;
  window.history.pushState(routeState, "", to);
  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
};
export const navigateByReplace = (to, routeState = {}) => {
  window.history.replaceState(routeState, "", to);
  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
};

export const matchParams = (routeComponentPath, currentPath) => {
  // if (routeComponentPath === currentPath) return true;

  const routeSegments = routeComponentPath.split("/").filter(Boolean);
  const currentSegments = currentPath.split("/").filter(Boolean);

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

export const matchRouteQuery = (route, queryStringSet) => {
  // if (routeComponentPath === currentPath) return true;

  const queryString = queryStringSet.slice(1, queryStringSet.length);

  let queryParams = {};

  if (queryString) {
    let params = new URLSearchParams(queryString);
    for (const [key, value] of params.entries()) {
      queryParams[key] = value;
    }
  } else {
    return null;
  }

  return { route, params: queryParams };
};

export const getUrlSegements = (url = "") => {
  if (typeof window != "undefined") {
    return {
      path: window.location.pathname || "",
      queryString: window.location.search || "",
      hash: window.location.hash || "",
      state: window.history.state || {},
    };
  } else {
    return {
      path: url,
      queryString: "",
      hash: "",
      state: "",
    };
  }
};

export const matchRoute = (routeComponentPath, currentPath) => {
  // if (routeComponentPath === currentPath) return true;

  const routeSegments = routeComponentPath.split("/").filter(Boolean);
  const currentSegments = currentPath.split("/").filter(Boolean);
  let colonIndex = -1;

  if (routeSegments.length === currentSegments.length) {
    if (routeComponentPath === currentPath) return true;
    colonIndex = routeComponentPath.indexOf(":");

    if (!colonIndex) return false;
    let sliceFromFirstParam = routeComponentPath.slice(0, colonIndex);

    if (currentPath.indexOf(sliceFromFirstParam) >= 0) return true;
    return false;
  }
  return false;
};
