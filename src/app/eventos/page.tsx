import type { Metadata } from "next";
import { EventCard } from "@/components/events/event-card";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBlock } from "@/components/shared/cta-block";
import { communityEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Primeiros encontros da FDE Brasil — online, em português, foco em execução.",
};

export default function EventosPage() {
  const sorted = [...communityEvents].sort((a, b) => a.order - b.order);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageHeader
        title="Próximos encontros"
        description="Série inicial da comunidade. Status atualizado conforme abrimos inscrições — aplique para receber aviso no primeiro grupo."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {sorted.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="mt-16">
        <CtaBlock
          title="Quer participar dos encontros?"
          description="Entre na comunidade curada. Revisamos aplicações para o primeiro núcleo no WhatsApp."
        />
      </div>
    </div>
  );
}
