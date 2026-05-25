import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBlock } from "@/components/shared/cta-block";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Missão e estratégia da FDE Brasil — comunidade curada para builders na interseção técnica.",
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader
        title="Sobre a FDE Brasil"
        description={siteConfig.tagline}
      />

      <div className="mt-12 max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Missão</h2>
          <p>
            Ser a primeira comunidade em português focada em Forward Deployed Engineer
            e papéis correlatos — dando linguagem, rede, direção e oportunidade para
            quem já constrói na interseção entre engenharia, produto e cliente.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Como começamos</h2>
          <p>
            Pequena e curada. WhatsApp primeiro para densidade de conversa. Discord
            depois para organização. Sem job board inflado, sem fórum vazio, sem
            promessa de salário garantido em dólar.
          </p>
          <p>
            A comunidade existe para reduzir ruído e aumentar clareza — menos hype,
            mais execução.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">O que não somos</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Curso barato de “vaga gringa”</li>
            <li>Grupo aberto de Telegram com 500 pessoas falando pasto</li>
            <li>Consultoria disfarçada de comunidade</li>
            <li>Guru de carreira com frase motivacional</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">O que somos</h2>
          <p>
            Uma guilda profissional moderna para builders técnicos que querem evoluir
            com honestidade sobre mercado, compensação variável e trabalho real com
            cliente.
          </p>
        </section>
      </div>

      <Button asChild className="mt-10" size="lg">
        <Link href={siteConfig.links.apply}>Aplicar para entrar</Link>
      </Button>

      <div className="mt-16">
        <CtaBlock />
      </div>
    </div>
  );
}
