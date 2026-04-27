import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        panel: 'var(--color-panel)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        brand: 'var(--color-brand)'
      }
    }
  },
  plugins: []
};

export default config;
