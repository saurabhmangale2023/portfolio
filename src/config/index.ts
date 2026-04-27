export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8000';

export const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  INTERVIEW: '/candidate/interview'
} as const;

export const FEATURE_FLAGS = {
  FRAUD_REVIEW: process.env.NEXT_PUBLIC_FEATURE_FRAUD_REVIEW === 'true',
  ANALYTICS: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === 'true'
} as const;
