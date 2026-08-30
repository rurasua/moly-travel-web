type Principio = {
  id: string;
  number: string;
  title: string;
  description: string;
};

const principios: Principio[] = [
  {
    id: "humana",
    number: "01",
    title: "Selección humana",
    description: "Cada detalle pasa por una persona real, no un algoritmo.",
  },
  {
    id: "historia",
    number: "02",
    title: "Hoteles con historia",
    description: "Lugares con dueño local, arquitectura con alma.",
  },
  {
    id: "sin-prisa",
    number: "03",
    title: "Tiempo sin prisa",
    description: "Mañanas libres, siestas posibles, cenas largas.",
  },
  {
    id: "transparente",
    number: "04",
    title: "Presupuesto transparente",
    description: "Te decimos exactamente qué incluye cada peso.",
  },
];

// Solo el contenido (sin <section> con background). Se usa como overlay
// dentro del scrollytelling del Hero.
export function Filosofia() {
  return (
    <div className="max-w-2xl pointer-events-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-4">
        Nuestra filosofía
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal-800 max-w-2xl leading-tight mb-8">
        Cómo elegimos cada viaje
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {principios.map((p) => (
          <div key={p.id}>
            <p className="text-3xl font-extrabold text-brand-500 mb-2 tracking-tight">
              {p.number}
            </p>
            <h3 className="text-lg font-semibold text-charcoal-800 mb-1">
              {p.title}
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
