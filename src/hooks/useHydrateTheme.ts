'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';

export const useHydrateTheme = () => {
  const setTheme = useThemeStore((s) => s.setTheme);

  useEffect(() => {
    const saved = localStorage.getItem('skillfit-theme') as 'light' | 'dark' | null;
    setTheme(saved ?? 'dark');
  }, [setTheme]);
};
