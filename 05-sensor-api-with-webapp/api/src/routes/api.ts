import { Hono } from "hono";
import sensorsRouter from "./sensors.js";
import { bearerAuth } from "hono/bearer-auth";
import { env } from "hono/adapter";

declare global {
  interface BigInt {
    toJSON(): Number;
  }
}

BigInt.prototype.toJSON = function () {
  return Number(this);
};

const apiRouter = new Hono();

apiRouter.use(
  "*",
  bearerAuth({
    verifyToken: async (token, c) => {
      const { API_SECRET } = env<{ API_SECRET: string }>(c);
      return token === API_SECRET;
    },
  })
);

apiRouter.route("/sensors", sensorsRouter);

export default apiRouter;
