import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiError } from '@/core/errors/ApiError';
import { Choice } from './game.types';

const VALID_CHOICES: Choice[] = ['pedra', 'papel', 'tesoura'];

export const validatePlayRound = (req: Request, res: Response, next: NextFunction) => {
  const { player_move } = req.body;

  // Validate player_move
  if (player_move === undefined || player_move === null) {
    return next(
      new ApiError(StatusCodes.BAD_REQUEST, "O campo 'player_move' é obrigatório.")
    );
  }

  if (!VALID_CHOICES.includes(player_move)) {
    return next(
      new ApiError(
        StatusCodes.BAD_REQUEST,
        "A jogada informada não é válida. Use 'pedra', 'papel' ou 'tesoura'."
      )
    );
  }

  next();
};
