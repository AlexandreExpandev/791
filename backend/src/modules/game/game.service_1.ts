import { GameState, Choice, GameResult } from './game.types';

// In-memory store for the game state.
let gameState: GameState = {
  playerChoice: null,
  computerChoice: null,
  result: null,
  score: {
    player: 0,
    computer: 0,
    draws: 0,
  },
  roundState: 'playing',
};

const CHOICES: Choice[] = ['rock', 'paper', 'scissors'];
const RULES: Record<Choice, Choice> = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

const determineWinner = (playerChoice: Choice, computerChoice: Choice): GameResult => {
  if (playerChoice === computerChoice) return 'draw';
  if (RULES[playerChoice] === computerChoice) return 'win';
  return 'lose';
};

export const getGameState = (): GameState => {
  return { ...gameState };
};

export const startNewRound = (): GameState => {
  gameState.playerChoice = null;
  gameState.computerChoice = null;
  gameState.result = null;
  gameState.roundState = 'playing';
  return { ...gameState };
};

export const resetGame = (): GameState => {
  gameState = {
    playerChoice: null,
    computerChoice: null,
    result: null,
    score: {
      player: 0,
      computer: 0,
      draws: 0,
    },
    roundState: 'playing',
  };
  return { ...gameState };
};

export const playMove = (playerChoice: Choice): GameState => {
  if (gameState.roundState === 'finished') {
    throw new Error('Round has already finished. Start a new round to play again.');
  }

  const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  const result = determineWinner(playerChoice, computerChoice);

  gameState.playerChoice = playerChoice;
  gameState.computerChoice = computerChoice;
  gameState.result = result;
  gameState.roundState = 'finished';

  if (result === 'win') {
    gameState.score.player += 1;
  } else if (result === 'lose') {
    gameState.score.computer += 1;
  } else {
    gameState.score.draws += 1;
  }

  return { ...gameState };
};
