<template>
  <button
    class="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-accent text-black font-semibold text-body-lg shadow-glow-accent hover:shadow-glow-soft hover:scale-105 transition-all duration-300"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
  scrollTo?: string
}>()

function handleClick() {
  if (props.scrollTo) {
    document.getElementById(props.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
