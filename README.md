# Galfort – site em Astro

Recriação de galfort.com.br em Astro (estático), com SEO técnico corrigido e estrutura para crescimento orgânico.

## Começar

```bash
npm install
npm run images:download   # baixa fotos, logo e logos de clientes do site atual para src/assets/
npm run dev               # http://localhost:4321
npm run build             # gera dist/
```

Deploy: Vercel (importar o repositório; `vercel.json` já define trailing slash, cache e headers).

Variáveis opcionais (`.env.example`):
- `PUBLIC_GA_ID`: GA4. Sem ele, nenhum script de analytics carrega.
- `PUBLIC_FORM_ENDPOINT`: endpoint do formulário (ex.: Formspree). Sem ele, o formulário abre o WhatsApp com a mensagem pronta.

## Estrutura

| Rota | Arquivo | Indexa hoje? |
|---|---|---|
| `/` | `src/pages/index.astro` | Sim |
| `/galeria/` | `src/pages/galeria.astro` | Sim |
| `/contato/` | `src/pages/contato.astro` | Sim |
| `/estrutura-metalica-pre-fabricada/` | guia pilar | Não (aguarda revisão) |
| `/estruturas-metalicas/` e `/<slug>/` (7 aplicações) | `src/pages/estruturas-metalicas/` | Não (aguarda revisão) |

Conteúdo editável em `src/data/` (`site.ts`, `applications.ts`, `gallery.ts`, `clients.ts`).

## Portão de indexação (importante)

Páginas novas nascem com `noindex` e fora do sitemap. O controle fica em `seo.config.mjs`.
Depois que a Galfort revisar o texto de uma página, troque `false` por `true` e faça o deploy.
Isso aplica `index,follow` e inclui a URL no `sitemap-index.xml`.

## O que mudou em relação ao site antigo

- Title e description únicos por página. `meta keywords` e `revisit-after` removidos (o Google ignora).
- Páginas próprias para cada aplicação, no lugar de âncoras (`#sobre-nos` etc.).
- JSON-LD em `@graph`: Organization+LocalBusiness, WebSite, página, BreadcrumbList, Service e FAQPage.
- Canonical, Open Graph e Twitter Card por página. Sitemap e robots.txt.
- Imagens via `astro:assets`: WebP responsivo com `srcset`, `width`/`height` (sem CLS), lazy-load e LCP com `fetchpriority="high"`.
- Vídeo do YouTube em *facade* (iframe só carrega no clique). Mapa com iframe lazy.
- Ícones em SVG inline (sem requisições extras). Lightbox em `<dialog>` nativo.
- Telefone único: (11) 94071-9907. "40 anos" em todo o site.
- Formulário funcional e cliques de WhatsApp rastreados no GA4 (evento `generate_lead`).
- Rodapé sem crédito de desenvolvedor e sem links `#` de redes sociais.

## Pendências antes de liberar a indexação

1. **Alt das fotos** (`src/data/gallery.ts`, `ALT_OVERRIDES`): descrever o que cada foto mostra.
2. **Revisar** os textos de `applications.ts` e do guia pilar com a Galfort. Acrescentar dados reais: obras, vãos, áreas, cidades.
3. Se citar normas técnicas (ex.: ABNT NBR 8800), validar o texto antes de publicar.
4. **Redes sociais**: informar os links reais e reativar no rodapé.
5. Configurar `PUBLIC_GA_ID` e `PUBLIC_FORM_ENDPOINT`.
6. Cadastrar o domínio no Search Console e enviar `sitemap-index.xml`.
7. Alinhar o Perfil da Empresa no Google (nome, endereço, telefone) ao rodapé do site.
8. Configurar redirecionamento do domínio antigo e `www` → apex no painel do domínio (Vercel).
9. Conferir PageSpeed/Core Web Vitals com as imagens reais.

## Próximos passos de crescimento orgânico

- Cases com dados reais (tipo de obra, vão, área, cidade) em páginas próprias.
- Blog informativo e transacional: custo, prazo e comparação com outros sistemas construtivos. Sem número sem fonte.
- Avaliações reais no Google e links de entidades do setor.
