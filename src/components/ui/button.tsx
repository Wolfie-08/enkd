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
        // Glossy 3D button variants
        glossy: "rounded-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 text-white shadow-[0_4px_15px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-blue-300/30 hover:shadow-[0_6px_25px_rgba(59,130,246,0.8),0_0_30px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:translate-y-[-1px] active:translate-y-[1px] active:shadow-[0_2px_10px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1)]",
        glossyOrange: "rounded-full bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 text-white shadow-[0_4px_15px_rgba(251,146,60,0.5),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-orange-300/30 hover:shadow-[0_6px_25px_rgba(251,146,60,0.8),0_0_30px_rgba(251,146,60,0.4),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:translate-y-[-1px] active:translate-y-[1px]",
        glossyDark: "rounded-full bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 text-white shadow-[0_4px_15px_rgba(71,85,105,0.5),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] border border-slate-500/30 hover:shadow-[0_6px_25px_rgba(71,85,105,0.8),0_0_30px_rgba(100,116,139,0.4),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:translate-y-[-1px] active:translate-y-[1px]",
        glossyLight: "rounded-full bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-700 shadow-[0_4px_15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.05)] border border-gray-200/50 hover:shadow-[0_6px_25px_rgba(0,0,0,0.2),0_0_30px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.05)] hover:translate-y-[-1px] active:translate-y-[1px]",
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
