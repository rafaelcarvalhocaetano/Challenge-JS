// @ts-ignore
new Vue({
  el: '#app',
  data: {
    textInfo: 'Life Cycle Hooks'
  },
  methods: {
    mudar: function () {
      return this.textInfo = 'Alterar Texto';
    },
    destruir: function () {
      this.$destroy();
    }
  },
  beforeCreate: function () {
    console.log(' LC 00 1 - beforeCreate')
  },
  created: function () {
    console.log(' LC 00 2 - created')
  },
  beforeMount: function () {
    console.log(' LC 00 3 - beforeMount');
  },
  mounted: function () {
    console.log(' LC 00 989 - mounted');
  },
  beforeUpdate: function () {
    console.log(' LC 00 4 - beforeUpdate')
  },
  update: function () {
    console.log(' LC 00 5 - Update')
  },
  beforeDestroy: function () {
    console.log(' LC 00 6 - beforeDestroy');
  },
  destroyed: function () {
    console.log(' LC 00 7 - destroyed')
  }
})
new Vue({
  el: '#app1',
  data: {
    aplicarClasse: false,
    nomeDaClasse: ''
  },
  computed: {
    classCSS: function () {
      return {
        azul: this.aplicarClasse,
        circulo: this.aplicarClasse,
        verde: !this.aplicarClasse
      }
    }
  }
});