import { Button, ButtonProps } from '@/core/components/Button';
import { cn } from '@/core/utils/cn';
import { Choice } from '../../types';

interface ChoiceButtonProps extends ButtonProps {
  choice: Choice;
  isSelected: boolean;
}

const choiceLabelMap: Record<Choice, string> = {
  pedra: 'Pedra',
  papel: 'Papel',
  tesoura: 'Tesoura',
};

/**
 * @component ChoiceButton
 * @summary A button for selecting a move in the game.
 * @domain game
 * @type ui-component
 * @category game
 */
export const ChoiceButton = ({ choice, isSelected, className, ...props }: ChoiceButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        'w-32 h-32 md:w-40 md:h-40 rounded-full text-xl font-bold uppercase tracking-wider border-4 transform transition-transform hover:scale-105',
        {
          'bg-blue-500 border-blue-300 text-white scale-110 shadow-lg': isSelected,
          'bg-gray-700 border-gray-500 hover:bg-gray-600': !isSelected,
        },
        className
      )}
      {...props}
    >
      {choiceLabelMap[choice]}
    </Button>
  );
};
