<template>
  <div class="relative w-full max-w-3xl mx-auto">

    <!-- Glow de fundo -->
    <div class="absolute -inset-4 bg-gradient-glow-green opacity-20 blur-2xl rounded-3xl pointer-events-none" />
    <div class="absolute -inset-4 bg-gradient-glow-blue opacity-20 blur-2xl rounded-3xl pointer-events-none" />

    <!-- Container principal -->
    <div class="relative rounded-2xl border border-border bg-background-muted overflow-hidden shadow-glow-soft">

      <!-- Barra superior estilo editor -->
      <div class="flex items-center gap-2 px-4 py-3 bg-background-soft border-b border-border">
        <span class="w-3 h-3 rounded-full bg-primary-600" />
        <span class="w-3 h-3 rounded-full bg-primary-700" />
        <span class="w-3 h-3 rounded-full bg-primary-800" />
        <span class="ml-3 text-label-sm text-foreground-subtle font-mono tracking-wide">{{ title }}</span>
      </div>

      <!-- Vídeo -->
      <div class="relative w-full aspect-video bg-background">
        <iframe
          :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`"
          :title="title"
          class="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  videoId: string
  title?: string
}>()
</script>
