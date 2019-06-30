// @ts-ignore
new Vue({
  el: '#app',
  data: {
    aplicarClasse: false,
    mostrar: false,
    login: true,
    nomeDaClasse: '',
    nota: '',
    produtos: [
      {nome: 'MONITOR'},
      {nome: 'SSD 240'},
      {nome: 'SSD 500'},
      {nome: 'Teclado'},
      {nome: 'Mouse'}
    ],
    objetos: {
      Id: 1,
      Nome: 'Rafael',
      Work: 'Omnibees',
      Func: 'Front-End'
    }
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