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
    users: [
      { id: 1, name: 'Rafael 001', completed: true },
      { id: 2, name: 'Rafael 002', completed: false },
      { id: 3, name: 'Rafael 003', completed: true },
      { id: 4, name: 'Rafael 004', completed: false },
      { id: 5, name: 'Rafael 005', completed: true },
      { id: 6, name: 'Rafael 006', completed: false},
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
    },
    tarefasIncompletas: function () {
      return this.users.filter((x) => !x.completed);
    }
  },
  methods: {
    mostrarTemp: function () {
      return this.mostrar = !this.mostrar;
    },
    loginTemp: function () {
      return this.login = !this.login; 
    },
    addUsers: function () {
      const id = this.users.length + 1;
      console.log("TCL: id", this.users.length)

      this.users.push({ id: id, name: 'Nome Add '+ id, completed: (id % 2) ? 'Completed' : 'Incompleted'})
    }

  }
});