import { API_BASE_URL } from '@/config';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function apiRequest<T>(path: string, init?: RequestInit, retries = 2): Promise<T> {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      const response = await fetch(`${API_BASE_URL}${path}`, {
        ...init,
        headers: {
          'Content-Type': 'application/json',
          ...(init?.headers ?? {})
        }
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      return (await response.json()) as T;
    } catch (error) {
      if (attempt === retries) throw error;
      await sleep(300 * (attempt + 1));
      attempt += 1;
    }
  }
  throw new Error('Unexpected API flow');
}
