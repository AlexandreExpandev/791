import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiError } from '@/core/errors/ApiError';
import { Choice } from './game.types';

const VALID_CHOICES: Choice[] = ['rock', 'paper', 'scissors'];

export const validatePlayMove = (req: Request, res: Response, next: NextFunction) => {
  const { choice } = req.body;

  if (!choice) {
    return next(new ApiError(StatusCodes.BAD_REQUEST, 'Player choice is required.'));
  }

  if (!VALID_CHOICES.includes(choice)) {
    return next(
      new ApiError(
        StatusCodes.BAD_REQUEST,
        `Invalid choice. Must be one of: ${VALID_CHOICES.join(', ')}.`
      )
    );
  }

  req.body.choice = choice;

  next();
};
