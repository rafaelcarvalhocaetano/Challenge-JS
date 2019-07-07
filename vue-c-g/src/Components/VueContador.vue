<template>
  <div>
    <h2>{{ contador }}</h2>
    <button @click="incrementa"> ( + ) </button>
    <button @click="decrementa"> ( - ) </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      contador: 0
    }
  },
  methods: {
    incrementa () {
      return this.contador ++;
    },
    decrementa () {
      return this.contador --;
    }
  }
}
</script>

