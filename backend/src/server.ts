import http from 'http';
import app from './app';
import { config } from './config';
import { logger } from './core/logging/logger';
import { connectToDatabase } from './database/sqlServer';

const server = http.createServer(app);

const startServer = async () => {
  try {
    await connectToDatabase();
    logger.info('Database connection successful.');

    server.listen(config.port, () => {
      logger.info(`Server running on http://localhost:${config.port} in ${config.nodeEnv} mode`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

const gracefulShutdown = (signal: string) => {
  process.on(signal, async () => {
    logger.info(`${signal} received. Shutting down gracefully...`);
    server.close(() => {
      logger.info('HTTP server closed.');
      // Add any other cleanup here (e.g., close DB connection pool)
      process.exit(0);
    });
  });
};

gracefulShutdown('SIGINT');
gracefulShutdown('SIGTERM');

startServer();
