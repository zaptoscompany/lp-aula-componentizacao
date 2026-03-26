<template>
  <div class="w-full rounded-2xl border border-red-900/40 bg-background-soft overflow-hidden shadow-card font-mono text-xs">

    <!-- Barra do arquivo -->
    <div class="flex items-center justify-between px-4 py-2.5 bg-background-muted border-b border-red-900/30">
      <div class="flex items-center gap-2">
        <svg class="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
        <span class="text-foreground-muted">AppGestao.vue</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="flex items-center gap-1 text-red-400">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
          24
        </span>
        <span class="flex items-center gap-1 text-yellow-500">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
          17
        </span>
      </div>
    </div>

    <!-- Corpo do código -->
    <div class="overflow-hidden max-h-[420px] overflow-y-auto scrollbar-hide">
      <table class="w-full border-collapse">
        <tbody>
          <tr v-for="line in lines" :key="line.n" :class="line.err ? 'bg-red-950/20' : line.warn ? 'bg-yellow-950/10' : ''">
            <!-- Gutter -->
            <td class="w-8 text-right pr-3 py-0.5 text-foreground-subtle/40 select-none border-r border-border/30 align-top">
              {{ line.n }}
            </td>
            <!-- Indicador -->
            <td class="w-4 px-1 align-top py-0.5">
              <span v-if="line.err" class="text-red-500 text-[10px]">●</span>
              <span v-else-if="line.warn" class="text-yellow-500 text-[10px]">●</span>
            </td>
            <!-- Código -->
            <td class="pl-2 py-0.5 align-top whitespace-pre">
              <span :class="line.err ? 'text-red-300 underline decoration-red-500 decoration-wavy underline-offset-2' : line.warn ? 'text-yellow-200' : 'text-foreground-muted/70'">{{ line.code }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Barra de status -->
    <div class="flex items-center gap-4 px-4 py-2 bg-background-muted border-t border-red-900/30 text-[10px]">
      <span class="text-red-400 flex items-center gap-1">
        <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
        24 errors
      </span>
      <span class="text-yellow-500 flex items-center gap-1">
        <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
        17 warnings
      </span>
      <span class="text-foreground-subtle ml-auto">Ln 847, Col 3</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const lines = [
  { n:   1, code: '<template>',                                                          err: false, warn: false },
  { n:   2, code: '  <div>',                                                             err: false, warn: false },
  { n:   3, code: '    <!-- TODO: refatorar esse componente enorme -->',                 err: false, warn: true  },
  { n:   4, code: '    <div v-if="user" @click="fetchData(); salvar(); enviar()">',      err: true,  warn: false },
  { n:   5, code: '      <h1>{{ titulo }}</h1>',                                         err: false, warn: false },
  { n:   6, code: '      <p>{{ descricao }}</p>',                                        err: false, warn: false },
  { n:   7, code: '      <button @click="fetch(\'http://api.com/\' + id + token)">',    err: true,  warn: false },
  { n:   8, code: '        Salvar',                                                      err: false, warn: false },
  { n:   9, code: '      </button>',                                                     err: false, warn: false },
  { n:  10, code: '      <div v-for="item in items">',                                   err: true,  warn: false },
  { n:  11, code: '        <p>{{ item.nome }}</p>',                                      err: false, warn: false },
  { n:  12, code: '        <p>{{ item.valor }}</p>',                                     err: false, warn: false },
  { n:  13, code: '        <p>{{ item.status }}</p>',                                    err: false, warn: false },
  { n:  14, code: '        <p>{{ item.data }}</p>',                                      err: false, warn: false },
  { n:  15, code: '        <button @click="deletar(item)">x</button>',                  err: true,  warn: false },
  { n:  16, code: '      </div>',                                                        err: false, warn: false },
  { n:  17, code: '    </div>',                                                          err: false, warn: false },
  { n:  18, code: '  </div>',                                                            err: false, warn: false },
  { n:  19, code: '</template>',                                                         err: false, warn: false },
  { n:  20, code: '',                                                                    err: false, warn: false },
  { n:  21, code: '<' + 'script setup>',                                                err: false, warn: false },
  { n:  22, code: "import axios from 'axios'",                                           err: false, warn: true  },
  { n:  23, code: "import { ref, onMounted, watch, computed,",                           err: true,  warn: false },
  { n:  24, code: "  watchEffect, nextTick } from 'vue'",                               err: false, warn: false },
  { n:  25, code: '',                                                                    err: false, warn: false },
  { n:  26, code: 'const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5..."',                        err: true,  warn: false },
  { n:  27, code: 'const API   = "http://192.168.1.105:3000"',                          err: true,  warn: false },
  { n:  28, code: 'const senha = ref("admin123")',                                       err: true,  warn: false },
  { n:  29, code: '',                                                                    err: false, warn: false },
  { n:  30, code: 'let titulo = ref()',                                                  err: true,  warn: false },
  { n:  31, code: 'let descricao = ref()',                                               err: false, warn: true  },
  { n:  32, code: 'let items = ref([])',                                                 err: false, warn: false },
  { n:  33, code: 'let user = ref()',                                                    err: false, warn: true  },
  { n:  34, code: 'let id = ref()',                                                      err: false, warn: true  },
  { n:  35, code: 'let token = ref()',                                                   err: false, warn: true  },
  { n:  36, code: 'let data = ref()',                                                    err: false, warn: false },
  { n:  37, code: 'let status = ref()',                                                  err: false, warn: false },
  { n:  38, code: '',                                                                    err: false, warn: false },
  { n:  39, code: 'async function fetchData() {',                                       err: false, warn: false },
  { n:  40, code: '  const res = await axios.get(API + "/dados/" + id)',               err: true,  warn: false },
  { n:  41, code: '  items.value = res.data',                                           err: false, warn: false },
  { n:  42, code: '  titulo.value = res.data.titulo',                                   err: false, warn: false },
  { n:  43, code: '  descricao.value = res.data.descricao',                             err: false, warn: false },
  { n:  44, code: '  status.value = res.data.status',                                   err: false, warn: false },
  { n:  45, code: '  data.value = res.data.data',                                       err: false, warn: false },
  { n:  46, code: '}',                                                                   err: false, warn: false },
  { n:  47, code: '',                                                                    err: false, warn: false },
  { n:  48, code: '// COPIEI DO COMPONENTE ANTERIOR — REVISAR',                         err: false, warn: true  },
  { n:  49, code: 'async function salvar() {',                                          err: false, warn: false },
  { n:  50, code: '  await axios.post(API + "/salvar", {',                              err: true,  warn: false },
  { n:  51, code: '    titulo: titulo.value,',                                          err: false, warn: false },
  { n:  52, code: '    descricao: descricao.value,',                                    err: false, warn: false },
  { n:  53, code: '    senha: senha.value,',                                            err: true,  warn: false },
  { n:  54, code: '    token: TOKEN',                                                   err: true,  warn: false },
  { n:  55, code: '  })',                                                               err: false, warn: false },
  { n:  56, code: '}',                                                                  err: false, warn: false },
  { n:  57, code: '',                                                                    err: false, warn: false },
  { n:  58, code: '// DUPLICADO — igual à função salvar()',                             err: false, warn: true  },
  { n:  59, code: 'async function enviar() {',                                          err: false, warn: false },
  { n:  60, code: '  await axios.post(API + "/enviar", {',                              err: true,  warn: false },
  { n:  61, code: '    titulo: titulo.value,',                                          err: false, warn: false },
  { n:  62, code: '    senha: senha.value,',                                            err: true,  warn: false },
  { n:  63, code: '    token: TOKEN',                                                   err: true,  warn: false },
  { n:  64, code: '  })',                                                               err: false, warn: false },
  { n:  65, code: '}',                                                                  err: false, warn: false },
  { n:  66, code: '',                                                                    err: false, warn: false },
  { n:  67, code: 'async function deletar(item: any) {',                               err: false, warn: true  },
  { n:  68, code: '  await axios.delete(API+"/del/"+item.id+"?token="+TOKEN)',          err: true,  warn: false },
  { n:  69, code: '}',                                                                  err: false, warn: false },
  { n:  70, code: '',                                                                    err: false, warn: false },
  { n:  71, code: 'onMounted(() => { fetchData(); salvar() })',                         err: true,  warn: false },
  { n:  72, code: "watch(items, () => { fetchData() })",                                err: true,  warn: false },
  { n:  73, code: "watchEffect(() => { fetchData(); enviar() })",                       err: true,  warn: false },
  { n:  74, code: '</' + 'script>',                                                     err: false, warn: false },
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
