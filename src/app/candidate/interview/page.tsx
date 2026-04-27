'use client';

import { useState } from 'react';
import { apiRequest } from '@/services/api';

const languages = ['Kannada', 'Hindi', 'English'] as const;

export default function InterviewPage() {
  const [language, setLanguage] = useState<(typeof languages)[number]>('Kannada');
  const [status, setStatus] = useState('Ready to start interview');

  const submitMock = async () => {
    setStatus('Submitting...');
    try {
      await apiRequest('/interview/complete', {
        method: 'POST',
        body: JSON.stringify({
          session_id: 'demo-session',
          language: language.toLowerCase(),
          transcript: 'Mock transcript from candidate response'
        })
      });
      setStatus('Interview submitted successfully. Under review.');
    } catch {
      setStatus('Submission failed. Please retry.');
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Candidate Interview</h1>
      <div className="card space-y-3">
        <label className="block text-sm">Preferred Language</label>
        <select
          className="w-full rounded border border-slate-600 bg-transparent p-2"
          value={language}
          onChange={(e) => setLanguage(e.target.value as (typeof languages)[number])}
        >
          {languages.map((l) => (
            <option key={l} value={l} className="bg-slate-900">
              {l}
            </option>
          ))}
        </select>
        <div className="rounded border border-dashed border-slate-600 p-6 text-center text-sm text-muted">
          Video/Audio recorder placeholder with API hooks.
        </div>
        <button className="rounded bg-brand px-4 py-2 text-white" onClick={submitMock}>
          Submit Response
        </button>
        <p className="text-sm text-muted">{status}</p>
      </div>
    </div>
  );
}
