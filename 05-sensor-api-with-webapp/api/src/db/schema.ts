import { sql } from "drizzle-orm";
import * as t from "drizzle-orm/sqlite-core";

export const sensorReadings = t.sqliteTable("sensor_readings", {
  id: t.integer("id").primaryKey({
    autoIncrement: true,
  }),
  sensorName: t.text("sensor_name").notNull(),
  sensorType: t.text("sensor_type").notNull(),
  value: t.real("value").notNull(),
  unit: t.text("unit"),
  timestamp: t.integer("timestamp").default(sql`(cast(strftime('%s', 'now') as integer))`),
});
