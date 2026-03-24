import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: ["./src/types/schemas/db/*/*.ts"],
  out: "./src/db/migrations/",
  dialect: "sqlite",
  dbCredentials: {
    url: "../data.db",
  },
  verbose: true,
  strict: true,
});