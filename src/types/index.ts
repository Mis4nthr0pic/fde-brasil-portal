/** Core domain types — ready to mirror Prisma models later */

export type EventStatus = "planejado" | "em_breve" | "aberto";
export type EventFormat = "online" | "presencial";

export interface CommunityEvent {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: EventStatus;
  format: EventFormat;
  order: number;
}

export type ResourceCategory =
  | "playbook"
  | "template"
  | "checklist"
  | "prompt"
  | "guia"
  | "ferramenta";

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  comingSoon?: boolean;
}

export interface RoadmapPhase {
  id: string;
  order: number;
  title: string;
  description: string;
  topics: string[];
}

export type ReadinessLevel =
  | "builder"
  | "solutions_ready"
  | "fde_emerging"
  | "fde_ready"
  | "enterprise_ready";

export interface ReadinessResult {
  level: ReadinessLevel;
  score: number;
  maxScore: number;
  label: string;
  summary: string;
  strengths: string[];
  gaps: string[];
  nextSteps: string[];
}

export interface ReadinessAnswer {
  questionId: string;
  value: number; // 0–4
}

export type EnglishLevel =
  | "basico"
  | "intermediario"
  | "avancado"
  | "fluente";

export interface ApplicationPayload {
  name: string;
  email: string;
  linkedin: string;
  portfolio: string;
  location: string;
  currentRole: string;
  currentCompany?: string;
  englishLevel: EnglishLevel;
  mainInterest: string;
  seekingRemote: boolean;
  hasClientExperience: boolean;
  hasDoneDemo: boolean;
  hasAiExperience: boolean;
  bestProjectUrl: string;
  readinessLevel?: ReadinessLevel;
  readinessScore?: number;
  motivation: string;
  submittedAt: string;
}

/** TODO: NewsletterLead — wire to Resend/ConvertKit + Supabase */
export interface NewsletterLead {
  email: string;
  source: string;
  createdAt: string;
}

/** Future: JobBoard — see src/features/job-board */
export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  currency?: string;
  publishedAt: string;
}
