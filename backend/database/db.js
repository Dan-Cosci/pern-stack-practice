import { neon } from '@neondatabase/serverless'
import { PGDATABASE, PGHOST, PGPASSWORD, PGUSER } from '../config/config.js';

export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

export const InitDB = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("Connected to database");
  } catch (error) {
    console.log("ERROR connecting to DATABASE: "+error);
  }
}