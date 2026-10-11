import type { ReactNode } from "react"

interface PrismaBackgroundProps {
  className?: string
  videoSrc?: string
  children?: ReactNode
}

const DEFAULT_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"

/**
 * Efeito de fundo extraído do PrismaHero: vídeo em loop + camada de ruído
 * + gradiente escuro para legibilidade. Renderiza `children` por cima.
 */
export function PrismaBackground({
  className = "",
  videoSrc = DEFAULT_VIDEO,
  children,
}: PrismaBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
      />

      {/* Camada de ruído */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

      {/* Gradiente para legibilidade do conteúdo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />

      {/* Conteúdo */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
