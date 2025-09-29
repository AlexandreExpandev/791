import { Choice, GameResult, PlayRoundResult } from './game.types';

const CHOICES: Choice[] = ['pedra', 'papel', 'tesoura'];

const RULES: Record<Choice, Choice> = {
  pedra: 'tesoura', // Rock beats Scissors
  tesoura: 'papel', // Scissors beats Paper
  papel: 'pedra', // Paper beats Rock
};

/**
 * Generates a random move for the computer.
 * @returns {Choice} The computer's move.
 */
const generateComputerMove = (): Choice => {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
};

/**
 * Determines the winner of a round based on the player's and computer's moves.
 * @param {Choice} playerMove - The player's move.
 * @param {Choice} computerMove - The computer's move.
 * @returns {GameResult} The result of the round from the player's perspective.
 */
const determineWinner = (playerMove: Choice, computerMove: Choice): GameResult => {
  if (playerMove === computerMove) {
    return 'empate';
  }
  if (RULES[playerMove] === computerMove) {
    return 'vitoria';
  }
  return 'derrota';
};

/**
 * Generates a result message based on the game outcome.
 * @param {GameResult} result - The result of the game.
 * @returns {string} The corresponding message.
 */
const getResultMessage = (result: GameResult): string => {
  switch (result) {
    case 'vitoria':
      return 'Você ganhou!';
    case 'derrota':
      return 'Você perdeu!';
    case 'empate':
      return 'Empate!';
  }
};

/**
 * Executes a round of the game.
 * @param {Choice} playerMove - The move selected by the player.
 * @returns {PlayRoundResult} An object containing both moves, the result, and messages.
 */
export const playGame = (playerMove: Choice): PlayRoundResult => {
  const computerMove = generateComputerMove();
  const result = determineWinner(playerMove, computerMove);
  const resultMessage = getResultMessage(result);
  const choicesDisplayText = `Você escolheu: ${playerMove} | Computador escolheu: ${computerMove}`;

  return {
    playerMove,
    computerMove,
    result,
    resultMessage,
    choicesDisplayText,
  };
};
