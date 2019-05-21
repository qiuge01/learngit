<template>
    <div>
        <van-nav-bar title="购物车" left-text="返回" @click-left="$router.go(-1)" left-arrow>
        <van-icon name="search" slot="right">
        </van-icon></van-nav-bar>
        <h1>购物车</h1>
        <p v-for="(item,index) in goods" :key="index">{{item.name}}--{{item.num}}</p>
    </div>
</template>
<script>
// 导入mapstate方法
import {mapState} from 'vuex';
//01 插件第一步   导入插件
import { NavBar,Icon} from 'vant';
export default {
    computed:{
        ...mapState(["goods"])
    },
    components:{
        // 02 注册插件
       [NavBar.name]:NavBar,
       //vant-nav-bar:NavBar
       //es 属性动态设置写法
       [Icon.name]:Icon,
   },
}
</script>
<style>

</style>
