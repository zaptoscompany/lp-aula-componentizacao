<template>
  <button class="group relative w-full overflow-hidden rounded-2xl bg-gradient-accent px-8 py-5 font-display font-bold text-black text-body-xl shadow-glow-accent hover:shadow-glow-soft hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]">
    <!-- Shimmer -->
    <span class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
    <span class="relative flex items-center justify-center gap-3">
      <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
      {{ label }}
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>
