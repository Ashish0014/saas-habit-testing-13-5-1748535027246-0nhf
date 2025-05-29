import React from 'react';
import { FallbackProps } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-brand-600 sm:text-5xl">
            Oops!
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Something went wrong
              </h1>
              <p className="mt-1 text-base text-gray-500">
                {error.message || 'An unexpected error occurred'}
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <button
                onClick={resetErrorBoundary}
                className="inline-flex items-center rounded-md border border-transparent bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                Try again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                Reload page
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}