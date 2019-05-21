<template>
  <div class="home ">

    <!-- 顶部栏 -->
    <div class="bar-header row">
      <a href="" class="logo pa">
       <img width="32" src="./../assets/images/logo.png" alt="">
      </a>
      <div  class="col">
       <input type="text" class="bo">
      </div>
      <span class="btn pa">用户</span>
    </div>

    <!-- 次顶部栏 -->
    <div class="sub-header scollH no-wrap">
      <!-- 渲染tabs数据到页面 -->
      <span  class="pa" v-for="item in tabs" :key="item.page_id">{{item.name}}</span>
    </div>

    <!-- 内容区域 -->
    <div class="full has-subHeader">
      <swiper v-bind:gallery="gallery" v-if="gallery.length"></swiper>
      <div class="row">
        <div class="col" v-for="item in subNav1" :key="item.material_id">
          <img :src="item.img_url" width="100%" alt="">
        </div>
      </div>
       <div class="row">
        <div class="col" v-for="item in subNav2" :key="item.material_id">
          <img :src="item.img_url" width="100%" alt="">
        </div>
      </div>
    </div>
    <!-- 3.3调用swiper -->
    <!-- v-if galery.length 有长度（有数据才显示） -->
    
  </div>
</template>

<script>
//3.1 导入swiper组件
import swiper from './../components/swiper'
export default {
  name: 'home',
  data(){
    return {
      // 定义tabs 数据
      tabs:[],
      // 定义gallery数据 幻灯片图片信息
      gallery:[],
      subNav1:[],
      subNav2:[],
    }
  },
  created(){
    this.getPage();
  },
  methods:{
    getPage(){
      this.$http.get("https://biger.applinzi.com/page.php")
      .then(res=>{
        console.log(res.data);
        // 当ajax获取数据后重新赋值tabs
        this.tabs = res.data.data.tabs;
        this.gallery = res.data.data.data.sections[0].body.items;
        this.subNav1 =  res.data.data.data.sections[1].body.items;
         this.subNav2 =  res.data.data.data.sections[2].body.items;
        console.log(this.gallery)
      })
    },
  },
  //3.2 注册swiper组件
  components:{
    swiper,
  }
}
</script>
<style>
  
</style>