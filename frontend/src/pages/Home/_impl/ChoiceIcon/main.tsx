import { Choice } from '@/domain/game';

interface ChoiceIconProps {
  choice: Choice;
  className?: string;
}

/**
 * @component ChoiceIcon
 * @summary Renders an icon corresponding to a game choice (rock, paper, scissors).
 * @domain game
 * @type ui-component
 * @category display
 */
export const ChoiceIcon = ({ choice, className = 'w-16 h-16' }: ChoiceIconProps) => {
  const icons: Record<Choice, React.ReactNode> = {
    pedra: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-label="pedra"
      >
        <path d="M12.378 2.25c-.355 0-.706.079-1.03.237-3.132 1.539-5.348 4.62-5.348 8.132 0 3.513 2.216 6.593 5.348 8.132.324.158.675.237 1.03.237 4.97 0 9-4.03 9-9s-4.03-9-9-9Z" />
      </svg>
    ),
    papel: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-label="papel"
      >
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-3v-1.5h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Z" />
      </svg>
    ),
    tesoura: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-label="tesoura"
      >
        <path
          fillRule="evenodd"
          d="M11.03 8.53a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0ZM8.53 11.03a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
        <path d="M6.75 15.75a.75.75 0 0 0 0-1.5h-.01a.75.75 0 0 0 0 1.5h.01ZM9 8.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75Z" />
        <path
          fillRule="evenodd"
          d="M12.97 3.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06ZM3.97 12.97a.75.75 0 0 1 0 1.06l4.5 4.5a.75.75 0 0 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 1.06-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return icons[choice] || null;
};
