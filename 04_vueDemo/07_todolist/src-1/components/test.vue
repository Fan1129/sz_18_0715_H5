<template>
    <p>{{msg}}</p>
</template>

<script>
    export default {
        name: "test",
        data(){
            return {
                msg:"hello webpack from 组件---"
            }
        }
    }
</script>

<style scoped lang="less">
    p{
        background: pink;
    }
</style>