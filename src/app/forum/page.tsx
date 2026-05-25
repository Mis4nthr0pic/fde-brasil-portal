import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Fórum",
  description: "Fórum FDE Brasil — em breve.",
};

/** TODO: Forum — Discord first; forum on site when content volume justifies */
export default function ForumPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader title="Fórum" description="Discussões async — depois do Discord estar maduro." />
      <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
        <MessageSquare className="size-12 text-muted-foreground mb-4" />
        <p className="text-muted-foreground max-w-md">
          Não vamos lançar fórum vazio. Conversa começa no WhatsApp e organiza no Discord.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link href="/aplicar">Aplicar para entrar</Link>
        </Button>
      </div>
    </div>
  );
}
