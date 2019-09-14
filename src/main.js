import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueRouter from 'vue-router'
import router from "./router"
import axios from 'axios'
import VueHead from 'vue-head'

Vue.use(VueHead)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')