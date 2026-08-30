"use client";

import { useState } from "react";

// Form de captura pasiva ("Sigue soñando"). En F0 el submit no hace nada;
// en F1 se conecta a Insforge. (Decisión UX #1 del memorando.)
export function SigueSonando() {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  return (
    <div className="max-w-xl pointer-events-auto text-center">
      <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-4">
        Sigue soñando
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal-800 leading-tight mb-4">
        ¿Aún no decides? Está bien.
      </h2>
      <p className="text-base text-charcoal-600 mb-8 max-w-md mx-auto">
        Cuéntanos qué sueñas. Cuando estés listo, te contactamos con ideas,
        no con presión. Sin spam, sin llamadas insistidas.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo"
          aria-label="Tu correo electrónico"
          autoComplete="email"
          required
          className="w-full px-4 py-3 rounded-full bg-cream-50 border border-cream-300 text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-brand-400"
        />
        <input
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="Tu WhatsApp (opcional, con lada)"
          aria-label="Tu WhatsApp (opcional, con lada)"
          autoComplete="tel"
          pattern="[0-9+\s\-()]{10,}"
          className="w-full px-4 py-3 rounded-full bg-cream-50 border border-cream-300 text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-brand-400"
        />
        <button
          type="submit"
          className="bg-brand-500 hover:bg-brand-600 text-cream-50 px-6 py-3 rounded-full font-medium transition-colors"
        >
          Quiero seguir soñando
        </button>
      </form>

      <p className="text-xs text-charcoal-500 mt-4 max-w-md mx-auto">
        Al enviar, aceptas que te contactemos por estos medios. No compartimos
        tu información con nadie.
      </p>
    </div>
  );
}
