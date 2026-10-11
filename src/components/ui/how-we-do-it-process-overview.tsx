import React from "react"
import { ArrowUpRight, type LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"

// Interface for individual process card props
interface ProcessCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

// Reusable Process Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => (
  <div
    className={cn(
      "group relative w-full cursor-pointer rounded-lg border border-border bg-bg p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-lg",
      className,
    )}
  >
    {/* Decorative Line - Visible on larger screens */}
    <div className="absolute -left-[1px] top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-border transition-colors group-hover:bg-accent/60 md:block" />
    <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-border transition-colors group-hover:bg-accent/60 md:hidden" />

    {/* Icon Container */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface text-accent shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-bg">
      <Icon className="h-6 w-6" />
    </div>

    {/* Content */}
    <div className="flex flex-col">
      <h3 className="mb-1 font-display text-lg font-semibold text-text">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-muted">{description}</p>
    </div>
  </div>
)

// Interface for the main section props
interface ProcessSectionProps {
  subtitle: string
  title: string
  description: string
  buttonText: string
  items: ProcessCardProps[]
  id?: string
  buttonHref?: string
}

// Main Process Section Component
export const ProcessSection: React.FC<ProcessSectionProps> = ({
  subtitle,
  title,
  description,
  buttonText,
  items,
  id,
  buttonHref,
}) => {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-[2200px] scroll-mt-20 px-6 py-8 lg:px-12"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-surface py-16 md:rounded-[2rem] md:py-24">
        <div className="grid grid-cols-1 gap-12 px-4 md:grid-cols-3 md:gap-8 lg:px-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center text-center md:col-span-1 md:text-left">
          <span className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-accent">
            {subtitle}
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
            {title}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-text-muted">
            {description}
          </p>
          {buttonHref ? (
            <Button
              asChild
              size="lg"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <a href={buttonHref}>
                {buttonText}
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          ) : (
            <Button
              size="lg"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            >
              {buttonText}
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Right Content - Grid of Process Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:col-span-2">
          {items.map((item, index) => (
            <ProcessCard key={index} {...item} />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
