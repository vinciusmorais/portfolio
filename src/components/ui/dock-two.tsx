import * as React from "react"
import { motion, type Variants } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

interface DockProps {
  className?: string
  items: {
    icon: LucideIcon
    label: string
    onClick?: () => void
  }[]
}

interface DockIconButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  className?: string
}

const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, onClick, className }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.15, y: -4 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        aria-label={label}
        className={cn(
          "group relative rounded-xl p-2.5",
          "transition-colors hover:bg-border/50",
          className,
        )}
      >
        <Icon className="h-5 w-5 text-text-muted transition-colors group-hover:text-text" />
        <span
          className={cn(
            "absolute -top-9 left-1/2 -translate-x-1/2",
            "rounded-md px-2 py-1 text-xs font-medium",
            "border border-border bg-surface text-text",
            "opacity-0 group-hover:opacity-100",
            "pointer-events-none whitespace-nowrap transition-opacity",
          )}
        >
          {label}
        </span>
      </motion.button>
    )
  },
)
DockIconButton.displayName = "DockIconButton"

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center", className)}
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          className={cn(
            "flex items-center gap-1 rounded-2xl p-2",
            "border border-border bg-surface/80 shadow-lg backdrop-blur-lg",
            "transition-shadow duration-300 hover:shadow-xl",
          )}
        >
          {items.map((item) => (
            <DockIconButton key={item.label} {...item} />
          ))}
        </motion.div>
      </div>
    )
  },
)
Dock.displayName = "Dock"

export { Dock }
