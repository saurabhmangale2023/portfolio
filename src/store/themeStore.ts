'use client';

import { create } from 'zustand';

type Theme = 'light' | 'dark';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'dark',
  setTheme: (theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('skillfit-theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
    set({ theme });
  },
  toggleTheme: () => {
    const current = get().theme;
    get().setTheme(current === 'dark' ? 'light' : 'dark');
  }
}));
