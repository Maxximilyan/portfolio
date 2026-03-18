"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function CasesCarousel({ slides }: { slides: React.ReactNode[] }) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(slides.length > 1);

  const maxIndex = useMemo(() => Math.max(0, slides.length - 1), [slides.length]);

  const updateStateFromScroll = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const pageWidth = viewport.clientWidth || 1;
    const rawIndex = Math.round(viewport.scrollLeft / pageWidth);
    const nextIndex = clamp(rawIndex, 0, maxIndex);

    setActiveIndex(nextIndex);
    setCanPrev(viewport.scrollLeft > 8);
    setCanNext(viewport.scrollLeft < viewport.scrollWidth - viewport.clientWidth - 8);
  }, [maxIndex]);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateStateFromScroll();
    });
  }, [updateStateFromScroll]);

  useEffect(() => {
    updateStateFromScroll();
    const onResize = () => updateStateFromScroll();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateStateFromScroll]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const targetIndex = clamp(index, 0, maxIndex);
      viewport.scrollTo({ left: targetIndex * viewport.clientWidth, behavior: "smooth" });
    },
    [maxIndex],
  );

  const onPrev = useCallback(() => scrollToIndex(activeIndex - 1), [activeIndex, scrollToIndex]);
  const onNext = useCallback(() => scrollToIndex(activeIndex + 1), [activeIndex, scrollToIndex]);

  return (
    <div
      className="cases-carousel"
      role="region"
      aria-label="Cases carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") onPrev();
        if (event.key === "ArrowRight") onNext();
      }}
    >
      <div className="carousel-controls" aria-hidden={slides.length <= 1}>
        <button
          className="carousel-btn"
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="Previous case"
        >
          ←
        </button>
        <div className="carousel-indicator" aria-label="Carousel position">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === activeIndex ? "carousel-dot is-active" : "carousel-dot"}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to case ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button
          className="carousel-btn"
          type="button"
          onClick={onNext}
          disabled={!canNext}
          aria-label="Next case"
        >
          →
        </button>
      </div>

      <div
        ref={viewportRef}
        className="carousel-viewport"
        onScroll={scheduleUpdate}
        tabIndex={0}
      >
        <div className="carousel-track">
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

