<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>
      <ul class="list-group list-group-flush">
        <!-- <FilmesListaIten filmeTitulo='Vingadores: A Guerra Chata'/>
        <FilmesListaIten filmeTitulo='Vingadores: A Morte do Homem de Ferro'/>
        <FilmesListaIten filmeTitulo='Vingadores: A Choradeira no Ciname'/> -->
        <!-- <FilmesListaIten v-for='(filme, i) in filmes' :key="i" :filmeTitulo='filme'/> -->

        <!-- <FilmesListaIten
          v-for="item in filmes" :key="item.id"
          :titulo="item.titulo"
          :ano="item.ano"
         /> -->

         <!-- <FilmesListaIten
          v-for="item in filmes" :key="item.id"
          v-bind="item"  /> -->

          <FilmesListaIten
            v-for="item in filmes" :key="item.id"
            :filme="item"
            :class="AplicarCss(item)"
            @selecionaFilme="filme_selected = $event" />

      </ul>
    </div>
    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo
        v-if="!isEdited"
        :filme="filme_selected"
        @editarFilme="editar"/>

      <FilmesListaItenEditar
        v-else
        :filme="filme_selected"/>
    </div>
  </div>
</template>
<script>
import { eventBus } from './../main';
import FilmesListaIten from './FilmesListaIten.vue';
import FilmesListaItenEditar from './FilmesListaItenEditar.vue';
import FilmesListaItenInfo from './FilmesListaItenInfo.vue';

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenEditar,
    FilmesListaItenInfo
  },
  data() {
    return {
      filmes: [
        {id: 1, titulo: 'Vinga 0001', ano: 2012},
        {id: 2, titulo: 'Vinga 0002', ano: 2013},
        {id: 3, titulo: 'Vinga 0003', ano: 2014},
        {id: 4, titulo: 'Vinga 0004', ano: 2015},
        {id: 5, titulo: 'Vinga 0005', ano: 2016}
      ],
      filme_selected: undefined,
      isEdited: false
    }
  },
  methods: {
    AplicarCss(filme) {
      return {
        active: this.filme_selected && this.filme_selected.id === filme.id
      }
    },
    editar(item) {
      this.isEdited = true;
      this.filme_selected = item;
    },
    atualizarFilmes(event) {
      const i = this.filmes.findIndex(x => x.id === e.id);
      // na posição i retire 1 objeto e adicione outro objeto
      this.splice(i, 1, e);
      this.filme_selected = undefined;
      this.isEdited = false;
    }
  },
  created() {
    eventBus.$on('selected', (item) => {
      this.filme_selected = item;
    });
    eventBus.$on('atualizarFilme', this.atualizarFilmes);
  }
}
</script>
