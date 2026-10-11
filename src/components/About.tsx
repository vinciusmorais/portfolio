import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const section = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const photo = useRef<HTMLDivElement>(null)
  const intro = useRef<HTMLDivElement>(null)
  const header = useRef<HTMLDivElement>(null)
  const block1 = useRef<HTMLDivElement>(null)
  const block2 = useRef<HTMLDivElement>(null)
  const hint = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=2200",
          pin: stage.current,
          scrub: 1,
          onUpdate: (self) => {
            if (hint.current) {
              hint.current.style.opacity = self.progress > 0.03 ? "0" : "1"
            }
          },
        },
      })

      // Foto: parallax vertical via background-position (sem transform,
      // para não vazar do clip arredondado nem criar scroll horizontal)
      tl.fromTo(
        photo.current,
        { backgroundPositionY: "38%" },
        { backgroundPositionY: "62%" },
        0,
      )

      // Título de abertura (centralizado) sai de cena
      tl.to(
        intro.current,
        { opacity: 0, y: -40, scale: 0.94, filter: "blur(12px)", duration: 0.25 },
        0,
      )

      // Cabeçalho compõe
      tl.fromTo(
        header.current,
        { opacity: 0, y: 30, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.2 },
        0.22,
      )

      // Bloco 1 — Trajetória
      tl.fromTo(
        block1.current,
        { opacity: 0, y: 48, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.22 },
        0.4,
      )

      // Bloco 2 — O que me move
      tl.fromTo(
        block2.current,
        { opacity: 0, y: 48, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.22 },
        0.64,
      )
    },
    { scope: section },
  )

  return (
    <section
      ref={section}
      id="sobre"
      className="mx-auto w-full max-w-[2200px] scroll-mt-20 px-6 py-8 lg:px-12"
    >
      <div
        ref={stage}
        className="relative h-[calc(100vh-4rem)] w-full overflow-hidden rounded-2xl md:rounded-[2rem]"
      >
        {/* Foto (troca clara/escura por tema via .about-bg) */}
        <div ref={photo} className="about-bg absolute inset-0 h-full w-full" />

        {/* Textura de ruído (consistência com a landing) */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.45] mix-blend-overlay" />

        {/* Scrims para legibilidade do texto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/5" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* Título de abertura */}
        <div
          ref={intro}
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center px-6 text-center"
        >
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Minha trajetória
          </h2>
        </div>

        {/* Conteúdo que compõe com o scroll */}
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-14">
          <div className="w-full">
            <div className="max-w-2xl">
              <div ref={header} className="opacity-0">
                <p className="font-mono text-sm tracking-wide text-accent">
                  01 — sobre mim
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
                  Minha trajetória
                </h2>
              </div>

              <div ref={block1} className="mt-8 opacity-0">
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-white/50">
                  Trajetória
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl lg:leading-relaxed">
                  Comecei construindo interfaces e integrações para e-commerce e
                  automação de marketing. Com o tempo, migrei para problemas mais
                  profundos — backends em microsserviços, sistemas em tempo real
                  e, mais recentemente, inteligência artificial aplicada a
                  produto.
                </p>
              </div>

              <div ref={block2} className="mt-7 opacity-0">
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-white/50">
                  O que me move
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white/75 sm:text-xl lg:text-2xl lg:leading-relaxed">
                  Entender o problema por inteiro antes da primeira linha de
                  código. Transito entre frontend, backend e infraestrutura
                  conforme a necessidade — e entrego algo que continue
                  funcionando muito depois do deploy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hint de scroll */}
        <div
          ref={hint}
          className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.3em] text-white/75 transition-opacity duration-300"
        >
          <span>SCROLL</span>
          <svg width="14" height="18" viewBox="0 0 14 18" className="animate-bounce">
            <path
              d="M7 1 L7 17 M2 12 L7 17 L12 12"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
