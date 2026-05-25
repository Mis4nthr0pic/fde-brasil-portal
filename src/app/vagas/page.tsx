import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Vagas",
  description: "Job board FDE Brasil — em breve.",
};

/** TODO: Job Board — replace shell with listing + filters */
export default function VagasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader
        title="Job Board"
        description="Vagas curadas para papéis FDE, Solutions Engineer e AI Engineer — sem spam de LinkedIn."
      />
      <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
        <Briefcase className="size-12 text-muted-foreground mb-4" />
        <p className="text-muted-foreground max-w-md">
          Em construção. Prioridade agora: comunidade e encontros. Vagas entram quando
          tivermos densidade para curadoria real.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link href="/aplicar">Aplicar para entrar na comunidade</Link>
        </Button>
      </div>
    </div>
  );
}
