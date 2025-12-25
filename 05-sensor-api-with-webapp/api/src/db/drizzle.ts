import { drizzle as drizzleLibsql } from "drizzle-orm/libsql";
import * as schema from "./schema.js";

const drizzle = drizzleLibsql({
  connection: {
    url: process.env.DATABASE_URL as string,
  },
  casing: "snake_case",
  schema,
});

export default drizzle;
