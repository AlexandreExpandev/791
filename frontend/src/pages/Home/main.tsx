import { Button } from '@/core/components/Button';
import { useGameStore } from '@/domain/game';
import { useGame } from '@/domain/game/hooks/useGame';
import { Scoreboard } from './_impl/Scoreboard';
import { ChoiceOptions } from './_impl/ChoiceOptions';
import { GameResultDisplay } from './_impl/GameResult';

/**
 * @page HomePage
 * @summary The main page for playing the Rock, Paper, Scissors game.
 * @domain game
 * @type page-component
 * @category game
 */
export const HomePage = () => {
  const { result, isLoading, playerChoice } = useGameStore((state) => ({
    result: state.result,
    isLoading: state.isLoading,
    playerChoice: state.playerChoice,
  }));
  const { resetSession } = useGame();

  const showResult = result !== null || (isLoading && playerChoice !== null);

  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Pedra, Papel e Tesoura
      </h1>
      <p className="text-lg text-gray-300 mb-2">
        {showResult ? 'Resultado da Rodada' : 'Pronto para o desafio? Escolha sua jogada!'}
      </p>

      <Scoreboard />

      <div className="min-h-[280px]">
        {showResult ? <GameResultDisplay /> : <ChoiceOptions />}
      </div>

      <div className="mt-8">
        <Button onClick={resetSession} variant="secondary" size="sm">
          Reiniciar Sessão
        </Button>
      </div>
    </div>
  );
};
