import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'

// Style
import './assets/style.css'

// Plugins
import './plugins/bootstrap-vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
