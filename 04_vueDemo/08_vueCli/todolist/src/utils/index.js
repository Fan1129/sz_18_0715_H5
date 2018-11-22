const key = "todosKey";
const key2 = "flagsKey";

export default {
  saveTodo(todo){
    localStorage.setItem(key,JSON.stringify(todo))
  },
  readTodo(){
    return JSON.parse(localStorage.getItem(key)||"[]")
  },

  saveFlag(flag){
    localStorage.setItem(key2,JSON.stringify(flag))
  },
  readFlag(){
    return JSON.parse(localStorage.getItem(key2)||"0")
  }
}
