import { useGameStore } from '@/domain/game/stores/gameStore';

/**
 * @component Scoreboard
 * @summary Displays the current game score.
 * @domain game
 * @type ui-component
 * @category game
 */
export const Scoreboard = () => {
  const score = useGameStore((state) => state.score);

  return (
    <div className="flex justify-center gap-4 md:gap-8 my-6 text-center">
      <div className="p-4 rounded-lg bg-gray-800 w-28 md:w-32">
        <p className="text-sm text-gray-400">Vitórias</p>
        <p className="text-3xl font-bold text-green-400">{score.player}</p>
      </div>
      <div className="p-4 rounded-lg bg-gray-800 w-28 md:w-32">
        <p className="text-sm text-gray-400">Empates</p>
        <p className="text-3xl font-bold text-yellow-400">{score.draws}</p>
      </div>
      <div className="p-4 rounded-lg bg-gray-800 w-28 md:w-32">
        <p className="text-sm text-gray-400">Derrotas</p>
        <p className="text-3xl font-bold text-red-400">{score.computer}</p>
      </div>
    </div>
  );
};
