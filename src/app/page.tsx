import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hero } from "@/components/home/hero";
import { EventCard } from "@/components/events/event-card";
import { Section } from "@/components/shared/section";
import { CtaBlock } from "@/components/shared/cta-block";
import { audienceRoles, communityTopics } from "@/data/audience";
import { communityEvents } from "@/data/events";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/config/site";
import {
  MessageCircle,
  Layers,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const previewEvents = communityEvents.slice(0, 3);

  return (
    <>
      <Hero />

      <Section
        id="tese"
        title="Por que a FDE Brasil existe"
        description="Dar linguagem e rede para uma categoria profissional que já existe — só não tinha nome em português."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Clareza de carreira",
              text: "Entender FDE, Solutions Engineer e AI Engineer sem guru de LinkedIn.",
            },
            {
              icon: Zap,
              title: "Execução real",
              text: "Demos, discovery, integrações, evals — o que importa no dia a dia com cliente.",
            },
            {
              icon: Users,
              title: "Rede curada",
              text: "Builders técnicos que falam a mesma língua. Não grupo aberto aleatório.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="size-8 text-primary mb-2" />
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="o-que-e-fde"
        title="O que é FDE?"
        description="Forward Deployed Engineer: engenharia embedada no problema do cliente."
        className="bg-card/20"
      >
        <p className="max-w-3xl text-muted-foreground mb-6">
          Você entrega solução em produção — código, integração, demo, troubleshooting —
          com ownership técnico próximo de produto e negócio. Diferente de consultor que
          só recomenda, e de DevRel que foca em comunidade e conteúdo.
        </p>
        <Button asChild variant="outline">
          <Link href="/o-que-e-fde">Ler explicação completa</Link>
        </Button>
      </Section>

      <Section id="para-quem" title="Para quem é">
        <div className="flex flex-wrap gap-2">
          {audienceRoles.map((role) => (
            <Badge key={role} variant="secondary" className="text-sm py-1.5 px-3">
              {role}
            </Badge>
          ))}
        </div>
      </Section>

      <Section
        id="temas"
        title="O que vamos discutir"
        className="bg-card/20"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {communityTopics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {topic}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="encontros"
        title="Primeiros encontros"
        description="Série inicial online. Aplique para entrar na comunidade e receber avisos."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {previewEvents.map((event) => (
            <EventCard key={event.id} event={event} compact />
          ))}
        </div>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/eventos">Ver todos os encontros</Link>
        </Button>
      </Section>

      <Section
        id="readiness"
        title="FDE Readiness Score"
        description="Autodiagnóstico em português: onde você está e o que desenvolver antes de aplicar."
        className="bg-card/20"
      >
        <Card className="max-w-2xl border-primary/20">
          <CardContent className="pt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              11 dimensões: inglês, cliente, técnico, APIs, AI, debugging, portfólio,
              demos, comunicação, produto e operação. Resultado: Builder → Enterprise
              Ready.
            </p>
            <Button asChild>
              <Link href="/readiness">Fazer avaliação</Link>
            </Button>
          </CardContent>
        </Card>
      </Section>

      <Section id="whatsapp-discord" title="WhatsApp primeiro. Discord depois.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <MessageCircle className="size-8 text-primary mb-2" />
              <CardTitle>WhatsApp agora</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Densidade rápida: dúvidas, conexões e conversas no dia a dia. Ideal para
              começar pequeno e útil.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Layers className="size-8 text-primary mb-2" />
              <CardTitle>Discord depois</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Canais, arquivos, projetos e histórico — sem matar a vida da comunidade
              no início.
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        id="curada"
        title="Comunidade curada, não grupo aberto"
        className="bg-card/20"
      >
        <p className="max-w-2xl text-muted-foreground">
          CTA é <strong className="text-foreground">Aplicar para entrar</strong> — não
          &quot;entrar no grupo&quot;. Revisamos perfil para manter qualidade de conversa
          e fit técnico no primeiro núcleo.
        </p>
        <Button asChild className="mt-6" size="lg">
          <Link href={siteConfig.links.apply}>Aplicar para entrar</Link>
        </Button>
      </Section>

      <Section id="faq" title="FAQ">
        <Accordion type="single" collapsible className="max-w-3xl">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section className="pb-24">
        <CtaBlock />
      </Section>
    </>
  );
}
