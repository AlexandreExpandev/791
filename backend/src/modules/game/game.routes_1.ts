import { Router } from 'express';
import * as gameController from './game.controller';
import { validatePlayMove } from './game.validators';

const router = Router();

/**
 * @route GET /api/v1/game
 * @description Get the current state of the game.
 */
router.get('/', gameController.getState);

/**
 * @route POST /api/v1/game/start-round
 * @description Starts a new round, clearing previous choices but keeping the score.
 */
router.post('/start-round', gameController.startNewRound);

/**
 * @route POST /api/v1/game/reset
 * @description Resets the entire game session, including the score.
 */
router.post('/reset', gameController.resetGame);

/**
 * @route POST /api/v1/game/move
 * @description Submits a player's move for the current round.
 * @body { "choice": "rock" | "paper" | "scissors" }
 */
router.post('/move', validatePlayMove, gameController.playMove);

export default router;
