import type { Metadata } from "next";
import { roadmapPhases } from "@/data/roadmap";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBlock } from "@/components/shared/cta-block";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "Trilha de aprendizado da FDE Brasil — do fundamento técnico às oportunidades remotas.",
};

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader
        title="Roadmap da comunidade"
        description="O que vamos cobrir ao longo dos encontros e conteúdos — em ordem lógica, não em hype."
      />

      <ol className="mt-12 relative space-y-0">
        {roadmapPhases.map((phase, i) => (
          <li key={phase.id} className="relative flex gap-6 pb-12 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10 text-sm font-bold text-primary">
                {phase.order}
              </span>
              {i < roadmapPhases.length - 1 && (
                <span className="w-px flex-1 bg-border mt-2" />
              )}
            </div>
            <div className="flex-1 pb-2">
              <h2 className="text-xl font-bold">{phase.title}</h2>
              <p className="mt-2 text-muted-foreground text-sm">
                {phase.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {phase.topics.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16">
        <CtaBlock />
      </div>
    </div>
  );
}
