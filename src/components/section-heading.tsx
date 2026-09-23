// Title and optional intro, stacked. `index` is an optional plain-word eyebrow.
export function SectionHeading({ index, title, intro }: { index?: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 md:mb-12">
      {index && <p className="mb-4 text-sm font-medium text-ink">{index}</p>}
      <h2 className="text-3xl md:text-5xl font-semibold text-balance">{title}</h2>
      {intro && <p className="mt-4 max-w-xl text-muted-foreground">{intro}</p>}
    </div>
  );
}
