<template>
  <section
    ref="el"
    class="relative overflow-hidden bg-background py-24 px-6 transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >

    <!-- Fundo -->
    <div class="absolute inset-0 bg-gradient-dark" />
    <div class="absolute inset-0 bg-gradient-glow-green opacity-10" />

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-10">

      <UiBadge text="Método" />

      <div class="flex flex-col gap-4">
        <h2 class="font-display font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-foreground leading-tight">
          <span class="bg-gradient-accent-glow bg-clip-text text-transparent">Método Componentização Extrema</span>
        </h2>
      </div>

      <UiChatPrompt
        title="Método Componentização Extrema"
        text="Crie um componente chamado BaseButton e um componente BaseInput, coloque os componentes no index, e ao ser clicado pelo button execute a função principal que está no UseCustomer..."
      />

    </div>

    <!-- Por que funciona -->
    <div class="relative z-10 max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

      <!-- Coluna esquerda -->
      <div class="flex flex-col gap-5">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-display font-bold text-display-sm text-accent">Por que funciona</h3>
        </div>

        <p class="font-sans text-body-md text-foreground-muted leading-relaxed">
          Com o Método Componentização Extrema, cada componente é construído de forma isolada, com responsabilidades bem definidas, seus métodos, funções e propriedades são organizados antes mesmo de serem integrados ao projeto.
        </p>
        <p class="font-sans text-body-md text-foreground-muted leading-relaxed">
          Em seguida, esses componentes são importados e compostos entre si, formando a estrutura completa do aplicativo de maneira previsível e controlada. A IA trabalha dentro de um contexto claro, gerando código coeso e rastreável.
        </p>
        <p class="font-sans text-body-md text-foreground-muted leading-relaxed">
          Essa abordagem segue os princípios fundamentais de design e arquitetura de software, resultando em um código limpo, escalável e seguro, e, principalmente, sob total controle do desenvolvedor.
        </p>
      </div>

      <!-- Coluna direita -->
      <UiFolderTree />

    </div>

    <!-- CTA -->
    <div class="relative z-10 flex justify-center mt-16">
      <UiButtonAction text="Começar Agora" scroll-to="checkout" />
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiBadge from '~/components/ui/Badge.vue'
import UiChatPrompt from '~/components/ui/ChatPrompt.vue'
import UiFolderTree from '~/components/ui/FolderTree.vue'
import UiButtonAction from '~/components/ui/ButtonAction.vue'
import { useReveal } from '~/composables/useReveal'

const el = ref<HTMLElement | null>(null)
const visible = useReveal(el)
</script>
