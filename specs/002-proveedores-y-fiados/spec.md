# Especificación frontend proveedores y fiados

La interfaz amplía los seis módulos existentes con:

- M07 Proveedores y compras: alta de proveedor, registro de compra y consulta de historial.
- M08 Clientes y fiados: alta de cliente, registro de fiado, visualización de deuda y abonos.

## Criterios

- Consumir exclusivamente los contratos `/suppliers`, `/purchases`, `/customers`, `/credits` y `/credits/:id/payments`.
- Mostrar montos en BOB y estados de carga, error y vacío.
- No aceptar carritos vacíos, cantidades/costos no positivos ni abonos no positivos.
- Refrescar datos después de una escritura exitosa y mostrar el mensaje seguro del backend ante error.
- Conservar navegación responsive y patrones visuales de los módulos existentes.

Historias canónicas: HU-07 a HU-10 en el repositorio backend y matriz local en `verification.md`.
