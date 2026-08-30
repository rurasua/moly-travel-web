"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// =============================================================================
// SCROLLYTELLING — versión con overlays (estilo LUCENT)
// =============================================================================
// Una sola sección scrollable (típicamente 400-600vh) contiene un canvas
// fijo. Sobre el canvas, varios "overlays" (textos) aparecen y desaparecen
// según el progreso del scroll. Cada overlay tiene una ventana de vida:
//
//   start    peakStart    peakEnd    end
//     |-----------|=========|---------|     opacidad = 1
//     |  fade in  |  peak   | fade out|
//   0           1          0
//
// El componente recibe un array de overlays y los anima vía DOM directo
// (sin re-render de React) para mantener 60fps.
// =============================================================================

const TOTAL_FRAMES = 48;
const FRAME_PATH = (i: number) =>
  `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;

export interface OverlaySlot {
  id: string;
  start: number;     // 0-1 progress donde empieza a aparecer
  peakStart: number; // progress donde llega a opacidad 1
  peakEnd: number;   // progress donde empieza a desaparecer
  end: number;       // progress donde se va
  align?: "left" | "right" | "center";
  content: ReactNode;
}

interface HeroScrollytellingProps {
  containerId: string;
  overlays?: OverlaySlot[];
  totalFrames?: number;
  framePath?: (i: number) => string;
  lerpFactor?: number;
}

// Función de opacidad (mismo cálculo que LUCENT)
function getStageOpacity(
  p: number,
  start: number,
  peakStart: number,
  peakEnd: number,
  end: number
): number {
  if (p < start || p > end) return 0;
  if (p >= peakStart && p <= peakEnd) return 1;
  if (p < peakStart) return (p - start) / (peakStart - start);
  return 1 - (p - peakEnd) / (end - peakEnd);
}

export function HeroScrollytelling({
  containerId,
  overlays = [],
  totalFrames = TOTAL_FRAMES,
  framePath = FRAME_PATH,
  lerpFactor = 0.2,
}: HeroScrollytellingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Preload
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = framePath(i);
      const onDone = () => {
        loaded++;
        if (loaded === totalFrames) setIsReady(true);
      };
      img.onload = onDone;
      img.onerror = onDone;
      images.push(img);
    }
    imagesRef.current = images;
  }, [totalFrames, framePath]);

  // Canvas + scroll + rAF
  useEffect(() => {
    if (!isReady) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = { currentFrame: 0, targetFrame: 0, rafId: 0 };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      drawFrame(state.currentFrame);
    };

    const drawFrame = (index: number) => {
      const idx = Math.max(0, Math.min(totalFrames - 1, Math.round(index)));
      const img = imagesRef.current[idx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const screenRatio = w / h;

      let drawW: number, drawH: number, offsetX: number, offsetY: number;
      if (screenRatio > imgRatio) {
        drawW = w;
        drawH = w / imgRatio;
        offsetX = 0;
        offsetY = (h - drawH) / 2;
      } else {
        drawW = h * imgRatio;
        drawH = h;
        offsetX = (w - drawW) / 2;
        offsetY = 0;
      }
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    };

    // Actualizar opacidad de cada overlay según el progreso
    const updateOverlays = (progress: number) => {
      overlays.forEach((overlay) => {
        const el = document.getElementById(`overlay-${overlay.id}`);
        if (el) {
          el.style.opacity = String(
            getStageOpacity(
              progress,
              overlay.start,
              overlay.peakStart,
              overlay.peakEnd,
              overlay.end
            )
          );
        }
      });
    };

    const onScroll = () => {
      const container = document.getElementById(containerId);
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height;
      const scrolled = -rect.top;
      const scrollable = containerHeight - window.innerHeight;
      const progress =
        scrollable > 0
          ? Math.max(0, Math.min(1, scrolled / scrollable))
          : 0;
      state.targetFrame = progress * (totalFrames - 1);
    };

    const tick = () => {
      const diff = state.targetFrame - state.currentFrame;
      if (Math.abs(diff) > 0.05) {
        state.currentFrame += diff * lerpFactor;
        drawFrame(state.currentFrame);
      } else if (Math.abs(diff) > 0.001) {
        state.currentFrame = state.targetFrame;
        drawFrame(state.currentFrame);
      }
      const progress = state.currentFrame / (totalFrames - 1);
      updateOverlays(progress);
      state.rafId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    tick();

    return () => {
      cancelAnimationFrame(state.rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isReady, totalFrames, containerId, lerpFactor, overlays]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-charcoal-800">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Scrim cream uniforme — aclara el video para que el texto de cualquier
          overlay lea bien, sin importar su posición (izq/centro/der) ni el
          momento del scroll. Antes era un gradiente horizontal y eso dejaba
          los overlays centrados sin protección. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cream-100/55 pointer-events-none"
      />

      {/* Overlays: cada uno con su id para que el rAF loop actualice opacidad */}
      {overlays.map((overlay) => (
        <div
          key={overlay.id}
          id={`overlay-${overlay.id}`}
          className="absolute inset-0 flex items-center pointer-events-none"
          style={{
            opacity: 0,
            justifyContent:
              overlay.align === "right"
                ? "flex-end"
                : overlay.align === "center"
                  ? "center"
                  : "flex-start",
            padding: "0 clamp(24px, 6vw, 96px)",
          }}
        >
          {overlay.content}
        </div>
      ))}

      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-sm tracking-[0.2em] uppercase text-cream-100">
            Preparando el viaje...
          </span>
        </div>
      )}
    </div>
  );
}
