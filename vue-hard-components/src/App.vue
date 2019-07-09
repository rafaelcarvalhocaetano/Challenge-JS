<template>
  <div id="app">
    <Post>
      <h2 slot="header">Teste H2</h2>
      <template slot="body">
      <p>Componentes de Slot</p>
      <span>.....</span>
      </template>
      <p  slot="footer">Footer</p>
    </Post>
    <Post titulo="Via Props"/>
  </div>
</template>
<script>

import Post from './components/Post'

export default {
  components: {
    Post
  }
}
</script>