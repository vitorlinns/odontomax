# Odontomax

Site institucional da Odontomax, clínica odontológica. Apresentação da clínica, tratamentos, depoimentos, FAQ e fluxo de agendamento de consulta.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) tema e cores centralizados em `src/app/globals.css` via `@theme`
- [Framer Motion](https://motion.dev) para animações
- [Remixicon](https://remixicon.com) para ícones

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # sobe o build de produção
npm run lint    # eslint
```

## Estrutura do projeto

```
src/
├── app/                  # rotas (App Router)
│   └── (main)/           # páginas com header/footer do site
│       ├── page.tsx      # home
│       ├── agendar/
│       └── politica-de-privacidade/
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # seções da home (Hero, About, Treatments, Testimonials, FAQ...)
│   └── shared/           # componentes reutilizáveis (Button...)
└── lib/
    ├── animations.ts     # variantes do Framer Motion
    └── utils.ts          # helpers (cn)
```

## Notas

- Não há backend: o fluxo de agendamento em `/agendar` é simulado (sem persistência real de dados nem envio de e-mails).
- Cores do design system vivem como variáveis CSS em `src/app/globals.css` (`--color-*`), e o Tailwind gera as utilities automaticamente a partir delas.
