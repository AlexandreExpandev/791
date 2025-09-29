import { Button } from '@/core/components/Button';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { useGameStore, GameResult } from '@/domain/game';
import { useGame } from '@/domain/game/hooks/useGame';
import { cn } from '@/core/utils/cn';

const getResultStatusStyle = (result: GameResult) => {
  switch (result) {
    case 'vitoria':
      return 'text-green-400';
    case 'derrota':
      return 'text-red-400';
    case 'empate':
      return 'text-yellow-400';
    default:
      return 'text-gray-400';
  }
};

/**
 * @component GameResultDisplay
 * @summary Displays the result of the round, including choices and outcome, based on the feature specification.
 * @domain game
 * @type ui-component
 * @category display
 */
export const GameResultDisplay = () => {
  const {
    result,
    isLoading,
    resultMessage,
    choicesDisplayText,
    error,
    playerChoice,
  } = useGameStore();
  const { startNewRound } = useGame();

  if (isLoading && playerChoice) {
    return (
      <div className="flex flex-col items-center justify-center my-8 min-h-[250px]">
        <LoadingSpinner />
        <p className="mt-4 text-gray-400">Aguardando jogada do computador...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-8 flex flex-col items-center gap-4 animate-fade-in text-center">
        <h2 className="text-2xl font-bold text-red-500">Ocorreu um erro</h2>
        <p className="text-gray-300">{error}</p>
        <Button onClick={startNewRound} variant="secondary" className="mt-4">
          Tentar Novamente
        </Button>
      </div>
    );
  }

  if (!result || !resultMessage || !choicesDisplayText) {
    return null;
  }

  return (
    <div className="my-8 flex flex-col items-center gap-6 animate-fade-in text-center">
      {/* Result Group (BR-005) */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-5xl font-extrabold tracking-tight">
          {resultMessage}
        </h2>
        <p className={cn('text-xl font-semibold capitalize', getResultStatusStyle(result))}>
          {result}
        </p>
      </div>

      {/* Choices Group (BR-005) */}
      <div className="p-4 bg-gray-800 rounded-lg w-full max-w-md">
        <p className="text-base text-gray-300">{choicesDisplayText}</p>
      </div>

      <div className="mt-4">
        <Button onClick={startNewRound}>Jogar Novamente</Button>
      </div>
    </div>
  );
};
