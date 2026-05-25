import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBlock } from "@/components/shared/cta-block";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "O que é FDE?",
  description:
    "Forward Deployed Engineer explicado: diferenças de consultor, Solutions Engineer e DevRel, e por que AI tornou o papel mais relevante.",
};

const comparisons = [
  {
    role: "Consultor tradicional",
    fde: "Entrega código e solução operando — não só slide e documento.",
  },
  {
    role: "Solutions Engineer",
    fde: "Muito overlap. FDE costuma ter embed mais longo e ownership de produção no cliente.",
  },
  {
    role: "DevRel",
    fde: "DevRel foca comunidade e advocacy. FDE foca entrega e problema do cliente em produção.",
  },
];

const practicalExamples = [
  "Integrar API do cliente com seu produto em ambiente de staging em uma semana",
  "Construir POC de RAG com evals mínimos antes de prometer produção",
  "Conduzir discovery técnico e traduzir em escopo implementável",
  "Debugar latência e custo de pipeline de tokens com métricas que o cliente entende",
  "Fazer demo ao vivo que mostra tradeoff, não feature checklist",
];

export default function OQueEFdePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader
        title="O que é Forward Deployed Engineer?"
        description="A ponte entre engenharia, produto e cliente — com entrega em produção, não só recomendação."
      />

      <div className="mt-12 prose prose-invert max-w-none space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Definição direta</h2>
          <p className="text-muted-foreground leading-relaxed">
            FDE é um papel técnico que resolve problemas reais do cliente — muitas vezes
            embedado no contexto dele — com foco em impacto mensurável: integração,
            demo, troubleshooting, arquitetura e operação. Você fala com produto,
            engenharia do cliente e negócio, mas o diferencial é{" "}
            <strong className="text-foreground">executar</strong>.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Como se diferencia</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {comparisons.map((c) => (
              <Card key={c.role}>
                <CardHeader>
                  <CardTitle className="text-base">{c.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{c.fde}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Por que ficou mais relevante com AI</h2>
          <p className="text-muted-foreground leading-relaxed">
            Soluções com LLM exigem alguém que entenda retrieval, evals, custo por token,
            latência, integração e expectativa do cliente — não só prompt bonito. O FDE
            fecha o gap entre &quot;POC impressionante&quot; e &quot;sistema que aguenta
            enterprise&quot;.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
            <li>Custo, tokens e orçamento de inferência</li>
            <li>Latência e UX em fluxos com modelo</li>
            <li>Evals e qualidade além de vibe check</li>
            <li>Integração com dados e sistemas do cliente</li>
            <li>Operação: observabilidade, incidentes, runbooks</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Exemplos práticos de trabalho FDE</h2>
          <ul className="space-y-3">
            {practicalExamples.map((ex) => (
              <li
                key={ex}
                className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground"
              >
                {ex}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-card/30 p-6">
          <p className="text-sm text-muted-foreground">
            No Brasil, muitos profissionais já fazem esse trabalho como Solutions
            Engineer, AI Engineer, Technical Consultant ou Partner Engineer. A FDE Brasil
            não inventa o papel — dá nome, rede e direção em português.
          </p>
        </section>
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href={siteConfig.links.apply}>Aplicar para entrar</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/readiness">FDE Readiness Score</Link>
        </Button>
      </div>

      <div className="mt-16">
        <CtaBlock />
      </div>
    </div>
  );
}
