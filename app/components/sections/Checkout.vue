<template>
  <section
    ref="el"
    class="relative overflow-hidden bg-background py-24 px-6 transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <!-- Fundo -->
    <div class="absolute inset-0 bg-gradient-dark" />
    <div class="absolute inset-0 bg-gradient-glow-green opacity-20" />
    <div class="absolute inset-0 bg-gradient-glow-blue opacity-15" />

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-4xl mx-auto flex flex-col gap-8">

      <!-- Cabeçalho -->
      <div class="text-center flex flex-col gap-3">
        <h2 class="font-display font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-foreground leading-tight">
          Garanta sua Vaga no
          <span class="bg-gradient-accent-glow bg-clip-text text-transparent"> Pré-Lançamento</span>
        </h2>
        <p class="font-sans text-body-lg text-foreground-muted">
          Curso ainda em gravação! Aproveite o desconto exclusivo de lançamento.
        </p>
      </div>

      <!-- Linha central: preços + incluso -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

        <!-- Coluna esquerda: cards de preço -->
        <div class="flex flex-col gap-3">

          <!-- Card preço cheio -->
          <div class="relative rounded-2xl border border-border bg-background-muted px-6 py-5">
            <span class="absolute -top-2.5 right-4 text-[0.6rem] font-black px-2.5 py-1 rounded-full bg-red-500 text-white uppercase tracking-wide">Preço Real!</span>
            <p class="text-label-sm text-foreground-subtle mb-2">Preço após finalização do curso</p>
            <p class="font-display font-bold text-[1.75rem] text-foreground-subtle line-through">R$ 1.497,00</p>
          </div>

          <!-- Card preço pré-lançamento -->
          <div class="relative rounded-2xl border-2 border-accent/60 bg-accent/5 px-6 py-6 shadow-glow-soft">
            <span class="absolute -top-3 right-4 text-[0.65rem] font-black px-3 py-1 rounded-full bg-accent text-black uppercase tracking-wide">67% off</span>
            <p class="text-label-sm text-accent mb-3 font-semibold">Preço de Pré-Lançamento</p>
            <div class="flex items-end gap-1 leading-none mb-2">
              <span class="text-body-xl text-foreground font-bold">R$</span>
              <span class="font-display font-extrabold text-[3.5rem] text-foreground leading-none">497</span>
              <span class="text-body-xl text-foreground font-bold mb-1">,00</span>
            </div>
            <p class="text-body-md text-foreground-muted">ou <span class="text-accent font-semibold">12x de R$ 49,90</span></p>
          </div>

        </div>

        <!-- Coluna direita: o que está incluso -->
        <div class="flex flex-col gap-4 px-1">
          <p class="font-display font-bold text-body-xl text-foreground flex items-center gap-2">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            O que está incluído:
          </p>
          <ul class="flex flex-col gap-3">
            <li v-for="item in includes" :key="item" class="flex items-center gap-3 text-body-md text-foreground-muted">
              <svg class="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

      </div>

      <!-- Botão CTA -->
      <UiButtonBuy label="Garantir Minha Vaga — R$ 497,00  →" />

      <!-- Formas de pagamento -->
      <div class="flex flex-col items-center gap-3">
        <p class="text-label-sm text-foreground-subtle">Formas de pagamento aceitas:</p>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2 text-body-sm text-foreground-muted">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
            </svg>
            Cartão de Crédito
          </div>
          <div class="flex items-center gap-2 text-body-sm text-foreground-muted">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            PIX
          </div>
        </div>
      </div>

      <!-- Garantia -->
      <div class="rounded-2xl border border-border bg-background-muted px-6 py-5 flex items-start gap-4">
        <svg class="w-8 h-8 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
        <div>
          <p class="font-display font-bold text-body-lg text-foreground">Garantia de 7 dias</p>
          <p class="text-body-sm text-foreground-muted mt-1 leading-relaxed">
            Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiButtonBuy from '~/components/ui/ButtonBuy.vue'
import { useReveal } from '~/composables/useReveal'

const el = ref<HTMLElement | null>(null)
const visible = useReveal(el)

const includes = [
  'Acesso vitalício ao curso completo',
  'Módulos liberados conforme gravação',
  'Projetos práticos e templates',
  'Suporte da comunidade exclusiva',
  'Atualizações gratuitas para sempre',
  'Certificado de conclusão',
]
</script>
