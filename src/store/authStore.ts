'use client';

import { create } from 'zustand';

export type UserRole = 'candidate' | 'reviewer' | 'admin';

type AuthState = {
  jwt: string | null;
  role: UserRole;
  setSession: (jwt: string, role: UserRole) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  jwt: null,
  role: 'candidate',
  setSession: (jwt, role) => set({ jwt, role }),
  clear: () => set({ jwt: null, role: 'candidate' })
}));
