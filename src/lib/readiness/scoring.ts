import type { ReadinessAnswer, ReadinessLevel, ReadinessResult } from "@/types";
import { readinessQuestions } from "./questions";

const MAX_PER_QUESTION = 4;

export function getMaxReadinessScore(): number {
  return readinessQuestions.length * MAX_PER_QUESTION;
}

const levelMeta: Record<
  ReadinessLevel,
  Omit<ReadinessResult, "score" | "maxScore" | "level">
> = {
  builder: {
    label: "Builder",
    summary:
      "Você está construindo base técnica. Foco agora: portfólio público, inglês e primeira experiência com problema de cliente real.",
    strengths: ["Motivação para aprender", "Espaço para crescer rápido"],
    gaps: [
      "Experiência com cliente",
      "Portfólio público",
      "Demos e discovery",
    ],
    nextSteps: [
      "Publique 1 projeto no GitHub com README que explica problema e solução",
      "Pratique inglês técnico com calls gravadas ou pair em inglês",
      "Participe do primeiro encontro sobre o que é FDE no Brasil",
    ],
  },
  solutions_ready: {
    label: "Solutions Ready",
    summary:
      "Base técnica sólida para Solutions Engineer. Próximo passo: mais cliente, demos e narrativa de valor.",
    strengths: ["Fundamento técnico", "Potencial para integrações"],
    gaps: [
      "Demos para externo",
      "Discovery estruturado",
      "AI/RAG em produção",
    ],
    nextSteps: [
      "Monte um case público de integração ou API",
      "Faça uma demo gravada de 15 minutos",
      "Leia o playbook de portfólio (em breve na comunidade)",
    ],
  },
  fde_emerging: {
    label: "FDE Emerging",
    summary:
      "Perfil em transição forte para FDE. Você já tem sinais de cliente e entrega — falta densidade em AI operacional e métricas.",
    strengths: [
      "Experiência técnica relevante",
      "Comunicação em desenvolvimento",
    ],
    gaps: [
      "Evals e observabilidade AI",
      "Custo/latência em LLM",
      "Cases enterprise públicos",
    ],
    nextSteps: [
      "Documente um troubleshooting real (anonimizado)",
      "Adicione evals ou métricas em um projeto AI",
      "Aplique para a comunidade e compare gaps com outros builders",
    ],
  },
  fde_ready: {
    label: "FDE Ready",
    summary:
      "Perfil alinhado com FDE: cliente, técnico, comunicação. Continue refinando AI em produção e oportunidades internacionais.",
    strengths: [
      "Cliente + entrega",
      "Portfólio ou demos",
      "Profundidade técnica",
    ],
    gaps: [
      "Pode faltar polish em compensação internacional",
      "Enterprise scale em alguns eixos",
    ],
    nextSteps: [
      "Negocie clareza de role (FDE vs Solutions vs AI Engineer)",
      "Prepare pitch de 2 minutos sobre seu melhor case",
      "Aplique para a comunidade para rede e encontros práticos",
    ],
  },
  enterprise_ready: {
    label: "Enterprise Ready",
    summary:
      "Perfil maduro para contextos enterprise: cliente, operação, AI e comunicação. Foco em oportunidade certa, não em mais tutorial.",
    strengths: [
      "Operação e troubleshooting",
      "Cliente e produto",
      "AI ou integrações em produção",
    ],
    gaps: ["Manter atualização em evals e mercado internacional"],
    nextSteps: [
      "Compartilhe aprendizado na comunidade (mentoria invertida)",
      "Aplique para co-criar encontros e playbooks",
      "Alinhe expectativa de compensação com contexto real de mercado",
    ],
  },
};

function scoreToLevel(score: number, max: number): ReadinessLevel {
  const pct = score / max;
  if (pct < 0.35) return "builder";
  if (pct < 0.5) return "solutions_ready";
  if (pct < 0.65) return "fde_emerging";
  if (pct < 0.82) return "fde_ready";
  return "enterprise_ready";
}

export function calculateReadinessResult(
  answers: ReadinessAnswer[]
): ReadinessResult {
  const maxScore = getMaxReadinessScore();
  const score = answers.reduce((sum, a) => sum + a.value, 0);
  const level = scoreToLevel(score, maxScore);
  const meta = levelMeta[level];

  return {
    level,
    score,
    maxScore,
    ...meta,
  };
}

export function getAnsweredCount(answers: ReadinessAnswer[]): number {
  return answers.length;
}
