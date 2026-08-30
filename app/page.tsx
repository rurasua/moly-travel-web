import Link from "next/link";
import { Testimonios } from "@/components/Testimonios";
import { Filosofia } from "@/components/Filosofia";

// =============================================================================
// LANDING — Moly Travel
// =============================================================================
// Por ahora es un esqueleto con Header + Hero + secciones intermedias +
// Footer mínimo. Las secciones restantes (filosofía, acompañamiento, sigue
// soñando) se agregan en pasos siguientes, una por una.
// =============================================================================

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-100 text-charcoal-800 flex flex-col font-sans">
      {/* ----------------------------------------------------------------------
          HEADER — logo + nav
          ----------------------------------------------------------------------
          En mobile la nav se oculta (es muy temprano para tener un menú
          hamburguesa; lo agregamos cuando haya 3+ secciones). */}
      <header className="px-6 py-6 md:px-12 md:py-8 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-charcoal-800">
          Moly Travel
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-charcoal-700">
          <a href="#filosofia" className="hover:text-brand-600 transition-colors">
            Filosofía
          </a>
          <a href="#acompanamiento" className="hover:text-brand-600 transition-colors">
            Cómo viajamos
          </a>
          <a href="#contacto" className="hover:text-brand-600 transition-colors">
            Contacto
          </a>
        </nav>
      </header>

      {/* ----------------------------------------------------------------------
          HERO
          ----------------------------------------------------------------------
          Decisión UX #1 del memorando: un solo CTA al Planificador.
          El "Sigue Soñando" pasivo lo agregamos al final cuando esté el scroll
          story. Por ahora el CTA principal es el del Hero.
          El botón secundario es WhatsApp — sigue siendo la vía de conversión
          más fuerte en LATAM para un primer contacto. */}
      <section className="flex-1 flex items-center px-6 md:px-12 py-12 md:py-24">
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
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* El Link apunta a /planificar — esa ruta aún no existe, va a
                dar 404 por ahora. La construimos en el paso 9 de los
                próximos pasos. */}
            <Link
              href="/planificar"
              className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-cream-50 px-8 py-4 rounded-full text-base font-medium transition-colors"
            >
              Diseña tu viaje aquí
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="https://wa.me/5210000000000"
              className="inline-flex items-center justify-center gap-2 border border-cream-400 hover:border-brand-400 text-charcoal-800 px-8 py-4 rounded-full text-base font-medium transition-colors"
            >
              Habla con un agente
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          PRUEBA SOCIAL — testimonios (carrusel horizontal)
          ----------------------------------------------------------------------
          El componente vive en /components/Testimonios.tsx y lee el JSON
          desde /content/testimonios.json. Para editar/agregar un testimonio,
          solo tocas el JSON. */}
      <Testimonios />

      {/* ----------------------------------------------------------------------
          FILOSOFÍA DE SELECCIÓN — 4 principios (grid)
          ----------------------------------------------------------------------
          El componente vive en /components/Filosofia.tsx y lee el JSON
          desde /content/filosofia.json. Para editar/agregar un principio,
          solo tocas el JSON. */}
      <Filosofia />

      {/* ----------------------------------------------------------------------
          FOOTER MÍNIMO
          ----------------------------------------------------------------------
          Decisión UX #4: el acceso al Portal Privado vive en el footer como
          un enlace discreto. Lo dejamos ya colocado. */}
      <footer className="px-6 py-8 md:px-12 border-t border-cream-200 text-sm text-charcoal-500 flex flex-col md:flex-row justify-between gap-4">
        <span>© 2026 Moly Travel</span>
        <a
          href="https://portal.agencia.com"
          className="hover:text-brand-600 transition-colors"
        >
          ¿Ya viajas con nosotros? Ingresa a tu Portal Privado
        </a>
      </footer>
    </main>
  );
}
