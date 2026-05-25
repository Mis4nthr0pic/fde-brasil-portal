import type { RoadmapPhase } from "@/types";

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "fundamentos",
    order: 1,
    title: "Fundamentos técnicos",
    description:
      "Base sólida para resolver problema real: código limpo, debugging, leitura de sistemas e entrega com qualidade.",
    topics: [
      "Arquitetura e tradeoffs",
      "Debugging em produção",
      "Leitura de código legado",
      "Testes onde importam",
    ],
  },
  {
    id: "produto-cliente",
    order: 2,
    title: "Produto e cliente",
    description:
      "Entender problema de negócio, stakeholders e como traduzir necessidade em solução técnica viável.",
    topics: [
      "Discovery técnico",
      "Stakeholder mapping",
      "Priorização com cliente",
      "Comunicação sem jargão vazio",
    ],
  },
  {
    id: "apis-integracoes",
    order: 3,
    title: "APIs e integrações",
    description:
      "Conectar sistemas enterprise, lidar com auth, rate limits, webhooks e contratos de API na prática.",
    topics: [
      "REST e GraphQL em produção",
      "OAuth e SSO",
      "Webhooks e filas",
      "Idempotência e retries",
    ],
  },
  {
    id: "ai-agents",
    order: 4,
    title: "AI agents, RAG e evals",
    description:
      "Construir soluções com LLM que aguentam cliente: RAG, evals, harnesses e observabilidade.",
    topics: [
      "RAG bem feito",
      "Evals e golden sets",
      "Tool use e agents",
      "Custo por token",
    ],
  },
  {
    id: "demos-discovery",
    order: 5,
    title: "Demos e discovery",
    description:
      "Mostrar valor técnico sem virar vendedor genérico. Demo que convence e discovery que abre problema.",
    topics: [
      "Estrutura de demo",
      "POC vs produção",
      "Narrativa técnica",
      "Follow-up que converte",
    ],
  },
  {
    id: "troubleshooting",
    order: 6,
    title: "Troubleshooting e produção",
    description:
      "Operar solução em ambiente real: incidentes, latência, custo e qualidade sob pressão de cliente.",
    topics: [
      "Observabilidade",
      "Runbooks",
      "Incident response",
      "SLAs e expectativas",
    ],
  },
  {
    id: "portfolio-entrevistas",
    order: 7,
    title: "Portfólio e entrevistas",
    description:
      "GitHub, LinkedIn, currículo e pitch para papéis de FDE, Solutions Engineer e AI Engineer.",
    topics: [
      "Portfólio público",
      "Cases técnicos",
      "Entrevistas práticas",
      "Take-home com critério",
    ],
  },
  {
    id: "oportunidades-remotas",
    order: 8,
    title: "Oportunidades remotas",
    description:
      "Acessar mercado internacional com clareza: inglês, portfólio, fit de papel e negociação realista.",
    topics: [
      "Mercado internacional",
      "Compensação em USD",
      "Fit de role",
      "Processo seletivo",
    ],
  },
];
