import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { flushSync } from "react-dom"

type Theme = "dark" | "light"

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme")
    if (attr === "light" || attr === "dark") return attr
  }
  return "dark"
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const next: Theme = theme === "dark" ? "light" : "dark"
    const x = e.clientX
    const y = e.clientY

    const apply = () => {
      const el = document.documentElement
      el.classList.add("theme-switching")
      // flushSync garante que o ícone já esteja atualizado no snapshot
      flushSync(() => setTheme(next))
      el.setAttribute("data-theme", next)
      try {
        localStorage.setItem("theme", next)
      } catch {
        /* ignore */
      }
      requestAnimationFrame(() =>
        requestAnimationFrame(() => el.classList.remove("theme-switching")),
      )
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    // Fallback: sem View Transitions ou com movimento reduzido → troca direta
    if (!document.startViewTransition || prefersReduced) {
      apply()
      return
    }

    const transition = document.startViewTransition(apply)
    transition.ready
      .then(() => {
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y),
        )
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 520,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        )
      })
      .catch(() => {
        /* ignore */
      })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      className="rounded-lg border border-border p-2.5 text-text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <HugeiconsIcon icon={theme === "dark" ? Sun03Icon : Moon02Icon} size={20} />
    </button>
  )
}
