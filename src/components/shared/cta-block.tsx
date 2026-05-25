import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface CtaBlockProps {
  title?: string;
  description?: string;
}

export function CtaBlock({
  title = "Pronto para entrar na guilda?",
  description = "A FDE Brasil começa pequena e curada. Aplicação passa por revisão — sem grupo aberto aleatório.",
}: CtaBlockProps) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-10">
      <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
      <p className="mt-3 max-w-xl text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href={siteConfig.links.apply}>Aplicar para entrar</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={siteConfig.links.readiness}>Fazer Readiness Score</Link>
        </Button>
      </div>
    </div>
  );
}
