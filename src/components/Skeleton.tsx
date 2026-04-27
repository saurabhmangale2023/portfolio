export default function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-slate-700/40 ${className ?? 'h-4 w-full'}`} />;
}
