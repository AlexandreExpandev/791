import { useGameStore } from '@/domain/game/stores/gameStore';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';

const resultTextMap = {
  vitoria: 'Você Venceu!',
  derrota: 'Você Perdeu!',
  empate: 'Empate!',
};

const choiceTextMap = {
  pedra: 'Pedra',
  papel: 'Papel',
  tesoura: 'Tesoura',
};

/**
 * @component ResultDisplay
 * @summary Displays the result of the current or last played round.
 * @domain game
 * @type ui-component
 * @category game
 */
export const ResultDisplay = () => {
  const { result, isLoading, playerChoice, computerChoice, error } = useGameStore((state) => ({
    result: state.result,
    isLoading: state.isLoading,
    playerChoice: state.playerChoice,
    computerChoice: state.computerChoice,
    error: state.error,
  }));

  const containerClasses = 'text-center my-6 min-h-[176px] flex flex-col items-center justify-center';

  if (error) {
    return (
      <div className={containerClasses}>
        <p className="text-red-400 font-bold">Ocorreu um erro: {error}</p>
      </div>
    );
  }

  if (!playerChoice) {
    return (
      <div className={containerClasses}>
        <p className="text-gray-400">Faça sua jogada!</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={containerClasses}>
        <LoadingSpinner />
        <p className="mt-2 text-gray-400">O computador está pensando...</p>
      </div>
    );
  }

  if (!result || !computerChoice) {
    return <div className={containerClasses} />;
  }

  return (
    <div className={containerClasses}>
      <p className="text-lg">
        Você jogou <span className="font-bold text-blue-400">{choiceTextMap[playerChoice]}</span>.
        O computador jogou <span className="font-bold text-red-400">{choiceTextMap[computerChoice]}</span>.
      </p>
      <h2 className="text-4xl font-bold mt-2">
        {resultTextMap[result]}
      </h2>
    </div>
  );
};
