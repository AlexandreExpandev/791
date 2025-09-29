import { Request, Response, NextFunction } from 'express';
import { logger } from '@/core/logging/logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const { method, originalUrl, ip } = req;
  const userAgent = req.get('user-agent') || '';

  logger.http(`[${method}] ${originalUrl} - IP: ${ip} - User-Agent: ${userAgent}`);

  res.on('finish', () => {
    const { statusCode } = res;
    const message = `[${method}] ${originalUrl} -> ${statusCode}`;
    if (statusCode >= 400) {
      logger.warn(message);
    } else {
      logger.info(message);
    }
  });

  next();
};
