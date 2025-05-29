/// <reference types="react-scripts" />

interface Window {
  ENV?: {
    API_URL: string;
    NODE_ENV: 'development' | 'production' | 'test';
  };
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_API_URL: string;
    REACT_APP_VERSION?: string;
  }
}