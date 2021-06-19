import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import moment from "moment"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import infiniteScroll from 'vue-infinite-scroll';
import VuevideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';

Vue.use(VuevideoPlayer);
 
Vue.use(infiniteScroll);
//引入axios
axios.defaults.baseURL="http://localhost:3000"
Vue.prototype.axios = axios;
Vue.config.productionTip = false

//在main.js中引入moment
Vue.prototype.moment=moment;

//引入elementui
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
