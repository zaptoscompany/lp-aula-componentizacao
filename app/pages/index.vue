<template>
  <main class="bg-background text-foreground font-sans">
    <SectionsHero />
    <SectionsMethod />
    <SectionsVibeCoding />
    <SectionsMethodCoding />
    <SectionsPossibilities />
  </main>
</template>

<script setup lang="ts">
import SectionsHero from '~/components/sections/Hero.vue'
import SectionsMethod from '~/components/sections/Method.vue'
import SectionsVibeCoding from '~/components/sections/VibeCoding.vue'
import SectionsMethodCoding from '~/components/sections/MethodCoding.vue'
import SectionsPossibilities from '~/components/sections/Possibilities.vue'
</script>
