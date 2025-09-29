import { Choice, PlayRoundPayload, PlayRoundResponse } from '../types';

/**
 * @service gameService
 * @summary Provides methods for game-related backend operations.
 * @domain game
 * @type api-service
 */
export const gameService = {
  /**
   * @function playRound
   * @summary Plays a round of the game by calling the backend API.
   * @param {Choice} playerMove - The player's selected move.
   * @returns {Promise<PlayRoundResponse>} The result of the round from the API.
   */
  async playRound(playerMove: Choice): Promise<PlayRoundResponse> {
    const payload: PlayRoundPayload = {
      player_move: playerMove,
    };

    const response = await fetch('/api/v1/game/play', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ocorreu um erro ao jogar a rodada.');
    }

    const responseData = await response.json();
    // The actual data is nested under a 'data' property by the backend's responseHandler
    return responseData.data;
  },
};
