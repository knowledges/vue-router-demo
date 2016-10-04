<template>
    <div class="row">
        <div class="col-md-4">
            <div class="list-group">
                <a v-link="{path:'/m/routeA/order',activeClass:'active'}" class="list-group-item">订单<span class="badge">14</span></a>
                <a v-link="{path:'/m/routeA/add',activeClass:'active'}" class="list-group-item">添加订单<span class="badge">2</span></a>
                <a v-link="{path:'/m/routeA/list',activeClass:'active'}" class="list-group-item">订单列表<span class="badge">7</span></a>
            </div>
        </div>
        <div class="col-md-8">
            <router-view></router-view>
        </div>
    </div>
</template>