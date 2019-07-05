// @ts-ignore

Vue.component('app-component', {
  template: '<h1>Teste de Componente com VUE</h1>'
})

new Vue({
  el: '#app',
  data: {
    aplicarClasse: false,
    mostrar: false,
    login: true,
    nomeDaClasse: '',
    nota: ''
  },
  computed: {
    classCSS: function () {
      return {
        azul: this.aplicarClasse,
        circulo: this.aplicarClasse,
        verde: !this.aplicarClasse
      }
    }
  },
  methods: {
    mostrarTemp: function () {
      return this.mostrar = !this.mostrar;
    },
    loginTemp: function () {
      return this.login = !this.login; 
    }
  }
});

