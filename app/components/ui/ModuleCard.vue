<template>
  <div class="group flex flex-col rounded-xl border border-border bg-background-muted overflow-hidden hover:border-accent/40 hover:shadow-glow-soft transition-all duration-300 cursor-default">

    <!-- Topo com gradiente e número -->
    <div class="relative h-24 flex items-center justify-center"
      :class="gradient">
      <span class="font-mono font-bold text-[2rem] text-white/10 select-none">{{ code }}</span>
      <span class="absolute bottom-3 left-3 font-mono text-label-sm font-bold px-2 py-0.5 rounded-md bg-black/30 text-white/70">
        {{ code }}
      </span>
    </div>

    <!-- Conteúdo -->
    <div class="flex flex-col gap-1.5 p-3 flex-1">
      <p class="font-display font-semibold text-body-sm text-foreground group-hover:text-accent transition-colors leading-snug">
        {{ title }}
      </p>
      <p class="text-[0.7rem] text-foreground-muted leading-relaxed line-clamp-3">
        {{ description }}
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  code: string
  title: string
  description: string
  gradient?: string
}>()
</script>
