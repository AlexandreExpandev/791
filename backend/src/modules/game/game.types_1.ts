export type Choice = 'rock' | 'paper' | 'scissors';

export type GameResult = 'win' | 'lose' | 'draw' | null;

export type Score = {
  player: number;
  computer: number;
  draws: number;
};

export interface GameState {
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: GameResult;
  score: Score;
  roundState: 'playing' | 'finished';
}
