export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-accentSoft px-3 py-1 text-xs font-medium text-accent">
      {children}
    </span>
  );
}
