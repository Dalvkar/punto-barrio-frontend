# Punto Barrio Frontend

Interfaz administrativa de Punto Barrio, creada con React 18, TypeScript, Tailwind CSS y Vite.

## Producción

- Sitio: https://punto-barrio-frontend.onrender.com
- API consumida: https://punto-barrio-backend.onrender.com/api
- Repositorio: https://github.com/Dalvkar/punto-barrio-frontend

## Configuración local

```bash
npm ci
copy .env.example .env
npm run dev
```

En Linux o macOS, usa `cp .env.example .env`. Configura `VITE_API_URL=http://localhost:4000/api`. No confirmes `.env`; el repositorio solo incluye `.env.example`.

## Pruebas y build

```bash
npm test
npm run test:watch
npm run build
```

Las 6 pruebas con Vitest, Testing Library y jsdom cubren el cliente HTTP, errores del backend, respuestas sin contenido, indicadores del dashboard, navegación y búsqueda, y fallos de carga.

`.github/workflows/frontend-ci.yml` valida el mensaje Conventional Commit y ejecuta `npm ci`, pruebas y build en cada push a `main` o `master` y en cada pull request. Protege `main` en GitHub y exige el check `Frontend CI` para impedir merges si falla.

## Hooks y subagente Codex

`.codex/agents/frontend.toml` define el subagente nativo encargado de componentes React, estilos, experiencia de usuario, consumo de la API y pruebas. `AGENTS.md` guía su uso y `.codex/hooks.json` protege secretos, bloquea comandos destructivos o commits inválidos y ejecuta pruebas después de cambios de código. Para cambios de contrato o persistencia debe coordinarse con los agentes `backend` y `database` del workspace completo.

## Render

- Tipo: Static Site
- Build: `npm ci && npm run build`
- Publish Directory: `dist`
- Variable: `VITE_API_URL=https://punto-barrio-backend.onrender.com/api`
