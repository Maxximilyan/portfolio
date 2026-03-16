export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

