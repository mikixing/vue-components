import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router';
import '@/assets/style.css'

Vue.prototype.ajax = axios
Vue.config.productionTip = false
// TODO: 新建一个vue对象
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
