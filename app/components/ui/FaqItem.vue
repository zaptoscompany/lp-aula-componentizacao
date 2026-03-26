<template>
  <div
    class="rounded-2xl border border-border bg-background-muted transition-all duration-300"
    :class="open ? 'border-accent/30' : 'hover:border-border-accent/20'"
  >
    <button
      class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      @click="open = !open"
    >
      <span class="font-display font-semibold text-body-lg text-foreground">{{ question }}</span>
      <svg
        class="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300"
        :class="open ? 'rotate-45' : ''"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
      </svg>
    </button>
    <div
      class="overflow-hidden transition-all duration-300"
      :style="open ? `max-height: ${contentHeight}px; opacity: 1` : 'max-height: 0; opacity: 0'"
    >
      <div ref="content" class="px-6 pb-5">
        <p class="font-sans text-body-md text-foreground-muted leading-relaxed">{{ answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  question: string
  answer: string
}>()

const open = ref(false)
const content = ref<HTMLElement | null>(null)
const contentHeight = ref(0)

onMounted(() => {
  if (content.value) {
    contentHeight.value = content.value.scrollHeight
  }
})
</script>
