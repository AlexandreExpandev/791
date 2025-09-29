import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { successResponse } from '@/core/utils/responseHandler';

export const checkHealth = (req: Request, res: Response) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  successResponse(res, StatusCodes.OK, 'Server is healthy', healthCheck);
};
