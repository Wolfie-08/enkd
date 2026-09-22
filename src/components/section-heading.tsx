export function SectionHeading({ index, title, intro }: { index: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-xs uppercase tracking-wider text-dim">{index}</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold">{title}</h2>
      {intro && <p className="mt-4 max-w-xl text-muted-foreground">{intro}</p>}
    </div>
  );
}
