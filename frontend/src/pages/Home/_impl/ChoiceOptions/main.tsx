import { Button } from '@/core/components/Button';
import { CHOICES, Choice } from '@/domain/game';
import { useGame } from '@/domain/game/hooks/useGame';
import { useGameStore } from '@/domain/game';
import { ChoiceIcon } from '../ChoiceIcon';

/**
 * @component ChoiceOptions
 * @summary Renders the buttons for the player to make a choice.
 * @domain game
 * @type ui-component
 * @category form
 */
export const ChoiceOptions = () => {
  const { playRound } = useGame();
  const isLoading = useGameStore((state) => state.isLoading);

  const handlePlay = (choice: Choice) => {
    if (!isLoading) {
      playRound(choice);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 md:gap-8 my-8">
      {CHOICES.map((choice) => (
        <Button
          key={choice}
          variant="outline"
          size="icon"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col gap-2 capitalize text-lg hover:bg-gray-700 disabled:bg-gray-800 disabled:border-gray-600"
          onClick={() => handlePlay(choice)}
          disabled={isLoading}
          aria-label={`Jogar ${choice}`}
        >
          <ChoiceIcon choice={choice} className="w-10 h-10 md:w-12 md:h-12" />
          {choice}
        </Button>
      ))}
    </div>
  );
};
