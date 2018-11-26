import axios from "axios"
export default {
  async Search({commit,state}){
    //发请求中的状态
    commit("REQing");


    //发请求
    const url = `https://api.github.com/search/users?q=${state.searchName}`
    try {
      const res = await  axios.get(url)
      const users = res.data.items;
      if(users.length){
        commit("REQSuccess",users)
      }else {
        commit("REQSuccessEmpty")
      }

    }catch (e) {
      commit("REQFail")
    }
  }
}
