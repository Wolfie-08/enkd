import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        glossy: "rounded-full bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 text-stone-950 shadow-[0_10px_24px_rgba(245,158,11,0.35),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(120,53,15,0.18)] border border-amber-100/60 hover:shadow-[0_16px_34px_rgba(245,158,11,0.45),0_0_28px_rgba(245,158,11,0.2),inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-1px_0_rgba(120,53,15,0.24)] hover:translate-y-[-1px] active:translate-y-[1px] active:shadow-[0_6px_14px_rgba(245,158,11,0.28),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(120,53,15,0.2)]",
        glossyOrange: "rounded-full bg-gradient-to-b from-amber-300 via-orange-400 to-orange-500 text-white shadow-[0_10px_24px_rgba(217,119,6,0.35),inset_0_1px_0_rgba(255,255,255,0.34),inset_0_-1px_0_rgba(124,45,18,0.2)] border border-orange-200/40 hover:shadow-[0_16px_34px_rgba(217,119,6,0.45),0_0_28px_rgba(217,119,6,0.22),inset_0_1px_0_rgba(255,255,255,0.44),inset_0_-1px_0_rgba(124,45,18,0.24)] hover:translate-y-[-1px] active:translate-y-[1px]",
        glossyDark: "rounded-full bg-gradient-to-b from-stone-500 via-stone-700 to-neutral-950 text-amber-50 shadow-[0_10px_24px_rgba(23,23,23,0.4),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.28)] border border-amber-100/15 hover:shadow-[0_16px_34px_rgba(0,0,0,0.5),0_0_24px_rgba(245,158,11,0.16),inset_0_1px_0_rgba(255,255,255,0.26),inset_0_-1px_0_rgba(0,0,0,0.34)] hover:translate-y-[-1px] active:translate-y-[1px]",
        glossyLight: "rounded-full bg-gradient-to-b from-white via-amber-50 to-stone-100 text-stone-800 shadow-[0_10px_24px_rgba(23,23,23,0.12),inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-1px_0_rgba(146,64,14,0.08)] border border-amber-200/55 hover:shadow-[0_16px_34px_rgba(23,23,23,0.18),0_0_24px_rgba(245,158,11,0.12),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(146,64,14,0.12)] hover:translate-y-[-1px] active:translate-y-[1px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
