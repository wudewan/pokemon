<template>
    <shell :activeIndex="activeIndex">
          <!-- 侧边栏内容 -->
          <template #menu>
            <ul style="list-style: none">
              <li><a href="#animate">1、宝可梦动画</a></li>
              <li><a href="#game">2、宝可梦游戏</a></li>
              <li><a href="#difference">3、动画和游戏的区别 </a></li>
            </ul>
          </template>

          <!-- 主页内容 -->
          <template #main>
            <div class="d3">
              <!-- 文字介绍 -->
              <div class="intr" v-html="index.intr">                
              </div>
              <!-- 顶部轮播图 -->
              <div class="carousel">
                <ul>
                  <li v-for="(value, i) in arr_image3" :key="i">
                    <img :src="value"/>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 动漫简介 -->
            <div class="overview" id="animate" v-html="index.animate"></div>
            <!-- 游戏简介 -->
            <div class="game" id="game" v-html="index.game"></div>
            <!-- 动画和游戏的区别 -->
            <div class="difference" id="difference" v-html="index.differences"></div>
          </template>
    </shell>
</template>

<script>
import shell from '../components/Shell.vue';
export default {
  components:{ shell },
  data() {
    return {
      activeIndex: "/",
      arr_image1: [],
      arr_image2: [],
      arr_image3: [],
      index:{}
    };
  },
  methods: {
  },
  mounted() {
    //获取所有宝可梦图片
    this.axios.get("/pokemon").then(result=>{
      let pokemon = result.data.result;
      pokemon.forEach(item=>{
        if(item.purl != null){
          item.purl = require("../assets/img/"+item.purl);
        }
      });
      this.arr_image1 = pokemon.map(item=>{
        return item.purl;
      });
      this.arr_image2 = pokemon.map(item=>{
        return item.purl;
      })
      this.arr_image3 = this.arr_image1.concat(this.arr_image2);
    })

    //获取所有首页页面文字信息
    this.axios.get("/index").then(result=>{
      this.index = result.data.result[0];
      console.log(this.index);
    })
  },
};
</script>