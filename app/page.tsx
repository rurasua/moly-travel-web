import Link from "next/link";
import { HeroScrollytelling, type OverlaySlot } from "@/components/HeroScrollytelling";
import { Header } from "@/components/Header";
import { Testimonios } from "@/components/Testimonios";
import { Filosofia } from "@/components/Filosofia";
import { Acompanamiento } from "@/components/Acompanamiento";
import { SigueSonando } from "@/components/SigueSonando";

// =============================================================================
// LANDING — Moly Travel
// =============================================================================
// Estructura nueva (scroll 100%):
//   - Canvas (HeroScrollytelling) está FIXED al viewport, siempre visible.
//   - Container #story tiene 600vh = 6 sections de 100vh cada una.
//   - Cada section es un bloque real en el flujo del documento, corre con
//     scroll natural. El rAF del canvas solo actualiza opacidad/transform
//     sutil para suavizar la transición.
//
//   0-100vh   → Hero "¿Por qué no?" + CTA único
//   100-200vh → Prueba Social (testimonios)
//   200-300vh → Filosofía (4 filtros de selección)
//   300-400vh → Sigue Soñando (form)
//   400-500vh → Acompañamiento 360°
//   500-600vh → Contacto directo (WhatsApp + correo)
//
// Copy basado en el doc F0 (06-index-html-estructura.md).
// =============================================================================

