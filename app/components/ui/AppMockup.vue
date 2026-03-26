<template>
  <div class="relative w-full rounded-2xl border border-border bg-background-soft overflow-hidden shadow-glow-soft p-5 flex flex-col gap-4">

    <!-- Navbar -->
    <div class="flex items-center justify-between px-3 py-2 rounded-xl bg-background-muted border border-border">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded bg-primary-600/40 border border-primary-600/30" />
        <div class="w-16 h-2.5 rounded-full bg-foreground-subtle/30" />
      </div>
      <!-- Nav links -->
      <div class="hidden sm:flex items-center gap-3">
        <div class="w-10 h-2 rounded-full bg-foreground-subtle/20" />
        <div class="w-10 h-2 rounded-full bg-foreground-subtle/20" />
        <div class="w-10 h-2 rounded-full bg-foreground-subtle/20" />
      </div>
      <!-- Button -->
      <div class="w-16 h-6 rounded-lg bg-accent/20 border border-accent/30" />
    </div>

    <!-- Hero area -->
    <div class="flex gap-4 items-center px-1">
      <!-- Texto left -->
      <div class="flex-1 flex flex-col gap-2.5">
        <div class="w-3/4 h-2.5 rounded-full bg-foreground-subtle/30" />
        <div class="w-full h-2 rounded-full bg-foreground-subtle/20" />
        <div class="w-5/6 h-2 rounded-full bg-foreground-subtle/20" />
        <div class="w-4/6 h-2 rounded-full bg-foreground-subtle/20" />
        <div class="flex gap-2 mt-1">
          <div class="w-16 h-5 rounded-lg bg-foreground-subtle/20" />
          <div class="w-16 h-5 rounded-lg bg-foreground-subtle/15" />
        </div>
      </div>

      <!-- Componente destacado (caixa verde pontilhada) -->
      <div class="flex-1 aspect-[16/9] rounded-xl border-2 border-dashed border-accent/60 bg-accent/5 flex items-center justify-center">
        <div class="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30" />
      </div>
    </div>

    <!-- Cards grid -->
    <div class="grid grid-cols-3 gap-3 px-1">
      <div
        v-for="i in 3"
        :key="i"
        class="rounded-xl bg-background-muted border border-border aspect-video flex flex-col justify-between p-2.5"
      >
        <div class="w-6 h-6 rounded-lg bg-primary-700/40 border border-primary-700/30" />
        <div class="flex flex-col gap-1.5">
          <div class="w-3/4 h-1.5 rounded-full bg-foreground-subtle/25" />
          <div class="w-1/2 h-1.5 rounded-full bg-foreground-subtle/15" />
        </div>
      </div>
    </div>

  </div>
</template>
