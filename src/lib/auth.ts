import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
// import { db } from "@/db"; // your drizzle instance

export const auth = betterAuth({
  // database: drizzleAdapter(db, {
  //     provider: "sqlite", // or "mysql", "sqlite"
  // }),
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 8,
    maxPasswordLength: 30,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30,
  },
  user: {
    additionalFields: {
      name: {
        type: "string",
        required: true,
      }
    }
  }
});