export const ROUTES = [
  {
    url: "/articles",
    proxy: {
      target: "http://articles:3000",
      changeOrigin: true,
      pathRewrite: {
        [`^/articles`]: "",
      },
    },
  },
];
