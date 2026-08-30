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
// Estructura: UNA sección scrollable (#story) de 500vh que contiene el
// scrollytelling completo (canvas + textos como overlays). El canvas está
// fijo, los textos aparecen/desaparecen según el progreso del scroll.
//
//   0-100vh   → Hero "¿Por qué no?" + CTA único
//   100-200vh → Prueba Social (testimonios)
//   200-300vh → Filosofía (4 filtros de selección)
//   300-400vh → Sigue Soñando (form) + Acompañamiento 360° (antes/durante/después)
//   400-500vh → Contacto directo (WhatsApp + correo)
//
// Copy y orden basados en el documento F0 (06-index-html-estructura.md).
// Patrón visual LUCENT: https://white-goldfish-912062.hostingersite.com/index-scrim.html
// =============================================================================

// Definición de los overlays. Las ventanas (start/peakStart/peakEnd/end)
// están en progreso del scroll (0-1) a lo largo de los 500vh.
// Cada sección "vive" ~22% del scroll con un fade in/out corto.
const overlays: OverlaySlot[] = [
  // ---------------------------------------------------------------------------
  // HERO — "decisión memorando: CTA único + sin saturar"
  // ---------------------------------------------------------------------------
  {
    id: "inicio",
    start: 0,
    peakStart: 0.04,
    peakEnd: 0.18,
    end: 0.22,
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
  // ---------------------------------------------------------------------------
  // PRUEBA SOCIAL — "Familias y amigos que ya viajaron con nosotros"
  // ---------------------------------------------------------------------------
  {
    id: "testimonios",
    start: 0.18,
    peakStart: 0.24,
    peakEnd: 0.38,
    end: 0.42,
    align: "center",
    content: <Testimonios />,
  },
  // ---------------------------------------------------------------------------
  // FILOSOFÍA DE SELECCIÓN — "Cómo elegimos por ti" (4 filtros)
  // ---------------------------------------------------------------------------
  {
    id: "filosofia",
    start: 0.38,
    peakStart: 0.44,
    peakEnd: 0.58,
    end: 0.62,
    align: "center",
    content: <Filosofia />,
  },
  // ---------------------------------------------------------------------------
  // SIGUE SOÑANDO — captura pasiva (form email + WhatsApp)
  // ---------------------------------------------------------------------------
  {
    id: "sigue-sonando",
    start: 0.58,
    peakStart: 0.62,
    peakEnd: 0.72,
    end: 0.76,
    align: "center",
    content: <SigueSonando />,
  },
  // ---------------------------------------------------------------------------
  // ACOMPAÑAMIENTO 360° — Ilusión · Tranquilidad · Gratitud
  // ---------------------------------------------------------------------------
  {
    id: "acompanamiento",
    start: 0.74,
    peakStart: 0.78,
    peakEnd: 0.88,
    end: 0.92,
    align: "center",
    content: <Acompanamiento />,
  },
  // ---------------------------------------------------------------------------
  // CONTACTO DIRECTO — "¿Listo para empezar?" (WhatsApp + correo)
  // ---------------------------------------------------------------------------
  {
    id: "contacto",
    start: 0.92,
    peakStart: 0.96,
    peakEnd: 1.0,
    end: 1.0,
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
    <main className="min-h-screen bg-charcoal-900 text-cream-50 font-sans">
      {/* ----------------------------------------------------------------------
          HEADER — logo + nav (componente client con menú hamburguesa móvil)
          ---------------------------------------------------------------------- */}
      <Header />

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
          Decisión memorando: link discreto al Portal Privado
          ---------------------------------------------------------------------- */}
      <footer className="bg-charcoal-900 border-t border-charcoal-700/50">
        <div className="px-6 py-12 md:px-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-cream-50/70">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-cream-50 font-semibold tracking-tight">
              Moly Travel
            </span>
            <p className="mt-2 text-cream-50/60">
              Agencia de viajes personalizada.
            </p>
          </div>

          {/* Contacto */}
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

          {/* Sitio */}
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

          {/* Portal privado */}
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
