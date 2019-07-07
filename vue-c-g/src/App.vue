<template>
  <div>
    <AppHeader />
    <AppComponent />
  </div>
</template>


<script>

import AppComponent from './Components/VueContador.vue';
import AppHeader from './Components/AppHeader.vue';

export default {
  components: {
    AppComponent,
    AppHeader
  }
}
</script>

