import routes from "./includes/routes";
export default {
  router: routes,
  cluster: { workers: 1, spawn: false },
  server: "server",
};
