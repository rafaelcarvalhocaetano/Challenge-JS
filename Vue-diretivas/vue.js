// const data = () => {
// console.log(' teste ')
// this.$ref.ms.innerHtml = 'Teste 00002'
// }

// @ts-ignore
new Vue({
  el: '#app',
  data: {
    meuTitulo: 'Vue'
  },
  methods: {
    alterar: function () {
      this.$refs.ms.innerText = 'Novo Titulo';
    }
  }
})

const vm2 = new Vue({
  template: '<h1>Teste de TEMPLATE </h1>'
})

vm2.$mount('#app2')