// @ts-nocheck
import Vue from 'vue'

// import VueContador from './Components/VueContador.vue';
import App from './App.vue';
// import Header from './Components/AppHeader';

// Vue.component('AppHeader', Header);

new Vue({
  render: x => x(App)
}).$mount('#app')
