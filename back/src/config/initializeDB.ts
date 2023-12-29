import { Pool } from "pg";
import * as dotenv from "dotenv";
dotenv.config();

export const client = new Pool({
  connectionString: process.env.DB_LINK,
});

export async function setupDatabase() {
  const isDev = process.env.NODE_ENV === "development";

  if (!isDev) {
    return console.log(
      "In production environment - skipping database creation."
    );
  }

  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS posts (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          content TEXT
        );
  
        CREATE TABLE IF NOT EXISTS comments (
          id SERIAL PRIMARY KEY,
          text TEXT NOT NULL,
          post_id INT REFERENCES posts(id)
        );
      `);
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}
