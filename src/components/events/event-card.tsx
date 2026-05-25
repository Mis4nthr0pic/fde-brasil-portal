import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import type { CommunityEvent } from "@/types";
import {
  eventFormatLabels,
  eventStatusLabels,
} from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface EventCardProps {
  event: CommunityEvent;
  compact?: boolean;
}

export function EventCard({ event, compact }: EventCardProps) {
  const status = eventStatusLabels[event.status];

  return (
    <Card className={compact ? "h-full" : undefined}>
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant={status.variant}>{status.label}</Badge>
          <Badge variant="outline" className="gap-1">
            <MapPin className="size-3" />
            {eventFormatLabels[event.format]}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-snug">{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{event.description}</p>
      </CardContent>
      {!compact && (
        <CardFooter>
          <Button asChild variant="outline" size="sm">
            <Link href={siteConfig.links.apply}>
              <Calendar className="size-4" />
              Aplicar para receber aviso
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
