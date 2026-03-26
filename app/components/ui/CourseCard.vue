<template>
  <div
    class="rounded-2xl border transition-all duration-300"
    :class="open ? 'border-accent/40 bg-background-muted' : 'border-border bg-background-muted hover:border-border-accent/30'"
  >
    <!-- Cabeçalho clicável -->
    <button
      class="w-full flex items-center gap-4 px-5 py-4 text-left"
      @click="open = !open"
    >
      <!-- Número -->
      <span class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-mono font-bold text-label-lg transition-colors"
        :class="open ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-background-elevated text-foreground-subtle border border-border'">
        {{ index }}
      </span>

      <!-- Título e contagem -->
      <div class="flex-1 min-w-0">
        <p class="font-display font-semibold text-body-lg text-foreground">{{ title }}</p>
        <p class="text-label-sm text-foreground-subtle mt-0.5">{{ modules.length }} {{ modules.length === 1 ? 'módulo' : 'módulos' }}</p>
      </div>

      <!-- Chevron -->
      <svg
        class="w-4 h-4 text-foreground-subtle flex-shrink-0 transition-transform duration-300"
        :class="open ? 'rotate-180 text-accent' : ''"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Módulos expansíveis -->
    <div
      class="overflow-hidden transition-all duration-300"
      :class="open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="px-5 pb-4 flex flex-col gap-2 border-t border-border pt-3">
        <div
          v-for="mod in modules"
          :key="mod.code"
          class="flex gap-3 p-3 rounded-xl bg-background-soft border border-border/50"
        >
          <span class="text-label-sm text-accent font-mono flex-shrink-0 mt-0.5">{{ mod.code }}</span>
          <div>
            <p class="text-body-sm text-foreground font-medium">{{ mod.title }}</p>
            <p class="text-body-sm text-foreground-muted mt-0.5 leading-relaxed">{{ mod.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  index: string | number
  title: string
  modules: { code: string; title: string; description: string }[]
}>()

const open = ref(false)
</script>
