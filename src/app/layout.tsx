import './globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI SkillFit Platform',
  description: 'Intelligent Video-Based Workforce Fitment System for Bharat'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        <main className="mx-auto min-h-screen max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
