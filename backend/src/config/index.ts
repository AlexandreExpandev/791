import dotenv from 'dotenv';

dotenv.config();

const getConfig = () => {
  return {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    corsOrigin: process.env.CORS_ORIGIN || '*',
    jwt: {
      secret: process.env.JWT_SECRET || 'default-secret',
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    },
    database: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: process.env.DB_SERVER || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 1433,
      database: process.env.DB_DATABASE,
      pool: {
        min: process.env.DB_POOL_MIN ? parseInt(process.env.DB_POOL_MIN, 10) : 0,
        max: process.env.DB_POOL_MAX ? parseInt(process.env.DB_POOL_MAX, 10) : 10,
        idleTimeoutMillis: process.env.DB_POOL_IDLE_TIMEOUT ? parseInt(process.env.DB_POOL_IDLE_TIMEOUT, 10) : 30000,
      },
      options: {
        encrypt: process.env.NODE_ENV === 'production', // Use encryption for production
        trustServerCertificate: process.env.NODE_ENV !== 'production', // Change to true for local dev / self-signed certs
      },
    },
  };
};

export const config = getConfig();
