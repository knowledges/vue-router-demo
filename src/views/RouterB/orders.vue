<template>
    <div class="jumbotron">
        <h1>orders</h1>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation"  class="active"><a v-link="{path:'/m/routeB/order/items',activeClass:'active'}" role="tab" data-toggle="tab">Home</a></li>
            <li role="presentation"><a v-link="{path:'/m/routeB/order/infos',activeClass:'active'}" role="tab" data-toggle="tab">Profile</a></li>
        </ul>
        <div class="tab-content">
            <router-view></router-view>
        </div>
    </div>
</template>