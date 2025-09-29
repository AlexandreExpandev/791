import { Router } from 'express';
import { playRoundController } from './game.controller';
import { validatePlayRound } from './game.validation';

const router = Router();

/**
 * @route POST /api/v1/game/play
 * @description Plays a round of Rock, Paper, Scissors.
 * @access Public
 */
router.post('/play', validatePlayRound, playRoundController);

export default router;
