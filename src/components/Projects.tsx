import {
  Bitcoin,
  Bot,
  CreditCard,
  Megaphone,
  Phone,
  Store,
} from "lucide-react"
import { ProcessSection } from "./ui/how-we-do-it-process-overview"

const PROJECTS = [
  {
    icon: Phone,
    title: "calls.so",
    description:
      "Plataforma B2B de ligações com IA conversacional em português: agentes configuráveis, chamadas em tempo real via WebRTC e campanhas em lote.",
  },
  {
    icon: Bot,
    title: "Jarvis",
    description:
      "Assistente pessoal inteligente (estilo Jarvis) em desenvolvimento, construído em Python para automação de tarefas e interação por linguagem natural.",
  },
  {
    icon: Bitcoin,
    title: "brcpix",
    description:
      "Plataforma de gerenciamento de criptomoedas, com acompanhamento de carteiras e operações de ativos cripto.",
  },
  {
    icon: CreditCard,
    title: "Gestão de Pagamentos",
    description:
      "Plataforma de gerenciamento de pagamentos, para controle de cobranças e transações de ponta a ponta.",
  },
  {
    icon: Store,
    title: "Anymarket",
    description:
      "Frontend de integração que conecta lojas a marketplaces, com app mobile via Capacitor e dados reais operando em escala.",
  },
  {
    icon: Megaphone,
    title: "Ntomarketing",
    description:
      "Plataforma de automação de marketing com interface rica, construída em React Router e empacotada também para mobile.",
  },
]

export default function Projects() {
  return (
    <ProcessSection
      id="projetos"
      subtitle="03 — projetos"
      title="O que já construí"
      description="Produtos reais que levei da ideia à produção — de IA conversacional a backends distribuídos e integrações em escala."
      buttonText="Vamos conversar"
      buttonHref="#contato"
      items={PROJECTS}
    />
  )
}
