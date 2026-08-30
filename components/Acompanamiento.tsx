interface Fase {
  number: string;
  title: string;
  description: string;
}

const fases: Fase[] = [
  {
    number: "Antes",
    title: "Definimos juntos",
    description:
      "Te ayudamos a elegir destino, fechas y tipo de viaje según tu presupuesto y estilo. Armamos un itinerario a tu medida, sin paquetes genéricos.",
  },
  {
    number: "Durante",
    title: "Acompañamos de cerca",
    description:
      "Tienes un agente disponible 24/7 por WhatsApp para cualquier imprevisto: reservas, cambios, recomendaciones locales — todo en español.",
  },
  {
    number: "Después",
    title: "Cerramos el viaje",
    description:
      "Cuando vuelves, te enviamos un cuadernillo con tus rutas, fotos y video resumen del viaje. Para que el recuerdo dure para siempre.",
  },
];

// Solo el contenido. Se usa como overlay dentro del scrollytelling del Hero.
export function Acompanamiento() {
  return (
    <div className="max-w-4xl pointer-events-auto text-center">
      <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-4">
        Acompañamiento 360°
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal-800 leading-tight mb-10">
        No desaparecemos al firmar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {fases.map((f, i) => (
          <div
            key={f.title}
            className="bg-cream-50/80 backdrop-blur-sm border border-cream-300 rounded-2xl p-6"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-brand-500 font-semibold mb-2">
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
