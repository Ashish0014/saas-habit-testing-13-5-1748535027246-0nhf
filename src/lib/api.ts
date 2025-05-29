import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { z } from 'zod';

// API response schema
export const ApiResponseSchema = z.object({
  data: z.unknown(),
  message: z.string().optional(),
  status: z.enum(['success', 'error']),
});

export type ApiResponse<T> = z.infer<typeof ApiResponseSchema> & { data: T };

// API error type
export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const fallbackError: ApiError = {
      message: 'An unexpected error occurred. Please try again.',
      status: 500,
    };

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const data = error.response.data as any;
      fallbackError.message = data?.message || fallbackError.message;
      fallbackError.status = error.response.status;
      fallbackError.code = data?.code;

      if (error.response.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    } else if (error.request) {
      // The request was made but no response was received
      fallbackError.message = 'No response received from server. Please check your internet connection.';
      fallbackError.status = 0;
    }

    toast.error(fallbackError.message);
    return Promise.reject(fallbackError);
  }
);

export default api;