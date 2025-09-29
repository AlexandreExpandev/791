import { FallbackProps } from 'react-error-boundary';
import { Button } from '@/core/components/Button';

/**
 * @component ErrorFallback
 * @summary A fallback UI component to display when a critical error occurs.
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div
      role="alert"
      className="min-h-screen flex flex-col items-center justify-center bg-red-900 text-white p-4"
    >
      <h2 className="text-2xl font-bold mb-4">Something went wrong:</h2>
      <pre className="bg-red-800 p-4 rounded-md mb-6 text-left w-full max-w-2xl overflow-auto">
        {error.message}
      </pre>
      <Button onClick={resetErrorBoundary} variant="outline">
        Try again
      </Button>
    </div>
  );
};
