"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileNavProps {
  trigger: React.ReactNode;
}

export function MobileNav({ trigger }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col gap-6">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
          <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </SheetHeader>

        <nav className="flex flex-col gap-1" aria-label="Menu mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-3 text-base transition-colors hover:bg-accent",
                pathname === item.href && "bg-accent font-medium"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
          <Button asChild size="lg">
            <Link href={siteConfig.links.apply}>Aplicar para entrar</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={siteConfig.links.events}>Ver próximos encontros</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
