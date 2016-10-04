<template>
    <div class="container-fluid body">
        <header class="row">
            <nav class="navbar navbar-default">
                <div class="col-md-8">
                    <div class="navbar-header">
                        <a v-link="{path:'/m'}" class="navbar-brand">
                            Brand
                        </a>
                    </div>
                    <div class="collapse navbar-collapse">
                        <bar class="nav navbar-nav">
                            <bar-item path="/m" label="首页"></bar-item>
                            <bar-item path="/m/routeA/order" label="路由A"></bar-item>
                            <bar-item path="/m/routeB/order/items" label="路由B"></bar-item>
                        </bar>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </div>
                    <bar class="nav navbar-nav">
                        <bar-item path="/login" label="登录"></bar-item>
                        <bar-item path="/logout" label="注册"></bar-item>
                    </bar>
                </div>
            </nav>
        </header>
        <router-view></router-view>
        <footer>
            <div class="row text-center">我是尾巴</div>
        </footer>
    </div>
</template>
<script>
    import Bar from './components/Bar.vue'
    import BarItem from './components/BarItem.vue'
    import config from './config'
    import $ from 'jquery'
    export default {
        route:{
            data({to,next}){}
        },
        ready(){},
        data(){},
        components:{
            Bar,
            BarItem
        }
    }
</script>
<style scoped>
    [v-cloak] {
        display: none;
    }
    nav{
        margin-bottom: 0!important;
    }

    .v-link-active{
        background:#f1f2f3;
    }
</style>