import Link from 'next/link';
import { ROUTES } from '@/config';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI SkillFit Platform</h1>
      <p className="text-muted">
        Kannada-first multilingual AI interview, integrity checks, and workforce fitment decisions.
      </p>
      <div className="flex gap-3">
        <Link className="rounded bg-brand px-4 py-2 text-white" href={ROUTES.LOGIN}>
          Sign In
        </Link>
        <Link className="rounded border border-slate-600 px-4 py-2" href={ROUTES.INTERVIEW}>
          Candidate Interview
        </Link>
      </div>
    </div>
  );
}
