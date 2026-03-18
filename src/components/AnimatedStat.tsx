"use client";

import { useEffect, useRef, useState } from "react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface Props {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function AnimatedStat({ value, suffix = "", label, delay = 0 }: Props) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setIsActive(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const count = useCounterAnimation(value, 1400, isActive);

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

