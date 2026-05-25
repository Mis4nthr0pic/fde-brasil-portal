import type { Resource } from "@/types";

export const resources: Resource[] = [
  {
    id: "1",
    slug: "discovery-call-checklist",
    title: "Checklist de discovery call técnica",
    description:
      "Perguntas, sinais de fit e como documentar sem perder o ritmo da conversa.",
    category: "checklist",
    comingSoon: true,
  },
  {
    id: "2",
    slug: "demo-tecnica-template",
    title: "Template de demo técnica",
    description:
      "Estrutura de 20–30 minutos: problema, solução, tradeoffs e próximo passo.",
    category: "template",
    comingSoon: true,
  },
  {
    id: "3",
    slug: "portfolio-fde-playbook",
    title: "Playbook de portfólio para FDE",
    description:
      "O que publicar no GitHub, como contar cases e o que evitar no README genérico.",
    category: "playbook",
    comingSoon: true,
  },
  {
    id: "4",
    slug: "rag-eval-prompts",
    title: "Prompts para eval de RAG",
    description:
      "Conjunto inicial de prompts para testar retrieval, resposta e alucinação.",
    category: "prompt",
    comingSoon: true,
  },
  {
    id: "5",
    slug: "guia-custo-latencia-llm",
    title: "Guia de custo, latência e qualidade em LLM",
    description:
      "Métricas que importam, como medir e como apresentar para produto e cliente.",
    category: "guia",
    comingSoon: true,
  },
  {
    id: "6",
    slug: "integracao-enterprise",
    title: "Guia de integração enterprise",
    description:
      "Auth, webhooks, rate limits e padrões comuns em APIs B2B.",
    category: "guia",
    comingSoon: true,
  },
  {
    id: "7",
    slug: "ferramentas-observabilidade",
    title: "Ferramentas de observabilidade para AI",
    description:
      "Lista curada de ferramentas para tracing, evals e monitoramento de agents.",
    category: "ferramenta",
    comingSoon: true,
  },
  {
    id: "8",
    slug: "entrevista-fde-checklist",
    title: "Checklist de entrevista FDE",
    description:
      "O que esperar em live coding, system design com cliente e case técnico.",
    category: "checklist",
    comingSoon: true,
  },
];

export const resourceCategoryLabels: Record<Resource["category"], string> = {
  playbook: "Playbook",
  template: "Template",
  checklist: "Checklist",
  prompt: "Prompt",
  guia: "Guia",
  ferramenta: "Ferramenta",
};
