'use client';

import { useEffect, useState } from 'react';

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);
  const showToast = (value: string) => setMessage(value);

  return { message, showToast, setMessage };
}

export default function Toast({ message, clear }: { message: string | null; clear: () => void }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(clear, 2800);
    return () => clearTimeout(timer);
  }, [message, clear]);

  if (!message) return null;
  return <div className="fixed bottom-4 right-4 rounded bg-brand px-4 py-2 text-white">{message}</div>;
}
