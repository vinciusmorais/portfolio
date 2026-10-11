import { motion } from "framer-motion"
import { PrismaBackground } from "./ui/prisma-background"

const GROUPS = [
  {
    title: "Frontend",
    description:
      "Interfaces responsivas e performáticas, do protótipo ao deploy.",
    items: ["React", "React Router", "TypeScript", "TailwindCSS", "Vite"],
  },
  {
    title: "Backend",
    description:
      "APIs e serviços escaláveis, com foco em código limpo e manutenível.",
    items: ["Node.js", "NestJS", "Express", "Python", "PHP"],
  },
  {
    title: "Dados & Infra",
    description:
      "Persistência, cache e contêineres para rodar em produção com confiança.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Docker"],
  },
  {
    title: "Tempo real & Segurança",
    description:
      "Experiências ao vivo e autenticação forte quando o projeto pede.",
    items: ["Socket.io", "WebRTC", "WebAuthn / 2FA", "Capacitor", "Git"],
  },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-[2200px] px-6 pt-6 pb-16 lg:px-12 lg:pt-8"
    >
      <PrismaBackground className="rounded-2xl md:rounded-[2rem]">
        <div className="flex min-h-[calc(100vh-120px)] flex-col justify-between gap-16 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          {/* ---- Intro (ex-Hero) ---- */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-mono text-sm uppercase tracking-[0.3em] text-accent"
            >
              Desenvolvedor Fullstack
            </motion.p>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Vinicius Morais
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl lg:text-2xl lg:leading-relaxed"
            >
              Construo produtos de ponta a ponta — de interfaces responsivas a
              sistemas distribuídos — transformando problemas reais em software
              que funciona em produção.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contato"
                className="font-mono text-sm text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              >
                Fale comigo
              </a>
            </motion.div>
          </div>

          {/* ---- Tecnologias (ex-Skills) ---- */}
          <div id="skills" className="scroll-mt-24">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-sm tracking-wide text-accent">
                Com o que eu trabalho
              </p>
              <p className="max-w-md text-sm leading-relaxed text-white/60">
                Uma stack completa — do frontend à infraestrutura — escolhida
                conforme o problema que cada projeto exige.
              </p>
            </div>

            {/* Cards em layout escalonado (staggered) */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {GROUPS.map((g, i) => (
                <div
                  key={g.title}
                  className={`flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10 ${
                    i % 2 === 1 ? "lg:mt-10" : ""
                  }`}
                >
                  <p className="font-mono text-xs tracking-[0.2em] text-accent">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {g.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PrismaBackground>
    </section>
  )
}
