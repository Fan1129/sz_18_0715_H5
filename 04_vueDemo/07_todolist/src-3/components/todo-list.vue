<template>
    <ul class="todo-main">
        <item v-for="todo in todos" :key="todo.id" :todo="todo"></item>
    </ul>
</template>

<script>
    import item from "./todo-item.vue";
    export default {
        name: "todo-list",
        components:{
            item
        },
        props:{
            todos:{
                type:Array,
                required:true
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