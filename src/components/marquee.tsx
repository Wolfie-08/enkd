export function Marquee({ items }: { items: readonly string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee overflow-hidden border-y border-line py-3" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10 font-mono text-xs uppercase tracking-wider text-dim">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
