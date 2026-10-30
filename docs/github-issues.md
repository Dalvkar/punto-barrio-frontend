# Issues propuestos para punto barrio frontend

Estos cuerpos están listos para crear issues en `Dalvkar/punto-barrio-frontend`.

## Issue 1 feat suppliers navigation

**Título:** `feat(suppliers): agregar gestión de proveedores y compras`

Agregar navegación, formulario de proveedor, formulario de compra y listado reciente consumiendo `/suppliers` y `/purchases`.

**Aceptación:** conserva el diseño responsive, muestra carga/error/vacío y actualiza los datos después de registrar.

## Issue 2 feat purchase cart

**Título:** `feat(purchases): validar detalle de compra antes de enviar`

Permitir seleccionar productos, cantidad y costo positivo, mostrar total estimado y enviar el contrato esperado por la API.

**Aceptación:** no envía compras vacías y presenta errores de negocio del backend.

## Issue 3 feat customers view

**Título:** `feat(customers): mostrar clientes y crédito disponible`

Crear alta y listado de clientes con límite, saldo y crédito disponible.

**Aceptación:** montos en BOB, formulario accesible y refresco tras crear.

## Issue 4 feat credits payments UI

**Título:** `feat(credits): registrar fiados y abonos desde la interfaz`

Crear flujo de fiado con carrito de productos y acción de abono para créditos pendientes.

**Aceptación:** muestra estado `PENDING/PARTIAL/PAID`, saldo y errores por stock, límite o abono excesivo.
