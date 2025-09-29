/**
 * @type Choice
 * @summary Represents the possible choices in the game. Matches backend.
 * @domain game
 */
export type Choice = 'pedra' | 'papel' | 'tesoura';

/**
 * @type GameResult
 * @summary Represents the possible outcomes of a game round. Matches backend.
 * @domain game
 */
export type GameResult = 'vitoria' | 'derrota' | 'empate' | null;

/**
 * @type Score
 * @summary Represents the game score, matching the backend structure.
 * @domain game
 */
export type Score = {
  wins: number;
  losses: number;
  ties: number;
};

/**
 * @interface GameState
 * @summary Defines the shape of the game's state.
 * @domain game
 */
export interface GameState {
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: GameResult;
  score: Score;
  isLoading: boolean;
  resultMessage: string | null;
  choicesDisplayText: string | null;
  error: string | null;
}

/**
 * @interface GameActions
 * @summary Defines the actions that can be performed on the game state.
 * @domain game
 */
export interface GameActions {
  setResult: (resultData: PlayRoundResponse) => void;
  startNewRound: () => void;
  resetSession: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

/**
 * @interface PlayRoundPayload
 * @summary Defines the shape of the request body for the play round API. Matches backend.
 * @domain game
 */
export interface PlayRoundPayload {
  player_move: Choice;
}

/**
 * @interface PlayRoundResponse
 * @summary Defines the shape of the response from the play round API. Matches backend.
 * @domain game
 */
export interface PlayRoundResponse {
  playerMove: Choice;
  computerMove: Choice;
  result: NonNullable<GameResult>;
  resultMessage: string;
  choicesDisplayText: string;
}
