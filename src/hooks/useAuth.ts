import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, UserSchema } from '../types';
import api from '../lib/api';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (data: Partial<User>) => Promise<void>;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          const response = await api.post('/auth/login', { email, password });
          const user = UserSchema.parse(response.data.user);
          localStorage.setItem('token', response.data.token);
          set({ user, isLoading: false });
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      logout: () => {
        localStorage.removeItem('token');
        set({ user: null });
      },

      updateUser: async (data) => {
        try {
          set({ isLoading: true, error: null });
          const response = await api.patch('/user/profile', data);
          const user = UserSchema.parse(response.data);
          set({ user, isLoading: false });
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    }
  )
);