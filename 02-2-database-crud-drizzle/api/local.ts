import "dotenv/config";
import { Hono } from "hono";
import { cors } from "hono/cors";
import apiRouter from "./routes/api.js";
import { serve } from "@hono/node-server";

const app = new Hono().basePath("/api");

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.route("/v1", apiRouter);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
