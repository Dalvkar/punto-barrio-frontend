const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...options?.headers } });
  if (!response.ok) {
    const data = await response.json().catch(() => ({ message: 'No se pudo conectar con el servidor' }));
    throw new Error(data.message || 'Ocurrió un error');
  }
  if (response.status === 204) return undefined as T;
  return response.json();
}

