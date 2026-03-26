<template>
  <section
    ref="el"
    class="relative overflow-hidden bg-background py-24 px-6 transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >

    <!-- Fundo -->
    <div class="absolute inset-0 bg-gradient-dark" />
    <div class="absolute inset-0 bg-gradient-glow-green opacity-10" />
    <div class="absolute inset-0 bg-gradient-glow-blue opacity-15" />

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-12">

      <!-- Cabeçalho -->
      <div class="flex flex-col items-center text-center gap-5">
        <UiBadge text="Depoimentos" />
        <h2 class="font-display font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-foreground leading-tight">
          O que nossos alunos
          <span class="bg-gradient-accent-glow bg-clip-text text-transparent"> dizem</span>
        </h2>
      </div>

      <!-- Grid de cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <UiTestimonialCard
          v-for="t in testimonials"
          :key="t.name"
          :name="t.name"
          :role="t.role"
          :text="t.text"
          :avatar-gradient="t.avatarGradient"
        />
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiBadge from '~/components/ui/Badge.vue'
import UiTestimonialCard from '~/components/ui/TestimonialCard.vue'
import { useReveal } from '~/composables/useReveal'

const el = ref<HTMLElement | null>(null)
const visible = useReveal(el)

const testimonials = [
  {
    name: 'Lucas Ferreira',
    role: 'Empreendedor Digital',
    avatarGradient: 'from-accent/80 to-primary-600',
    text: 'Eu tentei aprender a criar apps por meses sem sair do lugar. Com o Método Componentização Extrema, em duas semanas eu já tinha minha primeira landing page no ar e vendendo. A lógica de pensar em componentes mudou completamente minha forma de trabalhar com IA.',
  },
  {
    name: 'Ana Paula Souza',
    role: 'Designer UX/UI',
    avatarGradient: 'from-pink-600 to-purple-700',
    text: 'Como designer, sempre tive medo de entrar no mundo do código. Esse método me mostrou que eu não preciso ser desenvolvedor para ter controle total sobre o que estou criando. Hoje entrego projetos completos usando IA com uma qualidade que nunca imaginei.',
  },
  {
    name: 'Rodrigo Mendes',
    role: 'Desenvolvedor Freelancer',
    avatarGradient: 'from-blue-600 to-cyan-600',
    text: 'O que me impressionou foi a qualidade do código gerado. Sem componentização, a IA gera uma bagunça. Com o método, cada componente sai limpo, reutilizável e fácil de manter. Minha produtividade triplicou e os clientes ficam impressionados com a entrega.',
  },
  {
    name: 'Mariana Costa',
    role: 'Criadora de Conteúdo',
    avatarGradient: 'from-orange-500 to-pink-600',
    text: 'Criei minha área de membros do zero em menos de uma semana. Antes eu pagava R$300/mês numa plataforma que não me deixava personalizar nada. Agora tenho controle total, pago muito menos e o resultado ficou muito mais bonito.',
  },
  {
    name: 'Felipe Nunes',
    role: 'Fundador de Startup',
    avatarGradient: 'from-violet-600 to-indigo-700',
    text: 'Validei meu SaaS com um MVP funcional em 3 dias. Sem o método, eu teria levado meses ou pago uma fortuna para uma agência. O módulo do Stripe foi especialmente valioso. Hoje já tenho assinantes pagantes e o negócio está crescendo.',
  },
  {
    name: 'Camila Ribeiro',
    role: 'Consultora de Marketing',
    avatarGradient: 'from-emerald-500 to-teal-700',
    text: 'Nunca pensei que criaria meus próprios apps. O método é absurdamente didático. Você entende o porquê de cada coisa, não só copia e cola prompt. Isso faz toda a diferença quando algo dá errado. Você sabe exatamente o que fazer.',
  },
]
</script>
