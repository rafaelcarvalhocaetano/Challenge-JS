import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.component('Assincrono', (resolver, reject) => {
//   setTimeout(() => {
//     resolver({
//       template: '<h2>Componente Assicrono </h2>'
//     })
//   }, 2000);
// })

// Vue.component(
//   'Assincrono',
//   () => import('./components/Assincrono.vue')
//   // () => import('./components/Assincrono.vue').then(() => console.log(' data componente')).catch(e => console.log(' erro ', e))
//   )
new Vue({
  render: h => h(App),
}).$mount('#app')
