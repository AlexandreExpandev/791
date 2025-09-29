/**
 * Represents the possible choices in the game.
 */
export type Choice = 'pedra' | 'papel' | 'tesoura';

/**
 * Represents the possible outcomes of a game round from the player's perspective.
 */
export type GameResult = 'vitoria' | 'derrota' | 'empate';

/**
 * Defines the structure of the request body for playing a round.
 */
export interface PlayRoundBody {
  player_move: Choice;
}

/**
 * Defines the structure of the data returned after a round is played.
 */
export interface PlayRoundResult {
  playerMove: Choice;
  computerMove: Choice;
  result: GameResult;
  resultMessage: string;
  choicesDisplayText: string;
}
