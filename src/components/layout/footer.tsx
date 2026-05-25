import Link from "next/link";
import { siteConfig, navItems } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
            <p className="text-sm text-primary font-medium">{siteConfig.tagline}</p>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium">Navegação</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.links.apply}
                  className="hover:text-foreground transition-colors"
                >
                  Aplicar para entrar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium">Em breve</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Job Board</li>
              <li>Área de membros</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          © {year} {siteConfig.name}. A ponte entre engenharia, produto e cliente.
        </p>
      </div>
    </footer>
  );
}
