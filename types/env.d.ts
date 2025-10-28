/**
 * Type definitions for environment variables
 */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_APP_URL: string;
    DATABASE_URL: string;
    JWT_SECRET: string;
    // Add more environment variables as needed
  }
}