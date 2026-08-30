import filosofia from "@/content/filosofia.json";

type Filtro = {
  id: string;
  number: string;
  title: string;
  description: string;
};

// Solo el contenido (sin <section> con background). Se usa como overlay
// dentro del scrollytelling del Hero.
export function Filosofia() {
  return (
    <div className="max-w-4xl pointer-events-auto text-center">
      <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-4">
        Nuestra filosofía
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal-800 leading-tight mb-4">
        Cómo elegimos por ti
      </h2>
      <p className="text-base md:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed mb-10">
        Cuatro filtros que aplicamos en cada propuesta para que tu viaje sea
        exactamente lo que esperas. Sin sorpresas, sin letra chiquita.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        {filosofia.map((f: Filtro) => (
          <div
            key={f.id}
            className="bg-cream-50/80 backdrop-blur-sm border border-cream-300 rounded-2xl p-6"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-brand-500 font-semibold mb-1">
              {f.number}
            </p>
            <h3 className="text-xl font-semibold text-charcoal-800 mb-3">
              {f.title}
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
