import type { NextConfig } from "next";

// =============================================================================
// Configuración de Next.js para Moly Travel
// =============================================================================
// Decisiones de F0:
// - `output: 'export'` genera archivos estáticos (HTML+JS+CSS) en /out al
//   correr `next build`. Eso es lo que Hostinger Business puede servir.
//   Sin esto, Next.js intenta levantar un servidor Node, que el plan
//   Business NO soporta.
// - `images.unoptimized: true` desactiva el optimizador de imágenes
//   (necesita servidor).
// - NO usamos `basePath` (sirve desde raíz del subdominio agencia.com).
// - NO usamos `headers()`: en `output: 'export'` los headers HTTP no se
//   aplican, así que cualquier CSP tendría que ir via <meta> tag en el
//   HTML o configurarse en el servidor de Hostinger (lo vemos al deploy).
// =============================================================================

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
