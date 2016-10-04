<template>
    <table>
           <thead>
               <tr>
                   <th>编号</th>
                   <th>名称</th>
                   <th>描述</th>
                   <th>状态</th>
                   <th>操作</th>
               </tr>
           </thead>
           <tbody>
           <tr>
               <td>1</td>
               <td>webpack</td>
               <td>自动化管理工具</td>
               <td></td>
               <td>
                   <a v-link="{path:'/m/routeB/order/items/1'}">查看</a>
               </td>
           </tr>
           <tr>
               <td>2</td>
               <td>vue.js</td>
               <td>自动化管理工具</td>
               <td></td>
               <td>
                   <a v-link="{path:'/m/routeB/order/items/2'}">查看</a>
               </td>
           </tr>
           </tbody>
       </table>
</template>
<style scoped>
    table{
        width: 100%;
    }
    table tr th,table tr td{
        border:1px solid #CCCCCC;
        width: 20%;
        text-align: center;
        padding: 5px;
    }
</style>