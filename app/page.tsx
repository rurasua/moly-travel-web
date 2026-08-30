import Link from "next/link";
import { HeroScrollytelling, type OverlaySlot } from "@/components/HeroScrollytelling";
import { Testimonios } from "@/components/Testimonios";
import { Filosofia } from "@/components/Filosofia";
import { Acompanamiento } from "@/components/Acompanamiento";
import { SigueSonando } from "@/components/SigueSonando";

// =============================================================================
// LANDING — Moly Travel
// =============================================================================
// Estructura: UNA sección scrollable (#story) de 500vh que contiene el
// scrollytelling completo (canvas + textos como overlays). El canvas está
// fijo, los textos aparecen/desaparecen según el progreso del scroll.
//
//   0-100vh   → Hero "¿Por qué no?" + CTAs
//   100-200vh  → Prueba Social (testimonios)
//   200-300vh  → Filosofía (4 principios)
//   300-400vh  → Acompañamiento 360° (antes/durante/después)
//   400-500vh  → Sigue Soñando (form) + CTA final
//
// Patrón LUCENT: https://white-goldfish-912062.hostingersite.com/index-scrim.html
// =============================================================================

// Definición de los overlays. Las ventanas (start/peakStart/peakEnd/end)
// están en progreso del scroll (0-1) a lo largo de los 500vh.
// Cada sección "vive" ~22% del scroll con un fade in/out corto.
const overlays: OverlaySlot[] = [
  {
    id: "hero",
    start: 0,
    peakStart: 0.04,
    peakEnd: 0.18,
    end: 0.22,
    align: "left",
    content: (
      <div className="max-w-2xl">
        <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-6">
          Agencia de viajes
        </p>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.95] text-charcoal-800">
          ¿Por qué no?
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-light italic text-charcoal-700">
          Tanto plan... ahora a disfrutar.
        </h2>
        <p className="mt-8 text-lg text-charcoal-600 max-w-md leading-relaxed">
          Devolvemos la calidez al acto de viajar. Diseña tu viaje a la
          medida con un agente que te conoce.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto">
          <Link
            href="/planificar"
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-cream-50 px-8 py-4 rounded-full text-base font-medium transition-colors"
          >
            Diseña tu viaje aquí
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href="https://wa.me/5210000000000"
            className="inline-flex items-center justify-center gap-2 border border-charcoal-800/30 hover:border-brand-400 text-charcoal-800 px-8 py-4 rounded-full text-base font-medium transition-colors"
          >
            Habla con un agente
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "testimonios",
    start: 0.18,
    peakStart: 0.24,
    peakEnd: 0.38,
    end: 0.42,
    align: "right",
    content: <Testimonios />,
  },
  {
    id: "filosofia",
    start: 0.38,
    peakStart: 0.44,
    peakEnd: 0.58,
    end: 0.62,
    align: "left",
    content: <Filosofia />,
  },
  {
    id: "acompanamiento",
    start: 0.58,
    peakStart: 0.64,
    peakEnd: 0.78,
    end: 0.82,
    align: "center",
    content: <Acompanamiento />,
  },
  {
    id: "sigue-sonando",
    start: 0.78,
    peakStart: 0.84,
    peakEnd: 0.92,
    end: 0.96,
    align: "center",
    content: <SigueSonando />,
  },
  {
    id: "cierre",
    start: 0.94,
    peakStart: 0.98,
    peakEnd: 1.0,
    end: 1.0,
    align: "center",
    content: (
      <div className="max-w-2xl text-center pointer-events-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-brand-300 font-semibold mb-4">
          ¿Listo para empezar?
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-cream-50 leading-tight mb-8">
          Tu viaje empieza aquí
        </h2>
        <Link
          href="/planificar"
          className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-cream-50 px-8 py-4 rounded-full text-base font-medium transition-colors"
        >
          Diseña tu viaje aquí
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-900 text-cream-50 font-sans">
      {/* ----------------------------------------------------------------------
          HEADER — logo + nav (queda fuera del scrollytelling)
          ---------------------------------------------------------------------- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between mix-blend-difference">
        <Link href="/" className="text-xl font-semibold tracking-tight text-cream-50">
          Moly Travel
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-cream-50/90">
          <a href="#story" className="hover:text-cream-50 transition-colors">
            Filosofía
          </a>
          <a href="#story" className="hover:text-cream-50 transition-colors">
            Cómo viajamos
          </a>
          <a href="#story" className="hover:text-cream-50 transition-colors">
            Contacto
          </a>
        </nav>
      </header>

      {/* ----------------------------------------------------------------------
          SCROLLYTELLING — 500vh con canvas + 6 overlays
          ---------------------------------------------------------------------- */}
      <section id="story" className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <HeroScrollytelling
            containerId="story"
            overlays={overlays}
          />
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          FOOTER (queda fuera del scrollytelling, al final de la página)
          ---------------------------------------------------------------------- */}
      <footer className="px-6 py-8 md:px-12 border-t border-charcoal-700 text-sm text-cream-50/60 flex flex-col md:flex-row justify-between gap-4">
        <span>© 2026 Moly Travel</span>
        <a
          href="https://portal.agencia.com"
          className="hover:text-cream-50 transition-colors"
        >
          ¿Ya viajas con nosotros? Ingresa a tu Portal Privado
        </a>
      </footer>
    </main>
  );
}
