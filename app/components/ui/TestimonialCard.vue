<template>
  <div class="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-background-muted hover:border-accent/20 transition-all duration-300">

    <!-- Aspas -->
    <svg class="w-6 h-6 text-accent/40 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>

    <!-- Texto -->
    <p class="font-sans text-body-md text-foreground-muted leading-relaxed flex-1">{{ text }}</p>

    <!-- Autor -->
    <div class="flex items-center gap-3 pt-2 border-t border-border">
      <div class="w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center flex-shrink-0 text-body-sm font-bold text-white"
        :class="avatarGradient">
        {{ initials }}
      </div>
      <div>
        <p class="font-display font-semibold text-body-sm text-foreground">{{ name }}</p>
        <p class="text-label-sm text-foreground-subtle">{{ role }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  role: string
  text: string
  avatarGradient?: string
}>()

const initials = computed(() =>
  props.name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
)
</script>
