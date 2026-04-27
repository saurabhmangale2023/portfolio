'use client';

import { useEffect, useState } from 'react';
import Skeleton from '@/components/Skeleton';
import { apiRequest } from '@/services/api';

type CandidateCard = {
  session_id: string;
  candidate_name: string;
  district: string;
  overall_score: number;
  fitment_category: string;
  integrity_flags: string[];
};

export default function DashboardPage() {
  const [data, setData] = useState<CandidateCard[] | null>(null);

  useEffect(() => {
    apiRequest<CandidateCard[]>('/admin/candidates')
      .then(setData)
      .catch(() => setData([]));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card"><p className="text-sm text-muted">Total Candidates</p><p className="text-2xl font-bold">1,284</p></div>
        <div className="card"><p className="text-sm text-muted">Flagged Cases</p><p className="text-2xl font-bold">117</p></div>
        <div className="card"><p className="text-sm text-muted">Training Recommended</p><p className="text-2xl font-bold">436</p></div>
      </div>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Candidate Queue</h2>
        {!data && (
          <div className="space-y-2">
            <Skeleton className="h-16" />
            <Skeleton className="h-16" />
          </div>
        )}
        {data?.map((item) => (
          <article key={item.session_id} className="card flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-medium">{item.candidate_name}</p>
              <p className="text-sm text-muted">{item.district} · {item.fitment_category}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Score: {item.overall_score}</p>
              <p className="text-xs text-amber-400">Flags: {item.integrity_flags.join(', ') || 'None'}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
