import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/initialize.css'
Vue.config.productionTip = false
import cardList from './components/card_list.vue'
Vue.component('card-list', cardList)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
