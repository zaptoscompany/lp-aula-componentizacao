<template>
  <section
    ref="el"
    class="relative overflow-hidden bg-background py-24 px-6 transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >

    <!-- Fundo -->
    <div class="absolute inset-0 bg-gradient-dark" />
    <div class="absolute inset-0 bg-gradient-glow-blue opacity-20" />

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-10">

      <UiBadge text="Método Tradicional" />

      <div class="flex flex-col gap-4">
        <h2 class="font-display font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-foreground leading-tight">
          O jeito antigo de fazer
          <span class="bg-gradient-accent-glow bg-clip-text text-transparent"> Vibe Coding</span>
        </h2>
        <p class="font-sans text-body-lg text-foreground-muted max-w-xl mx-auto leading-relaxed">
          Enviar prompts aleatórios para a IA sem estrutura, sem padrão e sem controle sobre o que está sendo gerado.
        </p>
      </div>

      <UiChatPrompt
        title="Vibe Coding"
        text="Crie um aplicativo completo de gestão..."
      />

    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiBadge from '~/components/ui/Badge.vue'
import UiChatPrompt from '~/components/ui/ChatPrompt.vue'
import { useReveal } from '~/composables/useReveal'

const el = ref<HTMLElement | null>(null)
const visible = useReveal(el)
</script>
