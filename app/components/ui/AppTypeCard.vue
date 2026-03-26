<template>
  <div class="group flex flex-col gap-3 p-5 rounded-2xl border border-border bg-background-muted hover:border-accent/40 hover:bg-background-elevated transition-all duration-300 hover:shadow-glow-soft cursor-default">
    <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
      :class="iconBg">
      <span v-html="icon" class="w-5 h-5 block [&>svg]:w-5 [&>svg]:h-5" />
    </div>
    <div>
      <p class="font-display font-semibold text-body-md text-foreground group-hover:text-accent transition-colors">{{ title }}</p>
      <p class="text-body-sm text-foreground-muted mt-0.5">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  iconBg?: string
}>()
</script>
