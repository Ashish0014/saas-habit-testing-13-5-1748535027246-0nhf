import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/ErrorFallback';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

const customRender = (ui: React.ReactElement, options = {}) =>
  rtlRender(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };