import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Área de membros",
  description: "Conteúdo exclusivo FDE Brasil — em breve.",
};

/** TODO: Members — Clerk + protected routes under /membros/dashboard */
export default function MembrosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader
        title="Área de membros"
        description="Playbooks completos, gravações e VIP — após primeiro cohort."
      />
      <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
        <Lock className="size-12 text-muted-foreground mb-4" />
        <p className="text-muted-foreground max-w-md">
          Autenticação via Clerk planejada. Sem login falso no MVP.
        </p>
      </div>
    </div>
  );
}
