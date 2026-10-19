export type Product = { id: number; name: string; sku: string; category: string; price: string | number; cost: string | number; stock: number; minStock: number; active: boolean };
export type SaleItem = { id: number; quantity: number; unitPrice: string | number; subtotal: string | number; product: Product };
export type Sale = { id: number; receiptCode: string; customer?: string; total: string | number; paymentType: string; createdAt: string; items: SaleItem[] };
export type Movement = { id: number; type: 'INCOME' | 'EXPENSE'; category: string; description: string; amount: string | number; createdAt: string };
export type DashboardData = { todayRevenue: number; todaySales: number; activeProducts: number; inventoryValue: number; lowStock: Product[]; recentSales: Sale[]; weeklySales: { date: string; label: string; total: number }[] };
export type Report = { revenue: number; salesCount: number; averageTicket: number; estimatedProfit: number; topProducts: { name: string; units: number; revenue: number }[] };

