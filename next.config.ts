import type { NextConfig } from "next";

// Configuración de Next.js para Moly Travel.
//
// Decisiones de F0:
// - `output: 'export'` genera archivos estáticos (HTML+JS+CSS) en /out al
//   correr `next build`. Eso es lo que Hostinger Business puede servir.
//   Sin esto, Next.js intenta levantar un servidor Node, que el plan
//   Business NO soporta.
// - `images.unoptimized: true` desactiva el optimizador de imágenes de
//   Next.js (que necesita un servidor). Las imágenes se sirven tal cual.
//   Más adelante podemos optimizar el source (WebP/AVIF) y este flag
//   se queda como está.
// - NO usamos `basePath` porque esta build se sirve desde la raíz del
//   subdominio `agencia.com`. El Planificador vive en `/planificar`
//   como ruta interna (decisión cerrada el 2026-08-29).
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
