import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { resources, resourceCategoryLabels } from "@/data/resources";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaBlock } from "@/components/shared/cta-block";

export const metadata: Metadata = {
  title: "Recursos",
  description: "Playbooks, templates, checklists e guias da FDE Brasil — em construção com a comunidade.",
};

export default function RecursosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader
        title="Recursos"
        description="Materiais práticos para execução — sem PDF genérico de guru. Conteúdo inicial em preparação com o primeiro grupo."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <Card key={r.id} className={r.comingSoon ? "opacity-90" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <Badge variant="outline">
                  {resourceCategoryLabels[r.category]}
                </Badge>
                {r.comingSoon && (
                  <Badge variant="secondary">Em breve</Badge>
                )}
              </div>
              <CardTitle className="text-lg flex items-start gap-2 pt-2">
                <BookOpen className="size-5 shrink-0 text-primary mt-0.5" />
                {r.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{r.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        {/* TODO: MDX content layer — src/content/resources */}
        Recursos completos serão publicados via MDX conforme a comunidade validar
        necessidade real.
      </p>

      <div className="mt-12">
        <CtaBlock
          title="Quer acesso antecipado aos playbooks?"
          description="Membros do primeiro grupo ajudam a priorizar o que publicar primeiro."
        />
      </div>
    </div>
  );
}
