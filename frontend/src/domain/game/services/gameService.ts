import { api } from '@/core/lib/api';
import { Choice, PlayRoundPayload, PlayRoundResponse } from '../types';

/**
 * @service gameService
 * @summary Provides methods for game-related backend operations.
 * @domain game
 * @type api-service
 */
export const gameService = {
  /**
   * @method playRound
   * @summary Sends the player's move to the backend and gets the result.
   * @param {Choice} playerMove - The player's selected move.
   * @returns {Promise<PlayRoundResponse>} The result of the round.
   */
  playRound: async (playerMove: Choice): Promise<PlayRoundResponse> => {
    const payload: PlayRoundPayload = {
      player_move: playerMove,
    };
    return api.post<PlayRoundResponse, PlayRoundPayload>('/game/play', payload);
  },
};
