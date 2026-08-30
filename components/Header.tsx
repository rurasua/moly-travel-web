"use client";

import Link from "next/link";
import { useState } from "react";

// =============================================================================
// HEADER — logo + nav
// =============================================================================
// Desktop: logo y nav centrados como grupo (justify-center con gap entre ellos).
// Mobile:  logo a la izquierda, botón hamburguesa a la derecha, panel
//          desplegable con los links al hacer click.
//
// Cada link hace smooth scroll al peak de su overlay correspondiente
// dentro del scrollytelling #story.
// =============================================================================

const NAV_ITEMS = [
  { label: "Diseña tu viaje", target: "inicio" },
  { label: "Cómo elegimos", target: "filosofia" },
  { label: "Acompañamiento", target: "acompanamiento" },
  { label: "Contacto", target: "contacto" },
];

// Map: id del overlay → progreso (0-1) del scroll en el #story.
// Cada valor apunta al PEAK de la sección对应的 para que aterrice
// directamente en la zona donde el overlay se ve al 100%.
const PROGRESS_MAP: Record<string, number> = {
  inicio: 0.10,
  testimonios: 0.30,
  filosofia: 0.50,
  sigueSonando: 0.66,
  acompanamiento: 0.82,
  contacto: 0.98,
};

const STORY_ID = "story";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll suave al peak del overlay cuyo id matchea `target`.
  // Si JS falla, el href="#xxx" sigue funcionando como anchor fallback.
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const container = document.getElementById(STORY_ID);
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const containerHeight = rect.height;
    const startY = window.scrollY + rect.top;
    const scrollable = containerHeight - window.innerHeight;
    const progress = PROGRESS_MAP[target] ?? 0;
    window.scrollTo({
      top: startY + progress * scrollable,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-20 md:py-6 bg-cream-50/70 backdrop-blur-md border-b border-charcoal-800/10">
      {/* ---------- DESKTOP (md+): logo + nav centrados como grupo ---------- */}
      <div className="hidden md:flex items-center justify-center gap-16">
        <Link href="/" aria-label="Moly Travel">
          <img
            src="/logo-moly.svg"
            alt="Moly Travel"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="flex gap-8 text-sm text-charcoal-800/80">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`#${item.target}`}
              onClick={(e) => handleNavClick(e, item.target)}
              className="hover:text-charcoal-800 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ---------- MOBILE: logo a la izquierda, hamburguesa a la derecha ---------- */}
      <div className="flex md:hidden items-center justify-between">
        <Link href="/" aria-label="Moly Travel">
          <img
            src="/logo-moly.svg"
            alt="Moly Travel"
            className="h-8 w-auto"
          />
        </Link>
        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="p-2 -mr-2 text-charcoal-800"
        >
          {isOpen ? (
            // X (close)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // ☰ (hamburger)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* ---------- MOBILE PANEL: aparece al hacer click en la hamburguesa ---------- */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream-100/95 backdrop-blur-sm border-t border-charcoal-800/10">
          <nav className="flex flex-col gap-1 px-6 py-6 text-base text-charcoal-800">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                className="py-3 hover:text-brand-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
