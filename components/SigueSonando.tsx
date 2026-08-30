"use client";

import { useState } from "react";

// Form visual de captura pasiva. En F0 solo se ve y se puede escribir;
// el submit se conecta a Insforge en F1. (Decisión UX #1 del memorando.)
export function SigueSonando() {
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-xl pointer-events-auto text-center">
      <p className="text-sm tracking-[0.2em] uppercase text-brand-600 font-semibold mb-4">
        Sigue soñando
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal-800 leading-tight mb-4">
        ¿Aún no sabes a dónde ir?
      </h2>
      <p className="text-base text-charcoal-600 mb-8">
        Déjanos tu correo y te enviamos ideas según la temporada, tu
        presupuesto y tu estilo. Sin spam, solo inspiración.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className="flex-1 px-4 py-3 rounded-full bg-cream-50 border border-cream-300 text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-brand-400"
          required
        />
        <button
          type="submit"
          className="bg-brand-500 hover:bg-brand-600 text-cream-50 px-6 py-3 rounded-full font-medium transition-colors"
        >
          Enviar
        </button>
      </form>

      <p className="text-xs text-charcoal-500 mt-4">
        Al enviar aceptas recibir ideas de viaje. Puedes darte de baja
        cuando quieras.
      </p>
    </div>
  );
}
