<template>
  <span class="inline-flex items-center gap-2 px-3 py-1.5 md:px-6 md:py-2.5 rounded-full border border-accent/50 bg-background text-accent font-semibold text-[0.6rem] md:text-sm tracking-wide text-center">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
