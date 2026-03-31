import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Badge, type BadgeProps } from "@/components/ui/badge";

type OfferBadge = {
  label: string;
  variant?: BadgeProps["variant"];
  appearance?: BadgeProps["appearance"];
};

export interface Offer {
  id: string | number;
  tag: string;
  tagVariant?: BadgeProps["variant"];
  tagAppearance?: BadgeProps["appearance"];
  tags?: OfferBadge[];
  title: string;
  description: string;
  brandName: string;
  promoCode?: string;
  href: string;
  accentClassName?: string;
}

interface OfferCardProps {
  offer: Offer;
}

const MotionLink = motion(Link);

const OfferCard = React.forwardRef<HTMLAnchorElement, OfferCardProps>(({ offer }, ref) => (
  <MotionLink
    ref={ref as never}
    to={offer.href}
    className="relative flex-shrink-0 w-[320px] min-h-[360px] overflow-hidden rounded-[30px] border border-border/70 bg-card/95 p-6 shadow-xl shadow-black/5 backdrop-blur-sm group sm:w-[340px]"
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{ perspective: "1000px" }}
  >
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_45%)]" />
    <div
      className={cn(
        "absolute -right-16 top-0 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-transform duration-500 group-hover:scale-110",
        offer.accentClassName ?? "from-primary to-orange-500"
      )}
    />

    <div className="relative flex h-full flex-col justify-between">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant={offer.tagVariant ?? "primary"}
            appearance={offer.tagAppearance ?? "solid"}
            className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
          >
            {offer.tag}
          </Badge>
          {offer.tags?.map((tag) => (
            <Badge
              key={`${offer.id}-${tag.label}`}
              variant={tag.variant ?? "outline"}
              appearance={tag.appearance ?? "stroke"}
              className="px-3 py-1 text-[10px] font-semibold"
            >
              {tag.label}
            </Badge>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <h3 className="max-w-[16ch] text-2xl font-semibold leading-tight tracking-tight text-card-foreground sm:text-[1.8rem]">
              {offer.title}
            </h3>
          </div>

          <p className="max-w-[28ch] text-sm leading-7 text-muted-foreground">
            {offer.description}
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-end justify-between gap-4 border-t border-border/80 pt-5">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-card-foreground">
            {offer.brandName}
          </p>
          {offer.promoCode && (
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {offer.promoCode}
            </p>
          )}
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  </MotionLink>
));
OfferCard.displayName = "OfferCard";

export interface OfferCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  offers: Offer[];
}

const OfferCarousel = React.forwardRef<HTMLDivElement, OfferCarouselProps>(
  ({ offers, className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const repeatedOffers = React.useMemo(
      () => (offers.length > 1 ? [...offers, ...offers] : offers),
      [offers]
    );

    const hasLoopingContent = offers.length > 1;

    React.useEffect(() => {
      const current = scrollContainerRef.current;
      if (!current || isHovered || !hasLoopingContent) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      let frameId = 0;
      let lastTime = performance.now();

      const autoScroll = (time: number) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const delta = time - lastTime;
        lastTime = time;

        const loopPoint = container.scrollWidth / 2;
        if (loopPoint > 0) {
          const nextScrollLeft = container.scrollLeft + delta * 0.03;
          container.scrollLeft = nextScrollLeft >= loopPoint ? nextScrollLeft - loopPoint : nextScrollLeft;
        }

        frameId = window.requestAnimationFrame(autoScroll);
      };

      frameId = window.requestAnimationFrame(autoScroll);

      return () => window.cancelAnimationFrame(frameId);
    }, [hasLoopingContent, isHovered]);

    const scroll = (direction: "left" | "right") => {
      if (!scrollContainerRef.current) return;

      const current = scrollContainerRef.current;
      const scrollAmount = current.clientWidth * 0.8;
      const loopPoint = current.scrollWidth / 2;

      if (hasLoopingContent) {
        const rightBoundary = loopPoint - current.clientWidth;

        if (direction === "left" && current.scrollLeft <= 8) {
          current.scrollLeft += loopPoint;
        }

        if (direction === "right" && current.scrollLeft >= rightBoundary - 8) {
          current.scrollLeft -= loopPoint;
        }
      }

      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    };

    return (
      <div
        ref={ref}
        className={cn("relative w-full group", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <button
          onClick={() => scroll("left")}
          disabled={!hasLoopingContent}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/90 disabled:opacity-0 disabled:pointer-events-none"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
        >
          {repeatedOffers.map((offer, index) => (
            <OfferCard key={`${offer.id}-${index}`} offer={offer} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!hasLoopingContent}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/90 disabled:opacity-0 disabled:pointer-events-none"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  }
);
OfferCarousel.displayName = "OfferCarousel";

export { OfferCarousel, OfferCard };
