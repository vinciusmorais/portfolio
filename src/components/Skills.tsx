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

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-[2200px] scroll-mt-20 px-6 py-28 lg:px-12 lg:py-36"
    >
      <PrismaBackground className="rounded-2xl md:rounded-[2rem]">
        <div className="px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
          <p className="font-mono text-sm tracking-wide text-accent">
            02 — tecnologias
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-bold text-white sm:text-5xl">
            Com o que eu trabalho
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            Uma stack completa — do frontend à infraestrutura — escolhida
            conforme o problema que cada projeto exige.
          </p>

          {/* Cards em layout escalonado (staggered) sobre o fundo */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GROUPS.map((g, i) => (
              <div
                key={g.title}
                className={`flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10 ${
                  i % 2 === 1 ? "lg:mt-12" : ""
                }`}
              >
                <p className="font-mono text-xs tracking-[0.2em] text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {g.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {g.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
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
      </PrismaBackground>
    </section>
  )
}
