import {
  FolderKanban,
  Home,
  Layers,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react"
import { useEffect, useState } from "react"
import { flushSync } from "react-dom"
import { Dock } from "./ui/dock-two"

type Theme = "dark" | "light"

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme")
    if (attr === "light" || attr === "dark") return attr
  }
  return "dark"
}

export default function BottomDock() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // Oculto apenas na 1ª seção; visível da 2ª em diante, incluindo
  // Projetos e o final da página. Usa a primeira seção do <main>
  // dinamicamente, então continua correto se a ordem mudar.
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const first = document.querySelector("main")?.firstElementChild
    if (!first) return
    const update = () => {
      const r = first.getBoundingClientRect()
      setVisible(r.bottom < window.innerHeight * 0.5)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark"

    const apply = () => {
      const el = document.documentElement
      el.classList.add("theme-switching")
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

    if (!document.startViewTransition || prefersReduced) {
      apply()
      return
    }

    // Revelação circular partindo do dock (parte inferior central)
    const transition = document.startViewTransition(apply)
    transition.ready
      .then(() => {
        const x = window.innerWidth / 2
        const y = window.innerHeight
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

  const scrollTo = (href: string) => () => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const items = [
    { icon: Home, label: "Início", onClick: scrollTo("#top") },
    { icon: User, label: "Sobre", onClick: scrollTo("#sobre") },
    { icon: Layers, label: "Skills", onClick: scrollTo("#skills") },
    { icon: FolderKanban, label: "Projetos", onClick: scrollTo("#projetos") },
    { icon: Mail, label: "Contato", onClick: scrollTo("#contato") },
    {
      icon: theme === "dark" ? Sun : Moon,
      label: theme === "dark" ? "Tema claro" : "Tema escuro",
      onClick: toggleTheme,
    },
  ]

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center pb-4 sm:pb-6">
      <div
        className={`transition-all duration-500 ease-out ${
          visible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <Dock items={items} />
      </div>
    </div>
  )
}
