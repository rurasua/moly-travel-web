import testimonios from "@/content/testimonios.json";

// =============================================================================
// PRUEBA SOCIAL — sección de testimonios
// =============================================================================
// Contenido vive en /content/testimonios.json. Para editar un testimonio
// solo abres ese archivo y cambias el texto — no tocas este componente.
// (Decisión UX #2: contenido dinámico en JSON, no en DB.)
//
// En F0 el carrusel es scroll horizontal nativo (sin JS, sin estado). El
// usuario hace scroll con el mouse o swipe en mobile. Es accesible por
// default (lectores de pantalla leen cada card en orden) y mucho más
// simple que un carrusel con auto-rotación — eso lo agregamos en F1 si
// hace falta.
// =============================================================================

// Tipo del JSON — TypeScript valida que el archivo cumpla la forma.
type Testimonio = {
  id: string;
  quote: string;
  author: string;
  trip: string;
};

export function Testimonios() {
  return (
    // Fondo cream-200 (un tono más oscuro que el cream-100 del Hero) para
    // dar ritmo visual a la página — alternar tonos entre secciones ayuda
    // a que cada bloque "respire" y el scroll se sienta como capítulos.
    <section className="bg-cream-200 py-20 md:py-28">
      {/* Encabezado de la sección */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto mb-12">
        <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-4">
          Prueba social
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal-800 max-w-2xl leading-tight">
          Lo que dicen quienes ya viajaron con nosotros
        </h2>
      </div>

      {/* Carrusel horizontal nativo.
          - `overflow-x-auto` permite scroll horizontal
          - `scrollbar-hide` (con las arbitrary variants) oculta la barra
            de scroll porque la pista visual es el "peek" del siguiente card
          - `snap-x snap-mandatory` + `snap-start` en cada card hace que el
            scroll se "enganche" al card más cercano al soltar */}
      <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <ul className="flex gap-6 px-6 md:px-12 snap-x snap-mandatory">
          {(testimonios as Testimonio[]).map((t) => (
            <li
              key={t.id}
              className="flex-shrink-0 w-[320px] md:w-[400px] snap-start bg-cream-50 border border-cream-300 rounded-2xl p-8 flex flex-col justify-between min-h-[280px]"
            >
              <blockquote className="text-lg text-charcoal-800 leading-relaxed">
                {t.quote}
              </blockquote>
              <div className="mt-6 pt-6 border-t border-cream-300">
                <p className="font-semibold text-charcoal-800">{t.author}</p>
                <p className="text-sm text-charcoal-500 mt-1">{t.trip}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
