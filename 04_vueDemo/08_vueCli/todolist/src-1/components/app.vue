<template>
    <div class="todo-container">
        <div class="todo-wrap">
           <to-do-header :addToDo="add"></to-do-header>
           <to-do-list :todos="todos" :deleteToDo="deleteToDo"></to-do-list>
           <to-do-footer :todos="todos" :selectdAll="selectdAll" :clear="clear"></to-do-footer>
        </div>
    </div>
</template>

<script>
import header from './todo-header.vue'
import footer from './todo-footer.vue'
import list from './todo-list.vue'

export default {
  name: 'app',
  components: {
    toDoHeader: header,
    toDoFooter: footer,
    toDoList: list
  },
  data () {
    return {
      todos: [
        {text: '吃饭22', completed: false, id: 1},
        {text: '睡觉', completed: true, id: 2},
        {text: '学猪叫', completed: true, id: 3},
        {text: '玩晓飞', completed: false, id: 4},
        {text: '吃猪脚', completed: false, id: 5}
      ]
    }
  },
  methods: {
    add (todo) {
      this.todos.unshift(todo)
    },
    deleteToDo (index) {
      this.todos.splice(index, 1)
    },
    selectdAll (flag) {
      this.todos.forEach((todo) => {
        todo.completed = flag
      })
    },
    clear () {
      this.todos = this.todos.filter((todo) => {
        return !todo.completed
      })
    }
  }
}
</script>

<style scoped lang="less">
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
