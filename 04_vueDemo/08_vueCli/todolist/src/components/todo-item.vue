<template>
    <li @mouseenter="handleMouse(true)" @mouseleave="handleMouse(false)" :style="bgobj">
        <label>
            <slot :todo="todo">
              <input type="checkbox" v-model="todo.completed"/>
            </slot>
            <span>{{todo.text}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteToDo">删除</button>
    </li>
</template>

<script>
  import PubSub from "pubsub-js";
    export default {
        name: "todo-item",
        props:["todo","index"],
        data(){
            return{
                bgobj:{
                  background:"white"
                },
                isShow:false
            }
        },
        methods:{
            handleMouse(isEnter){
                if(isEnter){
                    this.bgobj.background="pink"
                    this.isShow = true;
                }else {
                    this.bgobj.background="white"
                    this.isShow = false;
                }
            },
            deleteToDo(){
                //确认一下
                if(confirm(`🐶你真的要删除 --> ${this.todo.text} <-- 嘛？`)){
                    // this.bus.$emit("deleteToDo",this.index)
                    PubSub.publish('deleteToDo', this.index);
                }
            }
        }
    }
</script>

<style scoped lang="less">
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>
