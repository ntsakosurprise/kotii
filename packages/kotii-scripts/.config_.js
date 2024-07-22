import routes from "/.kotii-land/routes.js";

export default {
  domain: [{ name: "static", set: "public" }],
  router: routes,
  register: "",
  // logger: {level: 'info'},
  cluster: { workers: 1, spawn: false },
  server: "server",
};
