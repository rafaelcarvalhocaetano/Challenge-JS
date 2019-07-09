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
            @selected="filme_selected = $event" />

      </ul>
    </div>
    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo
        v-if="!isEdited"
        :filme="filme_selected"
        @editarFilme="editar(filme)"/>

      <FilmesListaItenEditar
        v-else
        :filme="filme_selected"/>
    </div>
  </div>
</template>
<script>
import FilmesListaIten from './FilmesListaIten.vue';
import FilmesListaItenInfo from './FilmesListaItenInfo.vue';
import FilmesListaItenEditar from './FilmesListaItenEditar.vue';

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
    FilmesListaItenEditar
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
      console.log("TCL: AplicarCss -> filme", filme)
      return {
        active: this.filme_selected && this.filme_selected.id === filme.id
      }
    },
    editar(item) {
      console.log("TCL: editar -> filme", item)
      this.isEdited = true;
      this.filme_selected = item;
    }
  }
}
</script>
