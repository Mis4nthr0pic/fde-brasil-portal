import Link from "next/link";
import { ArrowRight, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-glow">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <p className="mb-4 text-sm font-medium text-primary">
          {siteConfig.tagline}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          A guilda técnica para quem constrói na interseção de{" "}
          <span className="text-gradient">engenharia, produto e cliente</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Forward Deployed Engineer ainda é termo novo no Brasil — mas muita gente
          já faz esse trabalho com outros nomes. A FDE Brasil existe para dar
          linguagem, rede e direção, com menos hype e mais execução.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Oportunidades internacionais em papéis técnicos próximos de cliente são
          reais — compensação pode variar bastante por senioridade, inglês,
          portfólio e contexto. A comunidade ajuda você a entender o caminho com
          clareza.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href={siteConfig.links.apply}>
              Aplicar para entrar
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={siteConfig.links.events}>Ver próximos encontros</Link>
          </Button>
        </div>
        <Link
          href={siteConfig.links.readiness}
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Gauge className="size-4" />
          Descubra seu FDE Readiness Score
        </Link>
      </div>
    </section>
  );
}
