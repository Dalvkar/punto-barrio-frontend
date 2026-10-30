# Verificación frontend proveedores y fiados

| Requisito | Implementación | Evidencia |
| --- | --- | --- |
| M07 navegable | `nav`, `Page`, `SuppliersPurchases` | prueba de navegación/carga |
| Alta proveedor | formulario y `POST /suppliers` | build TypeScript y revisión de contrato |
| Registro compra | formulario y `POST /purchases` | build TypeScript y carga de productos |
| M08 navegable | `nav`, `Page`, `CustomersCredits` | prueba de navegación/carga |
| Alta cliente | formulario y `POST /customers` | build TypeScript y revisión de contrato |
| Fiado y abono | `POST /credits`, `POST /credits/:id/payments` | build TypeScript y estados visibles |

## Resultado

- `npm test`: 9 pruebas aprobadas.
- `npm run build`: aprobado.
- `git diff --check`: sin errores.

La integridad de stock, deuda y caja se verifica en el backend; el frontend no replica esas reglas como fuente de verdad.
