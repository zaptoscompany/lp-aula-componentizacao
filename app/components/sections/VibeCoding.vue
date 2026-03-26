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

      <UiBadge text="Vibe Coding" />

      <div class="flex flex-col gap-4">
        <h2 class="font-display font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-foreground leading-tight">
          <span class="text-red-400">Método Tradicional</span>
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

    <!-- Problema -->
    <div class="relative z-10 max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

      <!-- Coluna esquerda: texto do problema -->
      <div class="flex flex-col gap-5">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>
          <h3 class="font-display font-bold text-display-sm text-red-400">Problema</h3>
        </div>

        <p class="font-sans text-body-md text-foreground-muted leading-relaxed">
          Essa abordagem é fundamentalmente falha. Ao gerar código sem seguir princípios sólidos de arquitetura de software como componentização, separação de responsabilidades e reutilização de lógica, a Inteligência Artificial produz soluções frágeis e de difícil manutenção.
        </p>
        <p class="font-sans text-body-md text-foreground-muted leading-relaxed">
          Sem um contexto estruturado, o código gerado tende a se tornar repetitivo, ilegível e repleto de vulnerabilidades de segurança. Credenciais expostas, requisições sem validação e funções duplicadas são apenas alguns dos problemas recorrentes nesse modelo de desenvolvimento.
        </p>
        <p class="font-sans text-body-md text-foreground-muted leading-relaxed">
          O resultado é um projeto que aparenta funcionar no curto prazo, mas que rapidamente se transforma em um passivo técnico: difícil de escalar, de corrigir e de evoluir, tornando qualquer manutenção futura uma tarefa arriscada e custosa.
        </p>
      </div>

      <!-- Coluna direita: arquivo com erros -->
      <UiCodeFileError />

    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiBadge from '~/components/ui/Badge.vue'
import UiChatPrompt from '~/components/ui/ChatPrompt.vue'
import UiCodeFileError from '~/components/ui/CodeFileError.vue'
import { useReveal } from '~/composables/useReveal'

const el = ref<HTMLElement | null>(null)
const visible = useReveal(el)
</script>
