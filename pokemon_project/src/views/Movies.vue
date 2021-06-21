<template>
  <shell :activeIndex="activeIndex">
    <template #menu>
      <el-dropdown type="primary" size="medium" placement="bottom-start" @command="change_page">
        <el-button type="primary"  style="display:block;margin:0 auto;">想看啥呢?<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item,index in movies" :key="index" style="height:20px;display:flex;align-items:center;" :command="item.mid"><a :href="`#${item.mid}`" style="text-decoration: none;font-size: 15px;color: #000;">{{index+1}}、{{item.mtitle}}</a></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>   

    <template #main>
      <!-- 首页顶部图片 -->
      <div>
        <img src="https://cn.portal-pokemon.com/assets_c/2019/05/112a3c6c5a1424dd13080551461d2a5501a6f3d4-thumb-1280x458-13480.jpg" width="99%">
      </div>
      <!-- 手风琴内容 -->
      <div class="accordion">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item :id="item.mid" v-for="item,index in movies" :title="item.mtitle" :name="item.mid" :key="index">
            <img :src="item.mimg" width="70%" style="display:block;margin:0px auto;">
            <p style="font-size:17px">{{item.mcontent}}</p>
            <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">{{item.mtitle}}<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
          </el-collapse-item>              
        </el-collapse>
      </div>
    </template>
  </shell>    
</template>

<script>
import shell from "../components/Shell.vue";
export default {
  components:{shell},
  data() {
    return {
      activeIndex: "/movies",
      movies:[],
      activeName:1
    }
  },
  methods: {
    change_page(command){
      this.activeName = command;
    }
  },
  mounted() {
    //加载完成后获取服务器电影栏的信息
      this.axios.get(`/movies`).then(result=>{
      let movies = result.data.result;
      movies.forEach(item=>{
        item.mimg = require("../assets/movies/"+item.mimg)
      })
      this.movies = movies;
    })
  },
};
</script>