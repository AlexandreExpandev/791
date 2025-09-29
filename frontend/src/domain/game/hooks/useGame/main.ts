import { useMutation } from '@tanstack/react-query';
import { gameService } from '../../services';
import { useGameStore } from '../../stores/gameStore';
import { Choice } from '../../types';

/**
 * @hook useGame
 * @summary Manages the game logic, including playing a round and handling state updates.
 * @domain game
 * @type domain-hook
 * @category game-logic
 */
export const useGame = () => {
  const { setLoading, setResult, startNewRound, resetSession, setError } = useGameStore(
    (state) => ({
      setLoading: state.setLoading,
      setResult: state.setResult,
      startNewRound: state.startNewRound,
      resetSession: state.resetSession,
      setError: state.setError,
    })
  );

  const { mutate: playRound } = useMutation({
    mutationFn: (playerChoice: Choice) => {
      return gameService.playRound(playerChoice);
    },
    onMutate: (playerChoice) => {
      setLoading(true);
      // Set player choice in store immediately for UI feedback
      useGameStore.setState({ playerChoice });
    },
    onSuccess: (data) => {
      setResult(data);
    },
    onError: (error) => {
      setError(error.message || 'Ocorreu um erro ao processar a jogada.');
    },
  });

  return {
    playRound,
    startNewRound,
    resetSession,
  };
};
