import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router';
import '@/assets/iconfont.css'
import CreateAPI from 'vue-create-api'
import Matte from './views/matte/index.vue'
import Message from './views/message/index.vue'
import MessageBox from './views/messageBox/index.vue'
import Calendar from './views/calendar/index.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ElementUI);

Vue.use(CreateAPI)
Vue.createAPI(Matte, true)
Vue.createAPI(Message, true)
Vue.createAPI(MessageBox, true)
Vue.createAPI(Calendar, true)
Vue.prototype.ajax = axios
Vue.config.productionTip = false

// Matte.$create().show()
// setTimeout(function () {
//   Matte.$create().hide()
// }, 2000)
// TODO: 新建一个vue对象
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
