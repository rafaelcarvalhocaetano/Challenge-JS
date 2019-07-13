<template>
  <div>
    <h2>Sobre</h2>
    <p v-if="autor">Autor: {{ autor }}</p>
    <input type="text" v-model="autor">
  </div>
</template>

<script>
export default {
  data () {
    return {
      autor: ''
    }
  },
  created() {
    console.log(' log 001')
  },
  destroyed() {
    console.log(' log destroy 002')
  },
  activated() {
    console.log(' activated live C hooks')
  },
  destroyed() {
    console.log(' destroyed')
  }
}
</script>
