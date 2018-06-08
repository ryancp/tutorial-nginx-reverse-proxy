import Vue from 'vue'
import apolloProvider from '@/apollo';
import App from '@/App.vue'

Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
