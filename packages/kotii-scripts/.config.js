export const domain = [{ name: "static", set: "public" }];
export const router = [
  {
    path: "/greeting/:name/:surname",
    alias: "hello",
    method: "GET",
    type: "public",
  },
];

export const server = "server";
export default {
  domain,
  router,
  server,
};
