'use client';

import { useThemeStore } from '@/store/themeStore';

export default function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggleTheme);

  return (
    <button
      className="rounded-md border border-slate-600 px-3 py-1 text-sm"
      onClick={toggle}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
