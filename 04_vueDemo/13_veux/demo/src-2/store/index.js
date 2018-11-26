import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex) //给所有的vue实例 绑上了一个属性$store
const store = new Vuex.Store({
  state:{
    count:0,
    firstName:"T",
    lastName:"mac"
  },
  getters:{
    fullName(state){
      return state.firstName +"-"+ state.lastName
    },
    flag(state){
      return state.count%2 ===0 ? "偶数":"鸡数"
    }
  },
  mutations:{
    inc(state,{step,msg}){
      console.log(msg)
      state.count +=step
    },
    dec(state,step){
      state.count +=step
    },
    incAsync(state,step){
      state.count+=step;
    }
  },
  actions:{
    incAsync(store,step){
      setTimeout(()=>{
        store.commit("incAsync",step)
      },2000)
    }
  }
})

export default store
