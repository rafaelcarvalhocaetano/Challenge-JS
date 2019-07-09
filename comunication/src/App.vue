<template>
  <div id="app">
    <div class="jumbotron junbotron-fluid">
      <div class="container">
        <div class="display-4">Lista de Filmes</div>
        <p class="lead">Treinando comunicação entre componentes no VUE</p>
      </div>
    </div>

    <div class="container">
      <FilmesLista />
    </div>
  </div>
</template>

<script>

import FilmesLista from './components/FilmesLista';

export default {
  components: {
    FilmesLista
  }
};
</script>
