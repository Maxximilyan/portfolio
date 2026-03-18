"use client";

import { useEffect, useRef, useState } from "react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface Props {
  from: number;
  to: number;
  label: string;
  delay?: number;
  format?: "number" | "compact" | "none";
}

function formatValue(value: number, format: NonNullable<Props["format"]>) {
  if (format === "none") return String(value);
  if (format === "compact") {
    if (Math.abs(value) >= 1000) {
      const k = value / 1000;
      const fixed = Number.isInteger(k) ? String(k) : k.toFixed(1).replace(/\.0$/, "");
      return `${fixed}K`;
    }
    return String(value);
  }
  return new Intl.NumberFormat("en-US").format(value);
}

export function AnimatedRangeStat({ from, to, label, delay = 0, format = "number" }: Props) {
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

  const current = useCounterAnimation(to, 1400, isActive, from);

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-number">
        {formatValue(from, format)}→{formatValue(current, format)}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

