import Vue from 'vue'
import App from './App.vue'
import CateEnum from './model/CateEnum'
import ItemData from './model/ItemData'
import ActionHelper from './store/ActionHelper'
import store from './store'
import Category from './model/CateEnum'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// let ah = new ActionHelper()
// // // console.log(ah.memoList)

// let newItem = new ItemData(-1,Category.Study,"fuck the world 2")
// newItem.id = ah.add(newItem)
// newItem.id = ah.add(newItem)
//  console.log(newItem)
