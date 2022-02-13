import { Pool } from 'pg';
import dotenv from 'dotenv';
import { AWSUrl, AWSPassword } from '../settings';

dotenv.config();

export const pool = new Pool({
  user: 'cris',
  host: AWSUrl,
  database: 'masspops',
  password: AWSPassword,
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});
