import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { ROUTES } from '@/config';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-700/50 bg-panel/90 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href={ROUTES.HOME} className="font-semibold text-brand">
          AI SkillFit Platform
        </Link>
        <div className="flex items-center gap-3">
          <Link href={ROUTES.DASHBOARD} className="text-sm text-muted hover:text-text">
            Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
