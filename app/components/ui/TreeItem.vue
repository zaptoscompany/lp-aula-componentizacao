<template>
  <div
    class="flex items-center gap-1.5 py-0.5 rounded px-1 transition-colors cursor-pointer"
    :class="active ? 'bg-accent/10 text-accent' : 'hover:bg-background-muted/50'"
    :style="{ paddingLeft: `${depth * 16 + 4}px` }"
  >
    <!-- Ícone -->
    <span class="flex-shrink-0 w-4 text-center">
      <!-- Folder -->
      <svg v-if="type === 'folder'" class="w-3.5 h-3.5 text-primary-400 inline" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
      </svg>
      <!-- Vue file -->
      <svg v-else-if="type === 'vue'" class="w-3.5 h-3.5 text-green-400 inline" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 3h3.5L12 14.5 18.5 3H22L12 20 2 3z"/>
      </svg>
      <!-- TS file -->
      <svg v-else-if="type === 'ts'" class="w-3.5 h-3.5 text-blue-400 inline" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm10 10v-1h-4V9H7v3H5v1h2v4h2v-4h4zm2-4h2v8h-2v-3h-1v3h-2V9h2v3h1V9z"/>
      </svg>
      <!-- JSON file -->
      <svg v-else-if="type === 'json'" class="w-3.5 h-3.5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 3h2v2H5v5a2 2 0 01-2 2 2 2 0 012 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 00-2-2H0v-2h1a2 2 0 002-2V5a2 2 0 012-2zm14 0c1.07.27 2 .9 2 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2z"/>
      </svg>
    </span>

    <!-- Nome -->
    <span :class="type === 'folder' ? 'text-foreground-muted' : 'text-foreground-subtle'">
      {{ name }}
    </span>

    <!-- Badge ok -->
    <span v-if="badge && type !== 'folder'" class="ml-auto text-[9px] text-accent/70 border border-accent/30 rounded px-1 py-px">
      ok
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  depth: number
  type: 'folder' | 'vue' | 'ts' | 'json'
  name: string
  open?: boolean
  badge?: boolean
  active?: boolean
}>()
</script>
