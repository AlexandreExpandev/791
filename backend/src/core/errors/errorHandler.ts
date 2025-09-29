import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { logger } from '@/core/logging/logger';
import { config } from '@/config';
import { ApiError } from './ApiError';

const sendErrorDev = (err: ApiError, res: Response) => {
  res.status(err.statusCode).json({
    status: 'error',
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: ApiError, res: Response) => {
  if (err.isOperational) {
    // Operational, trusted error: send message to client
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  } else {
    // Programming or other unknown error: don't leak error details
    logger.error('UNEXPECTED ERROR: ', err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let apiError: ApiError;

  if (err instanceof ApiError) {
    apiError = err;
  } else {
    // Convert non-ApiError to ApiError
    const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    const message = 'An internal server error occurred.';
    apiError = new ApiError(statusCode, message, false, err.stack);
  }

  logger.error(`[${req.method}] ${req.originalUrl} -> StatusCode: ${apiError.statusCode}, Message: ${apiError.message}`);

  if (config.nodeEnv === 'development') {
    sendErrorDev(apiError, res);
  } else {
    sendErrorProd(apiError, res);
  }
};
