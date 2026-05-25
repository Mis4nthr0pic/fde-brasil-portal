# FDE Brasil

Portal oficial da primeira comunidade em português para **Forward Deployed Engineer** e papéis na interseção entre engenharia, produto e cliente.

**Frase guia:** Sem firula. Mais execução.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix)
- Lucide icons
- Prisma schema (preparado para Neon/Supabase)

## Rodar localmente

```bash
cd /Users/alex/Projects/FDEBRASIL
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Docker

Build e run em produção (standalone Next.js):

```bash
docker compose build
docker compose up
```

Ou em background:

```bash
docker compose up -d --build
docker compose logs -f web
docker compose down
```

App em [http://localhost:3000](http://localhost:3000).

Scripts npm: `npm run docker:build`, `npm run docker:up`, `npm run docker:down`.

## Build

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Push do repositório para GitHub
2. [vercel.com/new](https://vercel.com/new) → Import do repo
3. Framework Preset: **Next.js** (detectado automaticamente)
4. Variáveis de ambiente (quando ativar DB):
   - `NEXT_PUBLIC_SITE_URL` = URL de produção
   - `DATABASE_URL` = connection string Postgres (Neon ou Supabase)
5. Deploy

Opcional: `vercel env pull` para sincronizar `.env.local`.

## Estrutura principal

```
src/
  app/              # Rotas MVP + shells futuros (/vagas, /forum, /membros)
  components/       # UI, layout, home, readiness, apply
  config/           # siteConfig, nav
  data/             # events, roadmap, resources, faq (mock)
  lib/              # readiness scoring, application submit
  types/            # Domain types
  features/         # TODO modules (job-board, forum, chatbot…)
prisma/schema.prisma
```

## MVP vs futuro

| Feature            | MVP                         | Próximo passo                          |
|--------------------|-----------------------------|----------------------------------------|
| Aplicação          | localStorage + console      | `POST /api/applications` + Prisma      |
| Readiness Score    | localStorage                | persistir opcional no apply            |
| Recursos           | cards mock                  | MDX em `src/content`                   |
| Job board / fórum  | shell                       | curadoria + DB                         |
| Membros            | shell                       | Clerk + tier                           |
| Newsletter         | —                           | Resend + form footer                   |
| Chatbot FDE        | —                           | Vercel AI SDK + RAG playbooks          |

## Licença

Privado — FDE Brasil.
