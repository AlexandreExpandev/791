import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as gameService from './game.service';
import { successResponse } from '@/core/utils/responseHandler';
import { ApiError } from '@/core/errors/ApiError';
import { Choice } from './game.types';

export const getState = (req: Request, res: Response, next: NextFunction) => {
  try {
    const gameState = gameService.getGameState();
    successResponse(res, StatusCodes.OK, 'Game state retrieved successfully.', gameState);
  } catch (error) {
    next(error);
  }
};

export const startNewRound = (req: Request, res: Response, next: NextFunction) => {
  try {
    const newGameState = gameService.startNewRound();
    successResponse(res, StatusCodes.OK, 'New round started.', newGameState);
  } catch (error) {
    next(error);
  }
};

export const resetGame = (req: Request, res: Response, next: NextFunction) => {
  try {
    const initialGameState = gameService.resetGame();
    successResponse(res, StatusCodes.OK, 'Game session has been reset.', initialGameState);
  } catch (error) {
    next(error);
  }
};

export const playMove = (req: Request, res: Response, next: NextFunction) => {
  try {
    const playerChoice = req.body.choice as Choice;
    const resultState = gameService.playMove(playerChoice);
    successResponse(res, StatusCodes.OK, 'Move played successfully.', resultState);
  } catch (error: any) {
    if (error.message.includes('Round has already finished')) {
      return next(new ApiError(StatusCodes.CONFLICT, error.message));
    }
    next(error);
  }
};
