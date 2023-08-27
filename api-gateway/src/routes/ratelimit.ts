import rateLimit from "express-rate-limit";
import express from "express";

const setupRateLimit = (app: express.Application, routes: any) => {
  routes.forEach((r) => {
    if (r.rateLimit) {
      app.use(r.url, rateLimit(r.rateLimit));
    }
  });
};

export { setupRateLimit };
