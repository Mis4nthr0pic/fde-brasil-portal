import type { Metadata } from "next";
import { ReadinessScore } from "@/components/readiness/readiness-score";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "FDE Readiness Score",
  description:
    "Avaliação interativa do seu nível de prontidão para papéis FDE, Solutions Engineer e AI Engineer.",
};

export default function ReadinessPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader
        title="FDE Readiness Score"
        description="Autodiagnóstico local — sem backend no MVP. Resultado salvo no navegador e opcional na aplicação."
      />

      <div className="mt-10">
        <ReadinessScore />
      </div>
    </div>
  );
}
