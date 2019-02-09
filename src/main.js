import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './components/App.vue'
import router from './router'
import '../style.scss'

Vue.use(VueSweetalert2)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
