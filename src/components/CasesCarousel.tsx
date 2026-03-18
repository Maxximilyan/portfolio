"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function CasesCarousel({ slides }: { slides: React.ReactNode[] }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const wheelAcc = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const animTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const maxIndex = useMemo(() => Math.max(0, slides.length - 1), [slides.length]);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      const next = clamp(idx, 0, maxIndex);
      if (next === current) return;

      setIsAnimating(true);
      setCurrent(next);

      window.clearTimeout(animTimer.current);
      animTimer.current = window.setTimeout(() => setIsAnimating(false), 750);
    },
    [current, isAnimating, maxIndex],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (slides.length <= 1) return;

      const atStart = current === 0 && e.deltaY < 0;
      const atEnd = current === maxIndex && e.deltaY > 0;
      if (atStart || atEnd) return;

      e.preventDefault();
      wheelAcc.current += e.deltaY;

      window.clearTimeout(wheelTimer.current);
      wheelTimer.current = window.setTimeout(() => {
        if (Math.abs(wheelAcc.current) > 40) {
          goTo(current + (wheelAcc.current > 0 ? 1 : -1));
        }
        wheelAcc.current = 0;
      }, 50);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [current, goTo, maxIndex, slides.length]);

  useEffect(() => {
    return () => {
      window.clearTimeout(wheelTimer.current);
      window.clearTimeout(animTimer.current);
    };
  }, []);

  const progress = useMemo(() => {
    if (maxIndex === 0) return 100;
    return (current / maxIndex) * 100;
  }, [current, maxIndex]);

  return (
    <section ref={sectionRef} className="cases-carousel" aria-label="Cases carousel">
      <div className="cases-carousel-progress" style={{ width: `${progress}%` }} />

      <div
        className="cases-carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="cases-carousel-slide">
            {slide}
          </div>
        ))}
      </div>

      <div className="cases-carousel-dots" aria-label="Carousel navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === current ? "cases-carousel-dot is-active" : "cases-carousel-dot"}
            onClick={() => goTo(i)}
            aria-label={`Go to case ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </div>

      <button
        type="button"
        className="cases-carousel-arrow is-left"
        onClick={() => goTo(current - 1)}
        disabled={current === 0}
        aria-label="Previous case"
      >
        ←
      </button>
      <button
        type="button"
        className="cases-carousel-arrow is-right"
        onClick={() => goTo(current + 1)}
        disabled={current === maxIndex}
        aria-label="Next case"
      >
        →
      </button>
    </section>
  );
}
