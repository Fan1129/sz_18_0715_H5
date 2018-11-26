export default {
  searchName(state,val){
    state.searchName = val
  },
  REQing(state){
    state.firstView =false;
    state.loading = true;
    state.users=[];
    state.errMsg="";
    state.emptyMsg=""
  },
  REQSuccess(state,users){
    state.users=users;
    state.loading = false;
  },
  REQSuccessEmpty(state){
    state.emptyMsg="查无此人";
    state.loading = false;
  },
  REQFail(state){
    state.errMsg ="请求失败";
    state.loading = false;
  }
}
