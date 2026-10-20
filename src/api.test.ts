import { afterEach, describe, expect, it, vi } from 'vitest';
import { api } from './api';

describe('api', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('envia JSON al backend y devuelve la respuesta', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ id: 7, name: 'Arroz' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    await expect(api('/products', {
      method: 'POST',
      body: JSON.stringify({ name: 'Arroz' }),
    })).resolves.toEqual({ id: 7, name: 'Arroz' });

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringMatching(/\/api\/products$/),
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({ 'Content-Type': 'application/json' }),
      }),
    );
  });

  it('propaga el mensaje de error entregado por el backend', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: () => Promise.resolve({ message: 'SKU duplicado' }),
    }));

    await expect(api('/products')).rejects.toThrow('SKU duplicado');
  });

  it('acepta respuestas exitosas sin contenido', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      status: 204,
    }));

    await expect(api('/products/7', { method: 'DELETE' })).resolves.toBeUndefined();
  });
});

