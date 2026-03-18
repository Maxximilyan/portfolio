import { useEffect, useState } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function useCounterAnimation(
  target: number,
  duration = 1400,
  isActive = false,
  from = 0,
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let rafId: number | null = null;
    const start = performance.now();

    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setValue(Math.round(from + eased * (target - from)));
      if (progress < 1) rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isActive, target, duration, from]);

  return value;
}
