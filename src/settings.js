import dotenv from 'dotenv';

dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;
export const AWSPassword = process.env.AWS_PASSWORD;
export const AWSUrl = process.env.AWS_URL;
