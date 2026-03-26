# CLAUDE.md — lp-avancada

## Contexto do projeto

Landing page de vendas do curso **Método Componentização Extrema** — um curso que ensina a criar aplicativos e sites com Inteligência Artificial. O objetivo da página é converter visitantes em alunos.

---

## Stack

- **Nuxt 4** com estrutura de diretório `app/`
- **Tailwind CSS** via `@nuxtjs/tailwindcss`
- **TypeScript**
- **Public Sans** (Google Fonts) — fonte principal

---

## Estrutura de pastas

```
app/
├── components/
│   ├── sections/   # Seções da landing page (ex: Hero, Features, Pricing)
│   └── ui/         # Componentes reutilizáveis de interface (ex: Badge, VideoPlayer)
├── pages/
│   └── index.vue   # Página principal
└── app.vue         # Root da aplicação
```

---

## Regras de componentes

### Nomes de arquivos e componentes

Seguir estritamente o padrão Nuxt/Vue de nomenclatura baseada em pasta:

| Arquivo | Nome do componente |
|---|---|
| `components/sections/Hero.vue` | `<SectionsHero />` |
| `components/sections/Features.vue` | `<SectionsFeatures />` |
| `components/ui/Badge.vue` | `<UiBadge />` |
| `components/ui/VideoPlayer.vue` | `<UiVideoPlayer />` |

- Arquivos em `PascalCase`
- Subpasta vira prefixo do componente
- Nunca usar nomes genéricos sem prefixo de pasta (ex: nunca `<Hero />` sozinho)

### Imports explícitos — OBRIGATÓRIO

Todo componente deve ser importado explicitamente no `<script setup>`, mesmo que o Nuxt faça auto-import. Isso garante rastreabilidade e clareza.

```ts
// ✅ Correto
import SectionsHero from '~/components/sections/Hero.vue'
import UiBadge from '~/components/ui/Badge.vue'

// ❌ Nunca confiar apenas no auto-import sem declarar
```

### Organização interna de um componente `.vue`

Ordem: `<template>` → `<script setup lang="ts">` → `<style scoped>` (somente se necessário)

---

## Design system

### Cores (definidas em `tailwind.config.ts`)

| Token | Valor | Uso |
|---|---|---|
| `background` | `#020618` | Fundo principal |
| `background-soft` | `#030c2c` | Fundo levemente mais claro |
| `background-muted` | `#08154a` | Cards e painéis |
| `background-elevated` | `#122870` | Elementos elevados |
| `foreground` | `#e8eef8` | Texto principal |
| `foreground-muted` | `#9db0df` | Texto secundário |
| `foreground-subtle` | `#4e72c8` | Texto desativado |
| `accent` | `#00DC82` | Verde Nuxt — CTAs e destaques |
| `accent-light` | `#4dffb9` | Verde claro |
| `accent-dark` | `#00a862` | Verde escuro |
| `border` | `#122870` | Borda sutil |
| `border-accent` | `#00DC82` | Borda destacada |

### Gradientes disponíveis

```
bg-gradient-dark          bg-gradient-hero
bg-gradient-accent        bg-gradient-accent-glow
bg-gradient-primary       bg-gradient-brand
bg-gradient-glow-green    bg-gradient-glow-blue
bg-gradient-spotlight
```

### Sombras disponíveis

```
shadow-glow-accent    shadow-glow-primary
shadow-glow-soft      shadow-card
```

### Tipografia

Fonte: **Public Sans** (variável, 100–900)

| Classe | Tamanho | Uso |
|---|---|---|
| `text-display-2xl` | 4.5rem | Headlines gigantes |
| `text-display-xl` | 3.75rem | Headlines de seção |
| `text-display-lg` | 3rem | Títulos grandes |
| `text-display-md` | 2.25rem | Títulos médios |
| `text-body-xl` | 1.25rem | Subtítulos |
| `text-body-lg` | 1.125rem | Parágrafos grandes |
| `text-body-md` | 1rem | Parágrafos padrão |
| `text-label-lg` | 0.875rem | Labels, badges |
| `text-label-sm` | 0.75rem | Labels pequenos |

- `font-sans` para corpo de texto
- `font-display` para títulos e headlines

---

## Responsividade

Sempre aplicar variantes responsivas nos tamanhos de fonte e espaçamentos. Padrão mobile-first:

```html
<!-- ✅ Correto -->
<h1 class="text-[1.75rem] sm:text-[2.25rem] md:text-[3rem]">...</h1>

<!-- ❌ Tamanho fixo sem responsividade -->
<h1 class="text-[3rem]">...</h1>
```

---

## Componentes existentes

### `UiBadge`
Prop: `text: string`
Uso: labels de destaque acima de títulos de seção.

```vue
<UiBadge text="Método Componentização Extrema" />
```

### `UiVideoPlayer`
Props: `videoId: string`, `title?: string`
Uso: embed de vídeo YouTube com estilo do projeto.

```vue
<UiVideoPlayer video-id="ID_DO_YOUTUBE" title="Veja como funciona" />
```
