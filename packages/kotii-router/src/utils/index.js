import suku from "suku";

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
export const applyHead = (head) => {
  console.log("SUKU OBJECT", suku);
  if (head?.title) suku.get_document_head().title = head.title;
};
export const resolveHead = (headers) => {
  console.log("THE HEADER IN RESOLVE", headers);
  const currentHead = headers[0] ?? {
    title: null,
    metas: [],
    links: {},
  };

  return currentHead;
};
export const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};
