import { motion } from "framer-motion"
import { useId } from "react"
import type { IconType } from "react-icons"
import {
  SiDocker,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

type Node = {
  id: string
  Icon: IconType
  color: string
  x: number
  y: number
  path: string
  delay: number
}

// Centro em 282, 205 (viewBox 564 x 410) — linhas em cotovelo (curvas em L)
const NODES: Node[] = [
  {
    id: "react",
    Icon: SiReact,
    color: "#61DAFB",
    x: 110,
    y: 90,
    path: "M 270 205 V 105 Q 270 90 255 90 H 110",
    delay: 0.1,
  },
  {
    id: "node",
    Icon: SiNodedotjs,
    color: "#5FA04E",
    x: 360,
    y: 70,
    path: "M 294 205 V 85 Q 294 70 309 70 H 360",
    delay: 0.2,
  },
  {
    id: "ts",
    Icon: SiTypescript,
    color: "#3178C6",
    x: 160,
    y: 205,
    path: "M 250 205 H 160",
    delay: 0.3,
  },
  {
    id: "python",
    Icon: SiPython,
    color: "#3776AB",
    x: 480,
    y: 205,
    path: "M 314 205 H 480",
    delay: 0.4,
  },
  {
    id: "tailwind",
    Icon: SiTailwindcss,
    color: "#06B6D4",
    x: 282,
    y: 58,
    path: "M 282 192 V 58",
    delay: 0.45,
  },
  {
    id: "php",
    Icon: SiPhp,
    color: "#8892BF",
    x: 282,
    y: 360,
    path: "M 282 218 V 360",
    delay: 0.55,
  },
  {
    id: "postgres",
    Icon: SiPostgresql,
    color: "#4169E1",
    x: 110,
    y: 320,
    path: "M 270 205 V 305 Q 270 320 255 320 H 110",
    delay: 0.6,
  },
  {
    id: "docker",
    Icon: SiDocker,
    color: "#2496ED",
    x: 460,
    y: 340,
    path: "M 314 215 V 325 Q 314 340 329 340 H 460",
    delay: 0.7,
  },
]

function Beam({ d, id }: { d: string; id: string }) {
  return (
    <>
      <path
        d={d}
        className="text-border"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <motion.path
        d={d}
        stroke={`url(#${id})`}
        strokeWidth="2"
        fill="none"
        strokeDasharray="40 160"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2,
        }}
      />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </>
  )
}

export function StackNetwork() {
  const cid = useId()

  return (
    <div className="relative aspect-[564/410] w-full overflow-hidden rounded-2xl border border-border bg-surface">
      {/* Fundo pontilhado */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-text-muted) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Overlay de gradiente */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/60 via-transparent to-surface/60" />

      {/* Feixes */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-border"
        viewBox="0 0 564 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {NODES.map((n) => (
          <Beam key={n.id} d={n.path} id={`${cid}-${n.id}`} />
        ))}
      </svg>

      {/* Nó central */}
      <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-bg px-4 py-3">
        <span className="font-display text-xl font-bold tracking-tight text-text">
          VM<span className="text-accent">.</span>
        </span>
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-accent/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0, 0.45] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Ícones periféricos */}
      {NODES.map((n) => {
        const Icon = n.Icon
        return (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: n.delay }}
            style={{
              left: `${(n.x / 564) * 100}%`,
              top: `${(n.y / 410) * 100}%`,
            }}
            className="absolute z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-bg sm:h-14 sm:w-14"
          >
            <Icon size={24} color={n.color} />
          </motion.div>
        )
      })}
    </div>
  )
}

export default StackNetwork
