import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { setupProxies } from "./routes/proxy";
import { ROUTES } from "./routes";
import { setupRateLimit } from "./routes/ratelimit";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
setupRateLimit(app, ROUTES);
setupProxies(app, ROUTES);

const port = 8000;

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
  // swaggerDocs(app, Number(port));
});
