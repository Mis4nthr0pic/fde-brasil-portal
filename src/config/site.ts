export const siteConfig = {
  name: "FDE Brasil",
  tagline: "Sem firula. Mais execução.",
  description:
    "A primeira comunidade em português para Forward Deployed Engineer e papéis na interseção entre engenharia, produto e cliente.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fdebrasil.com.br",
  links: {
    apply: "/aplicar",
    events: "/eventos",
    readiness: "/readiness",
    whatsapp: "#", // TODO: replace with community invite after launch
  },
} as const;

export const navItems = [
  { href: "/o-que-e-fde", label: "O que é FDE?" },
  { href: "/eventos", label: "Eventos" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/recursos", label: "Recursos" },
  { href: "/readiness", label: "Readiness Score" },
  { href: "/sobre", label: "Sobre" },
] as const;
