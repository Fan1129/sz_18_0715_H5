<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="checkAll"/>
        </label>
        <span>
          <span>已完成 <i :style="iObj2">{{completedConut}}</i> </span>  ；全部 <i :style="iObj">{{todos.length}}</i>
        </span>
        <button class="btn btn-danger" @click="clear" v-show="completedConut">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: "todo-footer",
        props:["todos","selectdAll","clear"],
        data(){
            return{
                iObj:{
                    fontSize:"20px",
                    fontWeight:"500",
                    color:"green"
                },
                iObj2:{
                    fontSize:"20px",
                    fontWeight:"500",
                    color:"red"
                }
            }
        },
        computed:{
            checkAll:{
              get(){
                  return this.completedConut === this.todos.length && this.todos.length>0
              },
              set(val){
                  this.selectdAll(val)
              }
            },
            completedConut(){
               return this.todos.reduce((accumulator,currentValue)=>{
                     let step = currentValue.completed ? 1:0;
                     return accumulator + step
                },0)
            }
        }
    }
</script>

<style scoped lang="less">
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>