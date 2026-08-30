interface Fase {
  number: string;
  titulo: string;
  description: string;
}

const fases: Fase[] = [
  {
    number: "Antes",
    titulo: "Ilusión",
    description:
      "Te ayudamos a decidir. Investigamos por ti, te presentamos opciones claras, y afinamos el itinerario hasta que digas: \"esto es lo que quiero\". Nada de paquetes cerrados ni de \"esto es lo que hay\".",
  },
  {
    number: "Durante",
    titulo: "Tranquilidad",
    description:
      "Todo está resuelto antes de que llegues. Y si algo cambia — vuelo retrasado, hotel con detalles, duda de última hora — nos escribes y lo resolvemos. Una sola línea de WhatsApp, una persona real al otro lado.",
  },
  {
    number: "Después",
    titulo: "Gratitud",
    description:
      "Volverás con recuerdos, no con pendientes. Y cuando estés planeando el próximo viaje, ya sabes a quién llamar. Eso es lo que más valoramos: clientes que vuelven y recomiendan.",
  },
];

// Solo el contenido. Se usa como overlay dentro del scrollytelling del Hero.
export function Acompanamiento() {
  return (
    <div className="max-w-4xl pointer-events-auto text-center">
      <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-4">
        Acompañamiento 360°
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal-800 leading-tight mb-4">
        Acompañamiento 360°
      </h2>
      <p className="text-base md:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed mb-10">
        Estamos contigo en cada etapa del viaje. No solo reservamos: te cuidamos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
        {fases.map((f) => (
          <div
            key={f.titulo}
            className="bg-cream-50/80 backdrop-blur-sm border border-cream-300 rounded-2xl p-6"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-brand-500 font-semibold mb-1">
              {f.number}
            </p>
            <h3 className="text-xl font-semibold text-charcoal-800 mb-3">
              {f.titulo}
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
