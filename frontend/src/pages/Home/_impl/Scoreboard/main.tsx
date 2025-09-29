import { useGameStore } from '@/domain/game';

/**
 * @component Scoreboard
 * @summary Displays the current score of the game session (wins, losses, ties).
 * @domain game
 * @type ui-component
 * @category display
 */
export const Scoreboard = () => {
  const score = useGameStore((state) => state.score);

  return (
    <div className="flex justify-center gap-4 md:gap-8 my-6 text-center">
      <div className="p-4 rounded-lg bg-gray-800 w-28 md:w-32">
        <p className="text-sm text-gray-400">Vitórias</p>
        <p className="text-3xl font-bold text-green-400">{score.wins}</p>
      </div>
      <div className="p-4 rounded-lg bg-gray-800 w-28 md:w-32">
        <p className="text-sm text-gray-400">Empates</p>
        <p className="text-3xl font-bold text-yellow-400">{score.ties}</p>
      </div>
      <div className="p-4 rounded-lg bg-gray-800 w-28 md:w-32">
        <p className="text-sm text-gray-400">Derrotas</p>
        <p className="text-3xl font-bold text-red-400">{score.losses}</p>
      </div>
    </div>
  );
};
