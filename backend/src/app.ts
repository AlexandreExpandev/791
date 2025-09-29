import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { StatusCodes } from 'http-status-codes';
import { config } from '@/config';
import { requestLogger } from '@/core/middleware/requestLogger';
import { globalErrorHandler } from '@/core/errors/errorHandler';
import { ApiError } from '@/core/errors/ApiError';
import apiRouter from '@/api/routes';

const app: Application = express();

// Core Middleware
app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logging
app.use(requestLogger);

// API Routes
app.use('/api/v1', apiRouter);

// 404 Handler for unmatched routes
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(StatusCodes.NOT_FOUND, 'The requested resource was not found.'));
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
