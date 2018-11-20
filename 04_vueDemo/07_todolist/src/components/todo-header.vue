<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="handleKeyUp" v-model.trim="text"/>
    </div>
</template>

<script>
    let key =6;
    export default {
        name: "todo-header",
        data(){
            return{
                text:""
            }
        },
        methods:{
            handleKeyUp(){
                //拿到输入内容
                const text = this.text;
                //检查
                if(!text){
                    alert("必须输入内容");
                    return;
                }
                //封装一个对象
                const todo={
                    id:key++,
                    text,
                    completed:false
                }
                console.log(todo)
                //塞入todos中
                this.$emit("addToDo",todo)
                //清空输入框
                this.text=""
            }
        }
    }
</script>

<style scoped lang="less">
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>