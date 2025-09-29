import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { successResponse } from '@/core/utils/responseHandler';
import * as gameService from './game.service';
import { PlayRoundBody } from './game.types';

export const playRoundController = (
  req: Request<{}, {}, PlayRoundBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { player_move } = req.body;
    const result = gameService.playGame(player_move);
    successResponse(res, StatusCodes.OK, 'Rodada concluída com sucesso.', result);
  } catch (error) {
    next(error);
  }
};
