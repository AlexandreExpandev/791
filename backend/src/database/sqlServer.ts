import sql from 'mssql';
import { config } from '@/config';
import { logger } from '@/core/logging/logger';

const sqlConfig: sql.config = {
  user: config.database.user,
  password: config.database.password,
  server: config.database.server,
  port: config.database.port,
  database: config.database.database,
  pool: {
    max: config.database.pool.max,
    min: config.database.pool.min,
    idleTimeoutMillis: config.database.pool.idleTimeoutMillis,
  },
  options: {
    encrypt: config.database.options.encrypt,
    trustServerCertificate: config.database.options.trustServerCertificate,
  },
};

let pool: sql.ConnectionPool;

export const connectToDatabase = async (): Promise<void> => {
  try {
    if (!pool) {
      pool = await new sql.ConnectionPool(sqlConfig).connect();
      logger.info('SQL Server connection pool created.');

      pool.on('error', (err) => {
        logger.error('SQL Server pool error:', err);
      });
    }
  } catch (err) {
    logger.error('Database connection failed:', err);
    throw err;
  }
};

export const getDbPool = (): sql.ConnectionPool => {
  if (!pool) {
    throw new Error('Database not connected. Call connectToDatabase first.');
  }
  return pool;
};
