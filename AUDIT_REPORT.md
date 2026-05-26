# Proyecto: bgustdown-landing
## Auditoría de Build y Despliegue

### Estado Actual
El proyecto utiliza Next.js 16 con `@opennextjs/cloudflare`. Los builds locales de Next.js funcionan correctamente, pero el despliegue en Cloudflare falla.

### Hallazgos
1. **Error de Cloudflare:** `ERROR Could not find compiled Open Next config, did you run the build command?`.
2. **Causa Raíz:** El comando de build configurado en Cloudflare es `bun run build`, el cual solo ejecuta `next build`. OpenNext requiere que se ejecute `opennextjs-cloudflare build` para generar los artefactos necesarios (`.open-next/`) que `wrangler` despliega.
3. **Scripts en `package.json`:**
   - `build`: `next build` (Insuficiente para Cloudflare)
   - `deploy`: `opennextjs-cloudflare build && opennextjs-cloudflare deploy`
4. **Verificación Local:** 
   - `bun run build` funciona.
   - `npx opennextjs-cloudflare build` funciona y genera `.open-next/worker.js`.

### Recomendaciones (Plan de Acción)
1. **Modificar `package.json`:** Actualizar el script `build` para que incluya la transformación de OpenNext.
2. **Configuración de Cloudflare:** Asegurarse de que el comando de build en el dashboard de Cloudflare sea `bun run build`.
3. **Wrangler Configuration:** `wrangler.jsonc` ya está correctamente apuntando a `.open-next/`.

### Archivos Auditados
- `package.json`
- `wrangler.jsonc`
- `open-next.config.ts`
- `next.config.ts`
