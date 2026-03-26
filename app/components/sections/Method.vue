<template>
  <section
    ref="el"
    class="relative overflow-hidden bg-background py-24 px-6 transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >

    <!-- Fundo -->
    <div class="absolute inset-0 bg-gradient-dark" />
    <div class="absolute inset-0 bg-gradient-glow-blue opacity-20" />
    <div class="absolute inset-0 bg-gradient-glow-green opacity-10" />

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <!-- Coluna esquerda -->
      <div class="flex flex-col gap-6">
        <UiBadge text="Método Exclusivo" />

        <h2 class="font-display font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-foreground leading-tight">
          Componentização
          <span class="bg-gradient-accent-glow bg-clip-text text-transparent">Extrema</span>
        </h2>

        <p class="font-sans text-body-lg text-foreground-muted leading-relaxed">
          Desenvolva aplicativos com Inteligência Artificial de forma
          <span class="text-foreground font-medium">segura</span>,
          <span class="text-foreground font-medium">escalável</span>
          com total controle sobre seu código.
        </p>
      </div>

      <!-- Coluna direita — mockup de interface -->
      <UiAppMockup />

    </div>

  </section>
</template>

<script setup lang="ts">
import UiBadge from '~/components/ui/Badge.vue'
import UiAppMockup from '~/components/ui/AppMockup.vue'
import { ref } from 'vue'
import { useReveal } from '~/composables/useReveal'

const el = ref<HTMLElement | null>(null)
const visible = useReveal(el)
</script>
