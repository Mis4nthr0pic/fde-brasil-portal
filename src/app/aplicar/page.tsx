import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "@/components/apply/application-form";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Aplicar para entrar",
  description: "Aplicação para a comunidade curada FDE Brasil no WhatsApp.",
};

export default function AplicarPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader
        title="Aplicar para entrar"
        description="A FDE Brasil começa pequena. Revisamos cada aplicação para o primeiro grupo — sem promessa automática de aceite."
      >
        <p className="text-sm text-muted-foreground">
          Ainda não fez o{" "}
          <Link href="/readiness" className="text-primary hover:underline">
            FDE Readiness Score
          </Link>
          ? Recomendamos antes de aplicar — o resultado pode ser enviado junto.
        </p>
      </PageHeader>

      <div className="mt-10">
        <ApplicationForm />
      </div>
    </div>
  );
}
