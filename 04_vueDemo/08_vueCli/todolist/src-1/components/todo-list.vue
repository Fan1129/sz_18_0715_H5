<template>
    <ul class="todo-main">
        <item v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :index="index" :deleteToDo="deleteToDo"></item>
    </ul>
</template>

<script>
import item from './todo-item.vue'
export default {
  name: 'todo-list',
  components: {
    item
  },
  props: {
    todos: {
      type: Array,
      required: true
    },
    deleteToDo:{
      type:Function
    }
  }
}
</script>

<style scoped lang="less">
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>
