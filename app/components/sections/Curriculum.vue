<template>
  <section
    ref="el"
    class="relative overflow-hidden bg-background py-24 px-6 transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >

    <!-- Fundo -->
    <div class="absolute inset-0 bg-gradient-dark" />
    <div class="absolute inset-0 bg-gradient-glow-blue opacity-20" />
    <div class="absolute inset-0 bg-gradient-glow-green opacity-10" />

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-12">

      <!-- Cabeçalho -->
      <div class="flex flex-col items-center text-center gap-5">
        <UiBadge text="Conteúdo do Curso" />
        <h2 class="font-display font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-foreground leading-tight">
          Tudo o que você vai
          <span class="bg-gradient-accent-glow bg-clip-text text-transparent"> aprender</span>
        </h2>
        <p class="font-sans text-body-lg text-foreground-muted max-w-xl leading-relaxed">
          Do zero absoluto até a publicação de um SaaS completo, com projetos reais e IA do seu lado.
        </p>
      </div>

      <!-- Cards do curso -->
      <div class="w-full flex flex-col gap-3">
        <UiCourseCard
          v-for="section in curriculum"
          :key="section.index"
          :index="section.index"
          :title="section.title"
          :modules="section.modules"
        />
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiBadge from '~/components/ui/Badge.vue'
import UiCourseCard from '~/components/ui/CourseCard.vue'
import { useReveal } from '~/composables/useReveal'

const el = ref<HTMLElement | null>(null)
const visible = useReveal(el)

const curriculum = [
  {
    index: '01',
    title: 'Fundamentos Teóricos',
    modules: [
      {
        code: '1.0',
        title: 'Introdução',
        description: 'Visão geral sobre frameworks modernos, como funcionam os servidores, a anatomia de um aplicativo, dicas de empreendedorismo digital e boas práticas de desenvolvimento.',
      },
    ],
  },
  {
    index: '02',
    title: 'Componentização Extrema',
    modules: [
      {
        code: '2.1',
        title: 'Setup Inicial',
        description: 'Instalação e configuração do ambiente de desenvolvimento: Git, Node.js, editor de código e demais ferramentas essenciais.',
      },
      {
        code: '2.2',
        title: 'Componentização com Nuxt',
        description: 'Fundamentos do Nuxt: instalação, sistema de componentização, propriedades, eventos, reatividade e muito mais.',
      },
      {
        code: '2.3',
        title: 'Versionamento de Código',
        description: 'Controle de versão com Git e GitHub: commits, branches, pull requests e colaboração em projetos reais.',
      },
      {
        code: '2.4',
        title: 'Caixa Rápido com IA',
        description: 'Criação ágil de sites e landing pages com IA para venda imediata — projetos sem backend que podem ser entregues em um único dia.',
      },
    ],
  },
  {
    index: '03',
    title: 'Projetos Práticos',
    modules: [
      {
        code: '3.1',
        title: 'Sistema de Cadastro com Auth',
        description: 'Construção de um sistema de cadastro completo com operações CRUD e autenticação via Supabase.',
      },
      {
        code: '3.2',
        title: 'Sistema de Agendamento',
        description: 'Desenvolvimento de uma aplicação mais elaborada: um sistema de agendamento integrado ao Supabase.',
      },
    ],
  },
  {
    index: '04',
    title: 'Backend e Assinaturas',
    modules: [
      {
        code: '4.1',
        title: 'Supabase Auth',
        description: 'Autenticação completa com Supabase: cadastro, login, recuperação de senha, sessão e proteção de rotas.',
      },
      {
        code: '4.2',
        title: 'Supabase Escala',
        description: 'Recursos avançados do Supabase: views, funções, otimização de consultas e boas práticas de performance.',
      },
      {
        code: '4.3',
        title: 'Supabase Segurança',
        description: 'Segurança em banco de dados: Row Level Security (RLS), JWT, políticas de acesso e proteção de dados.',
      },
      {
        code: '4.4',
        title: 'Stripe',
        description: 'Integração com a API do Stripe para gerenciar planos, assinaturas e pagamentos recorrentes no seu SaaS.',
      },
    ],
  },
  {
    index: '05',
    title: 'Publicação e Manutenção',
    modules: [
      {
        code: '5.1',
        title: 'Vercel',
        description: 'Deploy profissional na Vercel: configuração de domínio próprio, variáveis de ambiente e pipeline de publicação contínua.',
      },
    ],
  },
  {
    index: '06',
    title: 'Projeto Final do Curso',
    modules: [
      {
        code: '6.1',
        title: 'SaaS do Zero ao Deploy',
        description: 'Projeto integrador: construção de um SaaS completo do início ao fim, aplicando tudo o que foi aprendido ao longo do curso.',
      },
    ],
  },
]
</script>
