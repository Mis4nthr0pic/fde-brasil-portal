export interface ReadinessQuestion {
  id: string;
  category: string;
  question: string;
  options: { value: number; label: string }[];
}

/** Scale 0–4 per question. Max score = questions.length * 4 */
export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "english",
    category: "Comunicação",
    question: "Como você avalia seu inglês para calls técnicas com cliente internacional?",
    options: [
      { value: 0, label: "Básico — ainda travo em calls ao vivo" },
      { value: 1, label: "Intermediário — entendo bem, falo com hesitação" },
      { value: 2, label: "Intermediário-alto — consigo conduzir call técnica" },
      { value: 3, label: "Avançado — fluente em contexto técnico" },
      { value: 4, label: "Fluente — zero fricção em discovery e demo" },
    ],
  },
  {
    id: "client_experience",
    category: "Cliente",
    question: "Experiência trabalhando diretamente com clientes ou stakeholders externos?",
    options: [
      { value: 0, label: "Nunca — só time interno" },
      { value: 1, label: "Pouco — suporte pontual ou handoff" },
      { value: 2, label: "Moderado — algumas calls e alinhamentos" },
      { value: 3, label: "Frequente — ownership de relacionamento técnico" },
      { value: 4, label: "Extensivo — embed com cliente, discovery e entrega" },
    ],
  },
  {
    id: "technical_depth",
    category: "Técnico",
    question: "Profundidade técnica para resolver problema em produção (não só tutorial)?",
    options: [
      { value: 0, label: "Iniciante — ainda construindo base" },
      { value: 1, label: "Júnior-pleno — entrego features com apoio" },
      { value: 2, label: "Pleno — ownership de módulos e APIs" },
      { value: 3, label: "Pleno-sênior — arquitetura e tradeoffs" },
      { value: 4, label: "Sênior — debugging complexo e decisões de sistema" },
    ],
  },
  {
    id: "apis_integrations",
    category: "Integrações",
    question: "Experiência com APIs, webhooks e integrações (incl. enterprise)?",
    options: [
      { value: 0, label: "Nenhuma" },
      { value: 1, label: "Consumo básico de APIs REST" },
      { value: 2, label: "Já integrei 2+ sistemas em projeto real" },
      { value: 3, label: "Auth, rate limits, webhooks em produção" },
      { value: 4, label: "Integrações enterprise com ownership completo" },
    ],
  },
  {
    id: "ai_rag_evals",
    category: "AI",
    question: "Experiência com AI agents, RAG, evals ou soluções baseadas em tokens?",
    options: [
      { value: 0, label: "Nenhuma — só experimentos pessoais" },
      { value: 1, label: "POCs e protótipos sem cliente" },
      { value: 2, label: "Projeto real com RAG ou agent simples" },
      { value: 3, label: "Evals, observabilidade ou custo em produção" },
      { value: 4, label: "Solução AI operando com cliente e métricas" },
    ],
  },
  {
    id: "debugging",
    category: "Operação",
    question: "Debugging e troubleshooting em ambiente real (não só local)?",
    options: [
      { value: 0, label: "Raramente fora do ambiente local" },
      { value: 1, label: "Logs e erros básicos em staging" },
      { value: 2, label: "Já resolvi incidentes em produção" },
      { value: 3, label: "Ownership de incidentes e root cause" },
      { value: 4, label: "Runbooks, observabilidade e SLA com cliente" },
    ],
  },
  {
    id: "portfolio",
    category: "Portfólio",
    question: "Portfólio público (GitHub, cases, write-ups) que comprova trabalho?",
    options: [
      { value: 0, label: "Não tenho nada público relevante" },
      { value: 1, label: "GitHub com projetos, pouco contexto" },
      { value: 2, label: "1–2 cases ou repos com README decente" },
      { value: 3, label: "Portfólio que explica problema e solução" },
      { value: 4, label: "Cases fortes que hiring manager entende em 5 min" },
    ],
  },
  {
    id: "demos",
    category: "Demo",
    question: "Já fez demo técnica para cliente, prospect ou comitê técnico?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Apresentações internas apenas" },
      { value: 2, label: "1–2 demos para externo com roteiro" },
      { value: 3, label: "Demos recorrentes com feedback e iteração" },
      { value: 4, label: "Demo que influenciou decisão de compra ou POC" },
    ],
  },
  {
    id: "tech_communication",
    category: "Comunicação",
    question: "Comunicação técnica escrita e oral (docs, calls, alinhamento)?",
    options: [
      { value: 0, label: "Ainda desenvolvendo" },
      { value: 1, label: "OK para time interno" },
      { value: 2, label: "Consigo explicar tradeoff para não-dev" },
      { value: 3, label: "Documentação e calls com cliente fluem" },
      { value: 4, label: "Referência no time para comunicação técnica" },
    ],
  },
  {
    id: "product_sense",
    category: "Produto",
    question: "Entendimento de produto: priorização, impacto, o que não construir?",
    options: [
      { value: 0, label: "Executo tarefa — pouco contexto de produto" },
      { value: 1, label: "Entendo backlog e critérios de aceite" },
      { value: 2, label: "Participo de priorização com PM/lead" },
      { value: 3, label: "Traduzo necessidade de negócio em escopo técnico" },
      { value: 4, label: "Ownership de roadmap técnico com cliente" },
    ],
  },
  {
    id: "cost_latency",
    category: "Operação",
    question: "Noção de custo, latência e qualidade em soluções (especialmente LLM)?",
    options: [
      { value: 0, label: "Não considero isso ainda" },
      { value: 1, label: "Noção básica de performance" },
      { value: 2, label: "Já otimizei custo ou latência em projeto" },
      { value: 3, label: "Métricas e alertas em solução com tokens" },
      { value: 4, label: "Converso custo/latência/qualidade com cliente e produto" },
    ],
  },
];

export const READINESS_STORAGE_KEY = "fde-readiness-result";
