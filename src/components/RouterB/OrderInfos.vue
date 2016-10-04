<template>
    <div class="jumbotron">
        <h1>orders info ID</h1>
        <h2> 查看具体内容 items_id : {{items}}</h2>
        <a href="javascript:history.back()" class="btn btn-primary">返回</a>
    </div>
</template>
<script>
    export default {
        route:{
            data({to}){
                this.items = to.params.items;
            }
        },
        data(){
            return {
                items:""
            }
        }
    }
</script>