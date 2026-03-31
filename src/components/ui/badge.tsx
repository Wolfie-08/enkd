import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        info: "",
        destructive: "",
        mono: "",
        outline: "",
      },
      appearance: {
        solid: "",
        stroke: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        appearance: "solid",
        className: "border-primary/15 bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "default",
        appearance: "stroke",
        className: "border-primary/35 bg-transparent text-primary hover:bg-primary/5",
      },
      {
        variant: "primary",
        appearance: "solid",
        className: "border-primary/15 bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "primary",
        appearance: "stroke",
        className: "border-primary/35 bg-transparent text-primary hover:bg-primary/5",
      },
      {
        variant: "secondary",
        appearance: "solid",
        className: "border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
      },
      {
        variant: "secondary",
        appearance: "stroke",
        className: "border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800/60",
      },
      {
        variant: "success",
        appearance: "solid",
        className: "border-emerald-200 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-200 dark:hover:bg-emerald-500/20",
      },
      {
        variant: "success",
        appearance: "stroke",
        className: "border-emerald-300 bg-transparent text-emerald-800 hover:bg-emerald-100 dark:border-emerald-500/35 dark:text-emerald-200 dark:hover:bg-emerald-500/10",
      },
      {
        variant: "warning",
        appearance: "solid",
        className: "border-amber-200 bg-amber-100 text-amber-900 hover:bg-amber-200 dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-200 dark:hover:bg-amber-500/20",
      },
      {
        variant: "warning",
        appearance: "stroke",
        className: "border-amber-300 bg-transparent text-amber-900 hover:bg-amber-100 dark:border-amber-500/35 dark:text-amber-200 dark:hover:bg-amber-500/10",
      },
      {
        variant: "info",
        appearance: "solid",
        className: "border-sky-200 bg-sky-100 text-sky-900 hover:bg-sky-200 dark:border-sky-500/30 dark:bg-sky-500/15 dark:text-sky-200 dark:hover:bg-sky-500/20",
      },
      {
        variant: "info",
        appearance: "stroke",
        className: "border-sky-300 bg-transparent text-sky-900 hover:bg-sky-100 dark:border-sky-500/35 dark:text-sky-200 dark:hover:bg-sky-500/10",
      },
      {
        variant: "destructive",
        appearance: "solid",
        className: "border-red-200 bg-red-100 text-red-800 hover:bg-red-200 dark:border-red-500/30 dark:bg-red-500/15 dark:text-red-200 dark:hover:bg-red-500/20",
      },
      {
        variant: "destructive",
        appearance: "stroke",
        className: "border-red-300 bg-transparent text-red-800 hover:bg-red-100 dark:border-red-500/35 dark:text-red-200 dark:hover:bg-red-500/10",
      },
      {
        variant: "mono",
        appearance: "solid",
        className: "border-foreground/10 bg-foreground text-background hover:bg-foreground/90",
      },
      {
        variant: "mono",
        appearance: "stroke",
        className: "border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5",
      },
      {
        variant: "outline",
        appearance: "solid",
        className: "border-border bg-background text-foreground hover:bg-muted",
      },
      {
        variant: "outline",
        appearance: "stroke",
        className: "border-border bg-transparent text-foreground hover:bg-muted/60",
      },
    ],
    defaultVariants: {
      variant: "default",
      appearance: "solid",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, appearance, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, appearance }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
