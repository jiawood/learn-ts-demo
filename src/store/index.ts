import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper'

// 注册vuex到vue里面
Vue.use(Vuex)

//创建并导入vuex的仓库对象 state 共享对象和数据 mutations共享方法
export default new Vuex.Store({
  state: {
    aHelper:new ActionHelper(),
    isShow:false,
    transMemo:null,
    filterCateId:-1
  },
  mutations: {
    showEditMemo(state: any, editMemo: any){
      this.transMemo = editMemo
      state.isShow = true
    }
  },
  actions: {
  },
  modules: {
  }
})
