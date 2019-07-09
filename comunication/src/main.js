// @ts-nocheck
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods: {
    selecionaFilme(item) {
      this.$emit('selected', item);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');
