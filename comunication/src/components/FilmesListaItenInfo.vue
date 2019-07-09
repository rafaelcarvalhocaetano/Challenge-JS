<template>
  <div>
    <h2>Filme selecionado</h2>
    <div class="card" v-if="filme">
      <div class="card-body">
        <h5 class="card-title">TITULO: {{ filme.titulo}} ANO: {{ filme.ano}}</h5>
        <button @click="editar" class="btn btn-danger float-right">Editar</button>
      </div>
    </div>
    <p v-else>Nenhum Filme Selecionado</p>
  </div>
</template>

<script>

import { eventBus } from './../main';

export default {
  // props: {
  //   filme: Object
  // }
  data() {
    return {
      filme: undefined
    }
  },
  created() {
    eventBus.$on('selected', (item) => {
      this.filme = item;
    });
  },
  methods: {
    editar() {
      this.$emit('editarFilme', this.filme);
    }
  }
}
</script>

