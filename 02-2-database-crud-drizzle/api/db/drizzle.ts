import { drizzle as drizzlePgsql } from "drizzle-orm/node-postgres";
import * as schema from "./schema.js";

const drizzle = drizzlePgsql({
  casing: "snake_case",
  connection: {
    connectionString: process.env.POSTGRES_URL,
  },
  schema,
});

export default drizzle;
