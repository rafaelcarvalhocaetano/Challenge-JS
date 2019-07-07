import Vue from 'vue'

const data = {
  title: 'Contador VUE',
  contador: 0
}

Vue.component('rcc-comp', {
  // data: {
  //   title: 'Vue component Test'
  // },
  // data: function () {
  //   return {
  //     title: 'Teste Vue Component CLI'
  //   }
  // },
  data: function () {
    return data;
  },
  methods: {
    incrementa: function () {
      return this.contador ++;
    },
    decrementa: function () {
      return this.contador --;
    }
  },
  template: `
  <div>
    <h1>{{ contador }}</h1>
    <button @click="incrementa">( + )</button>
    <button @click="decrementa">( - )</button>
  </div>
  `
})
new Vue({
  el: '#app'
});
