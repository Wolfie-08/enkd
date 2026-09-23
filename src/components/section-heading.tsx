// Sheet-style heading: index and a hairline rule on top, title and intro below.
export function SectionHeading({ index, title, intro }: { index: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-wider">
        <span className="text-accent">{index}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <h2 className="mt-6 text-3xl md:text-5xl font-semibold text-balance">{title}</h2>
      {intro && <p className="mt-4 max-w-xl text-muted-foreground">{intro}</p>}
    </div>
  );
}
