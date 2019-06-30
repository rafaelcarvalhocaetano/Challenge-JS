// @ts-ignore
new Vue({
  el: '#app',
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