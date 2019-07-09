<template>
  <li class="list-group-item">
    <span>{{ filme.titulo }} - {{ filme.ano }}</span>
    <button @click="selecionar" class="btn btn-success float-right">Editar</button>
  </li>
</template>

<script>
export default {
  props: {
     filme: {
      type: Object,
      required: true
    }
    // titulo: {
    //   type: String,
    //   required: true
    //   },
    //   ano: {
    //     type: Number,
    //     required: true
    //   }
  },
  methods: {
    selecionar(e) {
      this.$emit('selected', this.filme)
    }
  }
  // computed: {
  //   filmesTituloConcatenado() {
  //     return `Titulo: ${this.titulo}`
  //   }
  // }
}
</script>

