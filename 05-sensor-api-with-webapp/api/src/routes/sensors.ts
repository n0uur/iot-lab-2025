import { Hono } from "hono";
import drizzle from "../db/drizzle.js";
import { sensorReadings } from "../db/schema.js";
import { eq, and } from "drizzle-orm";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { broadcast } from "../ws.js";

const sensorsRouter = new Hono();

sensorsRouter.get(
  "/",
  zValidator(
    "query",
    z.object({
      name: z.string().optional(),
      type: z.string().optional(),
    })
  ),
  async (c) => {
    const { name, type } = c.req.valid("query");

    const filters = [];
    if (name) {
      filters.push(eq(sensorReadings.sensorName, name));
    }
    if (type) {
      filters.push(eq(sensorReadings.sensorType, type));
    }

    if (filters.length > 0) {
      const result = await drizzle
        .select()
        .from(sensorReadings)
        .where(and(...filters));
      return c.json(result);
    }

    const result = await drizzle.select().from(sensorReadings);
    return c.json(result);
  }
);

sensorsRouter.post(
  "/",
  zValidator(
    "json",
    z.object({
      sensorName: z.string().min(1),
      sensorType: z.string().min(1),
      value: z.number(),
      unit: z.string().optional(),
    })
  ),
  async (c) => {
    const data = c.req.valid("json");
    const result = await drizzle.insert(sensorReadings).values(data).returning();

    broadcast({ type: "NEW_READING", data: result[0] });
    return c.json({ success: true, data: result[0] }, 201);
  }
);

export default sensorsRouter;
