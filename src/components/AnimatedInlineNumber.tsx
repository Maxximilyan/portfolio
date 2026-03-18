"use client";

import { useEffect, useRef, useState } from "react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

type Format = "number" | "compact" | "none";

function formatValue(value: number, format: Format) {
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

export function AnimatedInlineNumber({
  to,
  from = 0,
  prefix = "",
  suffix = "",
  delay = 0,
  format = "number",
  className,
}: {
  to: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  format?: Format;
  className?: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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
    <span ref={ref} className={className}>
      {prefix}
      {formatValue(current, format)}
      {suffix}
    </span>
  );
}

