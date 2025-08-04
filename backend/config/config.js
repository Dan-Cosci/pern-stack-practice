import dotenv from 'dotenv';

dotenv.config({ path : '.env' });

export const {
  PORT,
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
  ARCJET_KEY,
  ARCJET_ENV
} = process.env;