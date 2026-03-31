import * as React from "react";
import { ExternalLink, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type HolographicCardProps = {
  type?: string;
  title?: string;
  description?: string;
  linkText?: string;
  href?: string;
  icon?: LucideIcon;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

type HolographicCardStyle = React.CSSProperties & {
  "--x"?: string;
  "--y"?: string;
  "--bg-x"?: string;
  "--bg-y"?: string;
};

const defaultStyle: HolographicCardStyle = {
  "--x": "50%",
  "--y": "50%",
  "--bg-x": "50%",
  "--bg-y": "50%",
};

const HolographicCard = ({
  type = "Featured",
  title = "Holographic Card",
  description = "Move your mouse over me!",
  linkText = "Open article",
  href = "#",
  icon: Icon = ExternalLink,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
}: HolographicCardProps) => {
  const cardRef = React.useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.setProperty("--bg-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--bg-y", `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    card.style.setProperty("--x", "50%");
    card.style.setProperty("--y", "50%");
    card.style.setProperty("--bg-x", "50%");
    card.style.setProperty("--bg-y", "50%");
  };

  return (
    <a
      ref={cardRef}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={defaultStyle}
      className={cn("component-card holographic-card block", className)}
    >
      <div className="holo-content">
        <div className="flex items-start justify-between gap-4">
          <Badge variant="warning" appearance="stroke" className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]">
            {type}
          </Badge>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-200/90">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="component-title text-2xl font-bold tracking-[-0.03em] text-white">
            {title}
          </h3>
          <p className="max-w-[28ch] text-sm leading-7 text-slate-300">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-8 text-sm font-medium text-amber-200">
          <span>{linkText}</span>
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
      <div className="holo-glow" />
    </a>
  );
};

export default HolographicCard;
