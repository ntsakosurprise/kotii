import {
  cleanRouteUrl,
  matchParams,
  matchRoute,
  matchRouteQuery,
  //   navigate,
  //   generateRandomString,
  //   applyHead,
  //   resolveBestHead,
} from "../../utils/index.js";

export function matchRoutes({
  routes,
  currentPath,
  basePath,
  urlSegments,
  user,
}) {
  for (const route of routes) {
    const { path } = route?.props || route;
    const fullUrl = cleanRouteUrl(`${basePath}/${path}`);

    if (!matchRoute(fullUrl, currentPath)) continue;

    if (!user && route?.isPrivate) {
      return { redirect: "/login" };
    }

    const match = urlSegments?.queryString?.trim()
      ? matchRouteQuery(fullUrl, urlSegments.queryString)
      : matchParams(fullUrl, currentPath);

    return {
      route,
      fullUrl,
      params: match?.params ? (match?.route ? match : match.params) : null,
    };
  }

  return null;
}
