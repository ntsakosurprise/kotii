export default [
  {
    path: "/get-users",
    method: "POST",
    alias: "users",
    type: "public",
  },
  {
    path: "/loginUser",
    method: "POST",
    alias: "login",
    type: "public",
  },
  {
    path: "/get-portfolio",
    method: "GET",
    alias: "portfolio",
    type: "public",
  },
  {
    path: "/get-portfolio",
    method: "GET",
    alias: "portfolio",
    type: "public",
  },

  //   {
  //     path: "/test",
  //     method: "POST",
  //     type: "public",
  //   },
    {
      path: "/logoutUser",
      method: "POST",
      alias: "logout",
      type: "private",

    },
  //   {
  //     path: "/verifygc",
  //     alias: "gcaptcha",
  //     method: "POST",
  //     type: "public",
  //   },
];
