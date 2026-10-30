# Plan frontend proveedores y fiados

1. Extender `Page`, navegación e iconografía sin romper las seis vistas existentes.
2. Agregar tipos `Supplier`, `Purchase`, `Customer`, `Credit` y relaciones.
3. Construir `SuppliersPurchases` con formularios, selector de productos y listado.
4. Construir `CustomersCredits` con clientes, carrito de fiado, saldos y abonos.
5. Reutilizar `api`, `Field`, `Heading`, `Loading`, `Empty`, `ErrorBox` y formatos existentes.
6. Verificar navegación/carga con Testing Library y ejecutar build de producción.

La base de datos y las reglas monetarias pertenecen al backend; la interfaz solo presenta estimaciones y envía identificadores/cantidades/costos según contrato.
