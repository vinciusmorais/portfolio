import {
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

// TODO: preencher com o username real do GitHub quando disponível
const GITHUB_URL = "#"
const LINKEDIN_URL =
  "https://www.linkedin.com/in/vin%C3%ADcius-magalh%C3%A3es-471542244/"
const WHATSAPP_URL = "https://wa.me/5598981845625"

export default function Footer() {
  return (
    <footer id="contato" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex w-full max-w-[2200px] flex-col items-center gap-4 px-6 pb-28 pt-8 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left lg:px-12">
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} Vinicius Morais
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:vinicius567morais@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted transition-colors hover:text-accent"
          >
            <HugeiconsIcon icon={Mail01Icon} size={16} />
            vinicius567morais@gmail.com
          </a>

          <span className="hidden h-4 w-px bg-border sm:block" />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-md p-2 text-text-muted transition-colors hover:text-accent"
          >
            <HugeiconsIcon icon={WhatsappIcon} size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-text-muted transition-colors hover:text-accent"
          >
            <HugeiconsIcon icon={Linkedin01Icon} size={18} />
          </a>
          <a
            href={GITHUB_URL}
            aria-label="GitHub"
            className="rounded-md p-2 text-text-muted transition-colors hover:text-accent"
          >
            <HugeiconsIcon icon={GithubIcon} size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
