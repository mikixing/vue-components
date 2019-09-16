import Vue from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/style.css'

Vue.config.productionTip = false
// TODO: 新建一个vue对象
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
