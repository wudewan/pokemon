import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import moment from "moment"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import bus from './bus';
//引入axios
Vue.prototype.axios = axios;
Vue.config.productionTip = false

//在main.js中引入moment
Vue.prototype.moment=moment;

//引入elementui
Vue.use(ElementUI);

//引入bus
Vue.prototype.bus = bus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
