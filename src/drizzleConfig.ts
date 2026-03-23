import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./data/schemas/index.ts",
  out: "./data/migrations/",
  dialect: "sqlite",
  dbCredentials: {
    url: "../data.db",
  },
  verbose: true,
  strict: true,
});