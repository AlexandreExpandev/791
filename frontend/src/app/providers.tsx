import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { queryClient } from '@/core/lib/queryClient';
import { AppRouter } from './router';
import { ErrorFallback } from '@/core/components/ErrorFallback';

/**
 * @component AppProviders
 * @summary A component that composes all global providers for the application.
 * @type ui-component
 * @category core
 */
export const AppProviders = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
