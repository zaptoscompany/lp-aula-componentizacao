<template>
  <section class="relative overflow-hidden bg-background min-h-screen flex items-center">

    <!-- Camadas de fundo -->
    <div class="absolute inset-0 bg-gradient-dark" />
    <div class="absolute inset-0 bg-gradient-glow-blue opacity-20" />
    <div class="absolute inset-0 bg-gradient-glow-green opacity-10" />

    <!-- Grade decorativa -->
    <div class="absolute inset-0 opacity-[0.03]"
      style="background-image: linear-gradient(#e8eef8 1px, transparent 1px), linear-gradient(90deg, #e8eef8 1px, transparent 1px); background-size: 48px 48px;" />

    <!-- Orbes decorativos -->
    <div class="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-900/40 blur-3xl pointer-events-none" />
    <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary-950/60 blur-3xl pointer-events-none" />

    <!-- Conteúdo -->
    <div class="relative z-10 w-full max-w-4xl mx-auto px-6 py-32 text-center">

      <!-- Badge -->
      <UiBadge text="Método Componentização Extrema" class="mb-8" />

      <!-- Título principal -->
      <h1 class="font-display font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] text-foreground leading-tight mb-6">
        Crie seu SaaS com IA em até
        <span class="relative inline-block">
          <span class="bg-gradient-accent-glow bg-clip-text text-transparent">10x mais rápido</span>
          <span class="absolute -bottom-1 left-0 w-full h-px bg-gradient-accent opacity-60" />
        </span>
        <span class="text-foreground-muted font-bold"> sem programar</span>
      </h1>

      <!-- Subtítulo -->
      <p class="font-sans text-body-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-16">
        Desenvolva aplicativos com Inteligência Artificial de forma
        <span class="text-foreground font-medium">segura</span>,
        <span class="text-foreground font-medium">escalável</span>
        com total controle sobre seu código.
      </p>

      <!-- Video Player -->
      <UiVideoPlayer
        video-id="q4LWg80u6aw"
        title="Veja como funciona"
        class="mb-10"
      />

      <!-- CTA -->
      <UiButtonAction text="Começar Agora" scroll-to="checkout" />

    </div>

  </section>
</template>

<script setup lang="ts">
import UiBadge from '~/components/ui/Badge.vue'
import UiVideoPlayer from '~/components/ui/VideoPlayer.vue'
import UiButtonAction from '~/components/ui/ButtonAction.vue'
</script>
