'use client';

import { signInWithGoogle } from '@/features/auth/firebaseClient';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/config';
import Toast, { useToast } from '@/components/Toast';

export default function LoginPage() {
  const setSession = useAuthStore((s) => s.setSession);
  const router = useRouter();
  const { message, showToast, setMessage } = useToast();

  const handleGoogle = async () => {
    try {
      const { token } = await signInWithGoogle();
      setSession(token, 'reviewer');
      showToast('Logged in successfully');
      router.push(ROUTES.DASHBOARD);
    } catch {
      showToast('Authentication failed. Please retry.');
    }
  };

  return (
    <section className="mx-auto max-w-md space-y-4 rounded-xl border border-slate-700/40 bg-panel p-6">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <p className="text-sm text-muted">Continue with Google to access candidate and admin workflows.</p>
      <button onClick={handleGoogle} className="w-full rounded bg-brand px-4 py-2 font-medium text-white">
        Continue with Google
      </button>
      <Toast message={message} clear={() => setMessage(null)} />
    </section>
  );
}
