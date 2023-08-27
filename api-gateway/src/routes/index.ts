export const ROUTES = [
  {
    url: "/articles",
    proxy: {
      target: "http://localhost:3000/",
      changeOrigin: true,
      pathRewrite: {
        [`^/articles`]: "",
      },
    },
  },
];
