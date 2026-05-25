import type { CommunityEvent } from "@/types";

export const communityEvents: CommunityEvent[] = [
  {
    id: "1",
    slug: "o-que-e-fde-brasil",
    title: "O que é FDE e como esse papel aparece no Brasil",
    description:
      "Definição clara do papel, como ele se manifesta em empresas brasileiras e internacionais, e o que muda na prática do dia a dia.",
    status: "em_breve",
    format: "online",
    order: 1,
  },
  {
    id: "2",
    slug: "portfolio-fde-solutions-ai",
    title:
      "Como montar um portfólio forte para FDE, Solutions Engineer e AI Engineer",
    description:
      "O que mostrar no GitHub, como estruturar cases públicos e o que recrutadores e hiring managers realmente olham.",
    status: "planejado",
    format: "online",
    order: 2,
  },
  {
    id: "3",
    slug: "demo-tecnica-que-convence",
    title: "Como fazer uma demo técnica que convence clientes",
    description:
      "Estrutura de demo, narrativa, tradeoffs visíveis e como evitar virar slideshow de features.",
    status: "planejado",
    format: "online",
    order: 3,
  },
  {
    id: "4",
    slug: "discovery-sem-parecer-vendedor",
    title: "Como conduzir discovery sem parecer vendedor genérico",
    description:
      "Perguntas que abrem problema real, sinais de fit técnico e como documentar aprendizado sem perder velocidade.",
    status: "planejado",
    format: "online",
    order: 4,
  },
  {
    id: "5",
    slug: "negociar-vaga-remota-usd",
    title: "Como negociar vaga remota em dólar sendo do Brasil",
    description:
      "Contexto de mercado, variação de compensação, inglês, portfólio e como negociar sem prometer atalhos.",
    status: "planejado",
    format: "online",
    order: 5,
  },
  {
    id: "6",
    slug: "ai-agents-na-pratica",
    title: "AI agents na prática: onde dá dinheiro e onde é só hype",
    description:
      "Casos com ROI real, armadilhas comuns e como separar POC bonita de solução que aguenta cliente enterprise.",
    status: "planejado",
    format: "online",
    order: 6,
  },
  {
    id: "7",
    slug: "custo-latencia-qualidade-tokens",
    title:
      "Como medir custo, latência e qualidade em soluções baseadas em tokens",
    description:
      "Métricas operacionais, evals, observabilidade e como conversar isso com produto e cliente.",
    status: "planejado",
    format: "online",
    order: 7,
  },
];

export const eventStatusLabels: Record<
  CommunityEvent["status"],
  { label: string; variant: "default" | "warning" | "success" }
> = {
  planejado: { label: "Planejado", variant: "default" },
  em_breve: { label: "Em breve", variant: "warning" },
  aberto: { label: "Aberto", variant: "success" },
};

export const eventFormatLabels: Record<CommunityEvent["format"], string> = {
  online: "Online",
  presencial: "Presencial",
};
