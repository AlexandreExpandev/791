import { useGameStore } from '@/domain/game/stores/gameStore';
import { CHOICES } from '@/domain/game/constants';
import { ChoiceButton } from '../ChoiceButton';

/**
 * @component ChoiceSelection
 * @summary Renders the set of choices for the player to select from.
 * @domain game
 * @type ui-component
 * @category game
 */
export const ChoiceSelection = () => {
  const { playRound, playerChoice, isLoading } = useGameStore((state) => ({
    playRound: state.playRound,
    playerChoice: state.playerChoice,
    isLoading: state.isLoading,
  }));

  const hasMadeChoice = playerChoice !== null;

  return (
    <div className="flex justify-center items-center gap-4 md:gap-8 my-8 min-h-[176px]">
      {CHOICES.map((choice) => (
        <ChoiceButton
          key={choice}
          choice={choice}
          isSelected={playerChoice === choice}
          disabled={hasMadeChoice || isLoading}
          onClick={() => playRound(choice)}
          aria-label={`Escolher ${choice}`}
        />
      ))}
    </div>
  );
};
