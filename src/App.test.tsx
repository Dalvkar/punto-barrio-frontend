import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { api } from './api';

vi.mock('./api', () => ({ api: vi.fn() }));

const apiMock = vi.mocked(api);

const dashboard = {
  todayRevenue: 125,
  todayCashIncome: 125,
  todaySales: 3,
  activeProducts: 8,
  inventoryValue: 940,
  lowStock: [],
  recentSales: [],
  weeklySales: [{ date: '2026-10-20', label: 'mar', total: 125 }],
};

describe('App', () => {
  beforeEach(() => {
    apiMock.mockImplementation(async (path) => {
      if (path === '/dashboard') return dashboard;
      if (path.startsWith('/products')) return [];
      throw new Error(`Ruta no simulada: ${path}`);
    });
  });

  it('muestra los indicadores principales del dashboard', async () => {
    render(<App />);

    const incomeLabel = await screen.findByText('Ingresos de hoy');
    expect(incomeLabel).toBeInTheDocument();
    expect(screen.getByText('Ventas realizadas')).toBeInTheDocument();
    expect(incomeLabel.parentElement).toHaveTextContent(/125/);
  });

  it('muestra ingresos de caja aunque no existan ventas del dia', async () => {
    apiMock.mockResolvedValueOnce({
      ...dashboard,
      todayRevenue: 0,
      todayCashIncome: 75,
    });
    render(<App />);

    const incomeLabel = await screen.findByText('Ingresos de hoy');
    const metricValue = incomeLabel.parentElement?.querySelector('.metric-value');
    expect(metricValue).toHaveTextContent(/75/);
    expect(metricValue).not.toHaveTextContent(/0[.,]00/);
  });

  it('permite navegar al catalogo y buscar productos', async () => {
    render(<App />);
    await screen.findByText('Ingresos de hoy');

    fireEvent.click(screen.getByRole('button', { name: /Productos/i }));
    const search = screen.getByPlaceholderText(/Buscar por nombre/i);
    fireEvent.change(search, { target: { value: 'arroz integral' } });

    await waitFor(() => {
      expect(apiMock).toHaveBeenCalledWith('/products?search=arroz%20integral');
    });
    expect(screen.getByText('No se encontraron productos')).toBeInTheDocument();
  });

  it('informa cuando el dashboard no puede cargarse', async () => {
    apiMock.mockRejectedValueOnce(new Error('Servidor fuera de linea'));
    render(<App />);

    expect(await screen.findByText(/Servidor fuera de linea/)).toBeInTheDocument();
  });
});

