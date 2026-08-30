import testimonios from "@/content/testimonios.json";

type Testimonio = {
  id: string;
  quote: string;
  author: string;
  trip: string;
};

// Solo el contenido (sin <section> con background). Se usa como overlay
// dentro del scrollytelling del Hero.
export function Testimonios() {
  return (
    <div className="max-w-2xl pointer-events-auto text-center">
      <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-4">
        Prueba social
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal-800 leading-tight mb-4">
        Familias y amigos que ya viajaron con nosotros
      </h2>
      <p className="text-base text-charcoal-600 mb-8 max-w-lg mx-auto">
        Su experiencia dice más que cualquier catálogo.
      </p>

      <div className="space-y-6 text-left">
        {testimonios.slice(0, 2).map((t: Testimonio) => (
          <div
            key={t.id}
            className="border-l-4 border-brand-400 pl-4"
          >
            <blockquote className="text-base md:text-lg text-charcoal-700 italic leading-relaxed mb-2">
              "{t.quote}"
            </blockquote>
            <p className="text-sm font-semibold text-charcoal-800">{t.author}</p>
            <p className="text-xs text-charcoal-500">{t.trip}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-charcoal-600 mt-6">
        ¿Quieres hablar con alguien que ya viajó con nosotros?{" "}
        <a href="#story" className="text-brand-600 hover:text-brand-700 underline">
          Escríbenos
        </a>{" "}
        y te conectamos.
      </p>
    </div>
  );
}
