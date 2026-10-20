# Orquestación del frontend

Cuando el usuario solicite una funcionalidad de interfaz, usa el subagente `frontend` definido en `.claude/agents/frontend.md`. Añade o actualiza pruebas y ejecuta `npm test` y `npm run build` antes de entregar.

Si la funcionalidad cambia el contrato API o la persistencia, coordina con los subagentes `backend` y `database` desde el workspace completo. No inventes contratos ni incluyas archivos `.env` o secretos.
