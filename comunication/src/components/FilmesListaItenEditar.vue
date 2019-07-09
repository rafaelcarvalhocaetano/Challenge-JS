<template>
  <div>
    <h2>Editar filme</h2>
    <div class="form-group">
      <label>Título:</label>
      <input type="text" class="form-control" placeholder="Insira o título"
      :value="filmeSelecionado.titulo"
      @input="filmeSelecionado = { propriedade: 'titulo', valor: $event.target.value }">
    </div>
     <div class="form-group">
      <label>Título: </label>
      <input type="text" class="form-control" placeholder="Insira o Ano"
      :value="filmeSelecionado.ano"
      @input="filmeSelecionado = { propriedade: 'ano', valor: $event.target.value }">
    </div>
    <button class="btn btn-primary float-right" @click="salvarFilme">Salvar</button>
  </div>
</template>

<script>

import { eventBus } from './../main';

export default {
  props: {
    filme: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      filmeLocal: this.filme
    }
  },
   computed: {
    filmeSelecionado: {
      get() {
        return this.filmeLocal = this.filme;
      },
      set(item) {
        this.filmeLocal = Object.assign({}, this.filmeLocal, { [item.propriedade]: item.valor })
      }
    }
  },
  methods: {
    salvarFilme(e) {
      // this.$emit('atualizarFilme', this.filmeLocal)
      eventBus.atualizarFilme(this.filmeLocal);
    }
  }
}
</script>