// Definición de los overlays. El container #story mide 600vh (6 sections de
// 100vh). Los peaks están centrados en cada section:
//   Section 1 (0-100vh)   peak ≈ 0.083  →  inicio
//   Section 2 (100-200vh) peak ≈ 0.250  →  testimonios
//   Section 3 (200-300vh) peak ≈ 0.417  →  filosofia
//   Section 4 (300-400vh) peak ≈ 0.583  →  sigue-sonando
//   Section 5 (400-500vh) peak ≈ 0.750  →  acompanamiento
//   Section 6 (500-600vh) peak ≈ 0.917  →  contacto
const overlays: OverlaySlot[] = [
  // -------------------------------------------------------------------------
  // 1. HERO
  // -------------------------------------------------------------------------
  {
    id: "inicio",
    start: 0.02,
    peakStart: 0.06,
    peakEnd: 0.10,
    end: 0.15,
    align: "center",
    content: (
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.95] text-charcoal-800">
          ¿Por qué no?
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-light italic text-charcoal-700">
          Tanto plan... ahora a disfrutar.
        </h2>
        <p className="mt-8 text-lg text-charcoal-600 max-w-md mx-auto leading-relaxed">
          Somos una agencia de viajes personalizada. Te acompañamos antes,
          durante y después de tu viaje, para que solo te preocupes por
          disfrutar.
        </p>
        <div className="mt-10 pointer-events-auto">
          <Link
            href="/planificar"
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-cream-50 px-8 py-4 rounded-full text-base font-medium transition-colors"
            data-event="click_cta_planificador"
          >
            Diseña tu viaje aquí
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    ),
  },
  // -------------------------------------------------------------------------
  // 2. PRUEBA SOCIAL
  // -------------------------------------------------------------------------
  {
    id: "testimonios",
    start: 0.19,
    peakStart: 0.23,
    peakEnd: 0.27,
    end: 0.31,
    align: "center",
    content: <Testimonios />,
  },
  // -------------------------------------------------------------------------
  // 3. FILOSOFÍA
  // -------------------------------------------------------------------------
  {
    id: "filosofia",
    start: 0.36,
    peakStart: 0.40,
    peakEnd: 0.44,
    end: 0.48,
    align: "center",
    content: <Filosofia />,
  },
  // -------------------------------------------------------------------------
  // 4. SIGUE SOÑANDO
  // -------------------------------------------------------------------------
  {
    id: "sigue-sonando",
    start: 0.53,
    peakStart: 0.57,
    peakEnd: 0.61,
    end: 0.64,
    align: "center",
    content: <SigueSonando />,
  },
  // -------------------------------------------------------------------------
  // 5. ACOMPAÑAMIENTO 360°
  // -------------------------------------------------------------------------
  {
    id: "acompanamiento",
    start: 0.70,
    peakStart: 0.73,
    peakEnd: 0.77,
    end: 0.80,
    align: "center",
    content: <Acompanamiento />,
  },
  // -------------------------------------------------------------------------
  // 6. CONTACTO DIRECTO
  // -------------------------------------------------------------------------
  {
    id: "contacto",
    start: 0.86,
    peakStart: 0.90,
    peakEnd: 0.94,
    end: 0.97,
    align: "center",
    content: (
      <div className="max-w-2xl text-center pointer-events-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-charcoal-800 leading-tight mb-4">
          ¿Listo para empezar?
        </h2>
        <p className="text-lg text-charcoal-600 max-w-md mx-auto leading-relaxed mb-8">
          Escríbenos por WhatsApp o correo. Una persona real te responde en
          menos de 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5210000000000?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20un%20viaje"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-cream-50 px-8 py-4 rounded-full text-base font-medium transition-colors"
            data-event="click_whatsapp_contacto"
          >
            Escríbenos por WhatsApp
          </a>
          <a
            href="mailto:hola@agencia.com"
            className="inline-flex items-center justify-center gap-2 border border-charcoal-800/30 hover:border-brand-400 text-charcoal-800 px-8 py-4 rounded-full text-base font-medium transition-colors"
          >
            O por correo
          </a>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="bg-charcoal-900 text-cream-50 font-sans">
      {/* ----------------------------------------------------------------------
          HEADER — logo + nav (componente client con menú hamburguesa móvil)
          ---------------------------------------------------------------------- */}
      <Header />

      {/* ----------------------------------------------------------------------
          CANVAS FIXED — siempre visible, ocupa todo el viewport. El rAF
          cambia el frame según el scroll del container #story.
          ---------------------------------------------------------------------- */}
      <div className="fixed inset-0 w-full h-full z-0">
        <HeroScrollytelling
          containerId="story"
          overlays={overlays}
        />
      </div>

      {/* ----------------------------------------------------------------------
          SECTIONS — 6 bloques de 100vh cada uno (600vh total). Corren con
          scroll natural, ENCIMA del canvas fixed. Sin fade: siempre visibles
          cuando están en el viewport. Contenido centrado vertical y horizontal.
          ---------------------------------------------------------------------- */}
      <section id="story" className="relative z-10">
        {overlays.map((overlay) => (
          <section
            key={overlay.id}
            id={`overlay-${overlay.id}`}
            className="h-screen flex items-center justify-center pointer-events-none"
            style={{
              paddingLeft: "clamp(24px, 6vw, 96px)",
              paddingRight: "clamp(24px, 6vw, 96px)",
              paddingBottom: "48px",
            }}
          >
            {overlay.content}
          </section>
        ))}
      </section>

      {/* ----------------------------------------------------------------------
          FOOTER — queda fuera del scrollytelling
          ---------------------------------------------------------------------- */}
      <footer className="bg-charcoal-900 border-t border-charcoal-700/50">
        <div className="px-6 py-12 md:px-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-cream-50/70">
          <div className="col-span-2 md:col-span-1">
            <span className="text-cream-50 font-semibold tracking-tight">
              Moly Travel
            </span>
            <p className="mt-2 text-cream-50/60">
              Agencia de viajes personalizada.
            </p>
          </div>
          <div>
            <h3 className="text-cream-50 font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hola@agencia.com"
                  className="hover:text-cream-50 transition-colors"
                >
                  hola@agencia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5210000000000"
                  className="hover:text-cream-50 transition-colors"
                >
                  +52 1 000 000 0000
                </a>
              </li>
              <li>México</li>
            </ul>
          </div>
          <div>
            <h3 className="text-cream-50 font-semibold mb-3">Sitio</h3>
            <ul className="space-y-2">
              <li>
                <a href="#story" className="hover:text-cream-50 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-cream-50 transition-colors">
                  Cómo elegimos
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-cream-50 transition-colors">
                  Acompañamiento
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-cream-50 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-cream-50 font-semibold mb-3">
              ¿Ya viajas con nosotros?
            </h3>
            <p>
              <a
                href="https://portal.agencia.com/login"
                className="text-brand-400 hover:text-brand-300 transition-colors"
              >
                Ingresa a tu Portal Privado →
              </a>
            </p>
            <p className="mt-2 text-xs text-cream-50/50">
              Aquí encuentras tu itinerario, vouchers y contacto directo
              durante el viaje.
            </p>
          </div>
        </div>
        <div className="px-6 md:px-20 py-6 border-t border-charcoal-700/50 text-xs text-cream-50/50 flex flex-col md:flex-row justify-between gap-3 max-w-6xl mx-auto">
          <span>© 2026 Moly Travel. Todos los derechos reservados.</span>
          <span>
            <a href="/privacidad" className="hover:text-cream-50 transition-colors">
              Aviso de privacidad
            </a>
            <span className="mx-2" aria-hidden="true">·</span>
            <a href="/terminos" className="hover:text-cream-50 transition-colors">
              Términos
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
