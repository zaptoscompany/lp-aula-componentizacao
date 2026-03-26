<template>
  <div class="w-full max-w-xl rounded-2xl border border-border bg-background-soft overflow-hidden shadow-card">

    <!-- Barra superior -->
    <div class="flex items-center justify-between px-4 py-3 border-b border-border bg-background-muted">
      <div class="flex items-center gap-2">
        <div class="w-2.5 h-2.5 rounded-full bg-primary-600/60" />
        <div class="w-2.5 h-2.5 rounded-full bg-primary-700/60" />
        <div class="w-2.5 h-2.5 rounded-full bg-primary-800/60" />
      </div>
      <span class="text-label-sm text-foreground-muted font-mono">{{ title }}</span>
      <div class="w-12" />
    </div>

    <!-- Área de texto -->
    <div class="px-4 py-5 flex flex-col gap-4">

      <!-- Mensagem do usuário -->
      <p class="text-body-md text-foreground leading-relaxed text-left">
        {{ text }}<span class="cursor-blink">|</span>
      </p>

      <!-- Resposta da IA -->
      <div class="flex flex-col gap-2 pl-3 border-l-2 border-accent/40">
        <span class="text-label-sm text-accent font-mono flex items-center gap-1.5">
          <span class="dot-pulse" />
          Gerando código...
        </span>
        <div class="flex flex-col gap-1.5">
          <div class="w-full h-1.5 rounded-full bg-accent/10 overflow-hidden">
            <div class="h-full bg-accent/40 rounded-full code-progress" />
          </div>
          <div class="w-4/5 h-1.5 rounded-full bg-accent/10 overflow-hidden">
            <div class="h-full bg-accent/30 rounded-full code-progress" style="animation-delay: 0.2s" />
          </div>
          <div class="w-3/5 h-1.5 rounded-full bg-accent/10 overflow-hidden">
            <div class="h-full bg-accent/20 rounded-full code-progress" style="animation-delay: 0.4s" />
          </div>
        </div>
      </div>

      <!-- Rodapé estilo chat -->
      <div class="flex items-center justify-between gap-3 pt-3 border-t border-border mt-2">
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 rounded bg-background-elevated border border-border" />
          <span class="text-label-sm text-foreground-subtle font-mono">prompt.txt</span>
        </div>
        <button class="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
          <svg class="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>

<style scoped>
.cursor-blink {
  display: inline-block;
  color: #00DC82;
  font-weight: 300;
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.dot-pulse {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #00DC82;
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
}

.code-progress {
  animation: progress 1.8s ease-in-out infinite;
}

@keyframes progress {
  0%   { width: 0%; }
  60%  { width: 100%; }
  100% { width: 100%; }
}
</style>
