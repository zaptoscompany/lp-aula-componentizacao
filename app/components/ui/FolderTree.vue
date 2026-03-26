<template>
  <div class="w-full rounded-2xl border border-border bg-background-soft overflow-hidden shadow-card font-mono text-xs">

    <!-- Barra superior -->
    <div class="flex items-center gap-2 px-4 py-3 bg-background-muted border-b border-border">
      <div class="w-2.5 h-2.5 rounded-full bg-primary-600/60" />
      <div class="w-2.5 h-2.5 rounded-full bg-primary-700/60" />
      <div class="w-2.5 h-2.5 rounded-full bg-primary-800/60" />
      <span class="ml-2 text-foreground-subtle">projeto/</span>
      <span class="ml-auto text-accent/60">{{ active.name }}</span>
    </div>

    <!-- Painel dividido -->
    <div class="flex min-h-[260px]">

      <!-- Árvore -->
      <div class="w-44 flex-shrink-0 border-r border-border p-2 flex flex-col gap-0.5">
        <TreeItem :depth="0" type="folder" name="app" :open="true" />
        <TreeItem :depth="1" type="folder" name="components" :open="true" />
        <TreeItem
          v-for="f in files.filter(f => f.folder === 'components')"
          :key="f.name"
          :depth="2" :type="f.type" :name="f.name"
          :active="active.name === f.name"
          @click="active = f"
        />
        <TreeItem :depth="1" type="folder" name="composables" :open="true" />
        <TreeItem
          v-for="f in files.filter(f => f.folder === 'composables')"
          :key="f.name"
          :depth="2" :type="f.type" :name="f.name"
          :active="active.name === f.name"
          @click="active = f"
        />
        <TreeItem :depth="1" type="folder" name="pages" :open="true" />
        <TreeItem
          v-for="f in files.filter(f => f.folder === 'pages')"
          :key="f.name"
          :depth="2" :type="f.type" :name="f.name"
          :active="active.name === f.name"
          @click="active = f"
        />
      </div>

      <!-- Preview de código -->
      <div class="flex-1 p-3 overflow-auto">
        <div class="flex flex-col gap-0.5">
          <div
            v-for="(line, i) in active.code"
            :key="i"
            class="flex gap-3 leading-5"
          >
            <span class="w-4 text-right text-foreground-subtle/30 select-none flex-shrink-0">{{ i + 1 }}</span>
            <span v-html="line || '&nbsp;'" class="whitespace-pre" />
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TreeItem from '~/components/ui/TreeItem.vue'

type FileEntry = {
  name: string
  folder: string
  type: 'vue' | 'ts'
  code: string[]
}

const kw  = (s: string) => `<span class="text-purple-400">${s}</span>`
const fn  = (s: string) => `<span class="text-blue-300">${s}</span>`
const str = (s: string) => `<span class="text-green-300">${s}</span>`
const tag = (s: string) => `<span class="text-red-300">${s}</span>`
const cm  = (s: string) => `<span class="text-foreground-subtle/50">${s}</span>`
const ac  = (s: string) => `<span class="text-accent">${s}</span>`
const tx  = (s: string) => `<span class="text-foreground-muted">${s}</span>`

const files: FileEntry[] = [
  {
    name: 'BaseButton.vue',
    folder: 'components',
    type: 'vue',
    code: [
      tag('&lt;template&gt;'),
      `  ${tag('&lt;button')} ${ac('@click')}=${str('"emit(\'click\')"')}`,
      `    ${kw(':class')}=${str('"props.variant"')}&gt;`,
      `    {{ ${tx('label')} }}`,
      `  ${tag('&lt;/button&gt;')}`,
      tag('&lt;/template&gt;'),
      '',
      `${kw('defineProps')}&lt;{`,
      `  ${tx('label')}: ${ac('string')}`,
      `  ${tx('variant')}?: ${ac('string')}`,
      `}&gt;()`,
      '',
      `${kw('const')} emit = ${fn('defineEmits')}([${str("'click'")}])`,
    ],
  },
  {
    name: 'BaseInput.vue',
    folder: 'components',
    type: 'vue',
    code: [
      tag('&lt;template&gt;'),
      `  ${tag('&lt;input')}`,
      `    ${ac(':value')}=${str('"modelValue"')}`,
      `    ${ac('@input')}=${str('"emit(\'update:modelValue\', $event.target.value)"')}`,
      `  ${tag('/&gt;')}`,
      tag('&lt;/template&gt;'),
      '',
      `${kw('defineProps')}&lt;{`,
      `  ${tx('modelValue')}: ${ac('string')}`,
      `  ${tx('placeholder')}?: ${ac('string')}`,
      `}&gt;()`,
      '',
      `${kw('const')} emit = ${fn('defineEmits')}([${str("'update:modelValue'")}])`,
    ],
  },
  {
    name: 'useCustomer.ts',
    folder: 'composables',
    type: 'ts',
    code: [
      `${kw('import')} { ${tx('ref')} } ${kw('from')} ${str("'vue'")}`,
      '',
      `${kw('export function')} ${fn('useCustomer')}() {`,
      `  ${kw('const')} ${tx('form')} = ${fn('ref')}({ ${tx('name')}: ${str("''")} })`,
      '',
      `  ${cm('// função principal')}`,
      `  ${kw('async function')} ${fn('save')}() {`,
      `    ${kw('await')} ${fn('$fetch')}(${str("'/api/customers'")}, {`,
      `      ${tx('method')}: ${str("'POST'")},`,
      `      ${tx('body')}: ${tx('form')}.value,`,
      `    })`,
      `  }`,
      '',
      `  ${kw('return')} { ${tx('form')}, ${fn('save')} }`,
      `}`,
    ],
  },
  {
    name: 'index.vue',
    folder: 'pages',
    type: 'vue',
    code: [
      `${kw('import')} ${tx('BaseButton')} ${kw('from')} ${str("'~/components/BaseButton.vue'")}`,
      `${kw('import')} ${tx('BaseInput')}  ${kw('from')} ${str("'~/components/BaseInput.vue'")}`,
      `${kw('import')} { ${fn('useCustomer')} } ${kw('from')} ${str("'~/composables/useCustomer'")}`,
      '',
      `${kw('const')} { ${tx('form')}, ${fn('save')} } = ${fn('useCustomer')}()`,
      '',
      tag('&lt;template&gt;'),
      `  ${tag('&lt;div&gt;')}`,
      `    ${tag('&lt;BaseInput')} ${ac('v-model')}=${str('"form.name"')} ${tag('/&gt;')}`,
      `    ${tag('&lt;BaseButton')}`,
      `      ${ac('@click')}=${str('"save"')}`,
      `      ${ac('label')}=${str('"Salvar"')}`,
      `    ${tag('/&gt;')}`,
      `  ${tag('&lt;/div&gt;')}`,
      tag('&lt;/template&gt;'),
    ],
  },
]

const active = ref<FileEntry>(files[3])
</script>
