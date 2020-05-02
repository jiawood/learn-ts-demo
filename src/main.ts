import Vue from 'vue'
import App from './App.vue'
import CateEnum from './model/CateEnum'
import ItemData from './model/ItemData'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

