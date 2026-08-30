import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Bricolage Grotesque: variable font que va de 200 (light) a 800 (extra-bold).
// La elegimos como fuente base de Moly Travel porque sirve tanto para
// titulares (display) como para cuerpo (sans), y su tono es un poco más
// humano/curvo que la Geist por defecto — encaja con la promesa de "calidez".
// `display: "swap"` muestra una fallback mientras carga, así no se ve un
// hueco en blanco (evita el FOIT: Flash of Invisible Text).
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

// Metadata que aparece en la pestaña del navegador y en los resultados de Google.
// Lo dejamos listo en español desde el día 1; el dominio final lo agregamos cuando esté definido.
export const metadata: Metadata = {
  title: "Moly Travel — Viajes personalizados con calidez",
  description:
    "Devolvemos la calidez al acto de viajar. Diseña tu viaje a la medida con un agente que te conoce.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // `lang="es"` para que el navegador aplique reglas de tipografía en español
    // (ligaduras, separación de sílabas) y los lectores de pantalla pronuncien bien.
    <html
      lang="es"
      className={`${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
