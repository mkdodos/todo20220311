import Vue from 'vue'
// import App from './App.vue'
// import App from './components/GetData.vue'
import App from './components/view/Money.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
