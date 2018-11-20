<template>
    <div class="todo-container">
        <div class="todo-wrap">
           <to-do-header></to-do-header>
           <to-do-list></to-do-list>
           <to-do-footer></to-do-footer>
        </div>
    </div>
</template>

<script>
    import header from "./todo-header.vue";
    import footer from "./todo-footer.vue";
    import list from "./todo-list.vue";

    export default {
        name: "app",
        components:{
            toDoHeader:header,
            toDoFooter:footer,
            toDoList:list
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