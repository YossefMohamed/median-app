import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";

const setupProxies = (app: express.Application, routes: any) => {
  routes.forEach((r) => {
    app.use(r.url, createProxyMiddleware(r.proxy));
  });
};

export { setupProxies };
