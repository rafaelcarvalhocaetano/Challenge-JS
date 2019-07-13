<template>
  <div id="app">
    <h1>Componentes</h1>
    <button @click="componentSelecionado = 'HOME'">HOME</button>
    <button @click="componentSelecionado = 'PostLista'">PostLista</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>
    <button @click="componentSelecionado = 'Assincrono'">Assincrono</button>
    <button @click="componentSelecionado = 'Contato'">Contato</button>
  <!-- **include** mantem o componente em cach -->
  <!-- **exclude** retira o componente do cach -->
  <!-- Trabalha com expressões regulares /Home|Sobre/ -->
  <!-- *** MAX='2' *** mante no cach a quantidade de componentes que foi 
       adicionado na estrutura de pilha retirando sempre o mais antigo -->

    <keep-alive :include="'Sobre'">
      <component
      :is="componentSelecionado"
      v-bind="propsAtual"
      >
      </component>
    </keep-alive>

  </div>
</template>
<script>

import Home from './components/Home';
import PostLista from './components/PostLista';
import Sobre from './components/Sobre';
import { Promise } from 'q';

const Contato = {
  render: (h) => h({
    name: 'ANONINO_COMP',
    template: '<h1>Componente Anonimo</h1>'
  })
}

export default {
  components: {
    Assincrono: () => ({
      // component: import('./components/Assincrono.vue'),
      component: new Promise((resolve, reject) => {
        setTimeout(() => {
          // resolve(import('./components/Assincrono'))
          reject(import('./components/Assincrono'))
        }, 2000);
      }),
      loading: { template: '<h2>Loading ...... </h2>'},
      error: { template: '<p> Template de Erro sendo renderizado </p>'},
      delay: 200,
      timeout: 3000
    }),
    Contato,
    Home,
    PostLista,
    Sobre
  },
  data() {
    return {
      componentSelecionado: 'HOME'
    }
  }
}
</script>