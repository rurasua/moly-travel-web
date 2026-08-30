import filosofia from "@/content/filosofia.json";

// =============================================================================
// FILOSOFÍA DE SELECCIÓN — los 4 principios que filtran cada viaje
// =============================================================================
// Contenido en /content/filosofia.json. Editas el JSON y la página se
// actualiza — sin tocar este componente.
//
// Layout: 1 columna en mobile, 2 en tablet, 4 en desktop. Los números
// grandes (01, 02, 03, 04) en teal funcionan como "firma visual" de la
// sección — le da ritmo y permite referenciar cada principio por número
// cuando los agentes hablen con clientes.
// =============================================================================

type Principio = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export function Filosofia() {
  return (
    // Fondo cream-100 (volvemos al tono claro) para alternar con la
    // sección anterior (Prueba Social) que está en cream-200.
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        {/* Encabezado */}
        <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-4">
          Nuestra filosofía
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal-800 max-w-2xl leading-tight mb-16">
          Cómo elegimos cada viaje
        </h2>

        {/* Grid de 4 principios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {(filosofia as Principio[]).map((p) => (
            <div key={p.id}>
              {/* Número grande teal — la firma visual de la sección */}
              <p className="text-4xl font-extrabold text-brand-500 mb-4 tracking-tight">
                {p.number}
              </p>
              <h3 className="text-xl font-semibold text-charcoal-800 mb-3">
                {p.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
