import Vue from 'vue'
import Vuex from 'vuex'
// 1 导入axios
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods:[{name:'小米8'},{name:'小米9'},{name:'小米电视42'}]
  },
  mutations: {
    initGoods:function(state,data){
      state.goods = data;
      //  发起ajax请求？
    },
    addToCart:function(state,data){
      // 如果 state里面的goods 里面有data
      var ind = null;
      state.goods.forEach((item,index)=>{
        if(item.name==data.name){
          ind = index;
          // 查出试第几个重复的
          state.goods[index].num=parseInt(state.goods[index].num);
          state.goods[index].num++  
          console.log(item.num,"item.num")
          // num++ 
          if(item.num>item.buy_limit){
            alert("最多购买"+item.buy_limit+"件")
            state.goods[index].num= state.goods[index].buy_limit
            // 如果超过了最大购买数量 就恩格卢最大购买值
          }
          state.goods.splice(index,1,item);
          // 触发getter更新
          
        }
      })
      //如果没有重复就添加
      if(ind==null){
        console.log(data,"data");
        state.goods.unshift(data);
      }
      // this.getters.cartNum();
     
      
    }
  },
  actions: {
    getGoods:function(context){
      // 获取到接口数据
      axios.get("http://biger.applinzi.com/cart.php")
      .then(res=>{
        // 调用mutations  初始化goods
        context.commit("initGoods",res.data)
      })
    }

  },
  getters:{  
    cartNum:function(state){
      var n =0;
      state.goods.forEach(item=>{
        n+=parseInt(item.num);
      })
      console.log(n)
      return n;
    }
  }
})
