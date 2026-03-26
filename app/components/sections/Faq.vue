<template>
  <section
    ref="el"
    class="relative overflow-hidden bg-background py-24 px-6 transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >

    <!-- Fundo -->
    <div class="absolute inset-0 bg-gradient-dark" />
    <div class="absolute inset-0 bg-gradient-glow-blue opacity-10" />
    <div class="absolute inset-0 bg-gradient-glow-green opacity-10" />

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-12">

      <!-- Cabeçalho -->
      <div class="flex flex-col items-center text-center gap-5">
        <UiBadge text="Dúvidas Frequentes" />
        <h2 class="font-display font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-foreground leading-tight">
          Ficou alguma
          <span class="bg-gradient-accent-glow bg-clip-text text-transparent"> dúvida?</span>
        </h2>
      </div>

      <!-- Lista de perguntas -->
      <div class="flex flex-col gap-3 w-full">
        <UiFaqItem
          v-for="item in faqs"
          :key="item.question"
          :question="item.question"
          :answer="item.answer"
        />
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiBadge from '~/components/ui/Badge.vue'
import UiFaqItem from '~/components/ui/FaqItem.vue'
import { useReveal } from '~/composables/useReveal'

const el = ref<HTMLElement | null>(null)
const visible = useReveal(el)

const faqs = [
  {
    question: 'Como tenho acesso ao curso?',
    answer: 'Os dados de login e senha são enviados para o seu e-mail logo após a confirmação do pagamento.',
  },
  {
    question: 'Qual é o tempo de acesso ao curso?',
    answer: 'Você tem acesso ao conteúdo completo por 1 ano a partir da data de compra.',
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Você tem 7 dias para acessar a plataforma e solicitar o reembolso integral caso o curso não atenda às suas expectativas. Sem perguntas, sem burocracia.',
  },
  {
    question: 'Preciso saber programar para fazer o curso?',
    answer: 'Não. O curso foi desenvolvido para quem quer criar aplicativos e sites usando Inteligência Artificial, independentemente de experiência com código.',
  },
  {
    question: 'Quando o conteúdo é liberado?',
    answer: 'Por ser um pré-lançamento, os módulos são liberados progressivamente conforme as gravações são finalizadas. Você já tem acesso ao conteúdo disponível desde o primeiro dia.',
  },
  {
    question: 'O curso recebe atualizações?',
    answer: 'Sim. Todas as atualizações futuras do curso são incluídas sem custo adicional durante o período de acesso.',
  },
]
</script>
