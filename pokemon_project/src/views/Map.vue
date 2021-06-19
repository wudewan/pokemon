<template>
  <div class="map">
    <el-container class="container1">
      <!-- 首页侧边栏 -->
      <el-aside width="18%">
        <div class="d1">
          <!-- 头部图片 -->
          <div class="aside_header">
            <img src="../assets/img/header.png" />
          </div>
          <!-- 菜单栏,包括搜索查询框和条件查询框 -->
          <div class="menu">
           <el-input size="medium" style="width:80%" placeholder="通过编号或名字查找" v-model="input" @change="search"></el-input>
           <el-select v-model="value" filterable placeholder="请选择" size="medium" @change="sorting" style="margin-top:20px;width:80%">
              <el-option
                v-for="item,i in options"
                :key="i"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <!-- 尾部照片 -->
          <div>
            <img
              src="https://s1.52poke.wiki/wiki/thumb/6/60/%E6%9C%80%E5%88%9D%E7%9A%84%E4%BC%99%E4%BC%B4.png/200px-%E6%9C%80%E5%88%9D%E7%9A%84%E4%BC%99%E4%BC%B4.png"
              alt=""
            />
          </div>
        </div> 
      </el-aside>

      <el-container class="container2">
        <!-- 首页头部 -->
        <el-header>
            <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            background-color="#333844"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            >
              <el-row>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <el-menu-item index="/" class="el-icon-edit"
                    >首页</el-menu-item
                  >
                </el-col>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <el-menu-item index="/map" class="el-icon-bicycle"
                    >图鉴</el-menu-item
                  >
                </el-col>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <el-menu-item index="/video" class="el-icon-video-play"
                    >视频</el-menu-item
                  >
                </el-col>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <el-menu-item
                    index="/shopping"
                    class="el-icon-shopping-cart-2"
                    >周边商城</el-menu-item
                  >
                </el-col>
                <!-- 登录/注册 -->
                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                  <el-button type="primary">登录</el-button>
                </el-col>
                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                  <el-button type="primary" plain>注册</el-button>
                </el-col>
              </el-row>
          </el-menu>
        </el-header>

        <!-- 首页内容 -->
        <el-main>
          <!-- 按编号从小到大排列 -->
          <div class="picture" v-show="is_show1">
            <el-row>
              <el-col
                :xs="6"
                :sm="6"
                :md="6"
                :lg="6"
                :xl="6"
                v-for="item,i in pokemon"
                :key="i"
              >
                <div class="photo_frame" :style="{height:height}">
                  <span class="number">{{item.pid}}</span>
                  <span class="pname">{{item.pname}}</span>
                  <div class="d2"><img src="https://cn.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" class="bg"/></div> 
                  <img :src="item.purl" class="pk"/>
                  <div class="attribute"></div>
                  <img :src="item.pattr" alt="" class="attribute_img">                 
                </div>
              </el-col>
            </el-row>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="pageCount" :current-page="page_number" @current-change="get_page_1">
            </el-pagination>
          </div>

          <!-- 按编号从大到小排列 -->
          <div class="picture" v-show="is_show2">
            <el-row>
              <el-col
                :xs="6"
                :sm="6"
                :md="6"
                :lg="6"
                :xl="6"
                v-for="item,i in pokemon"
                :key="i">
                <div class="photo_frame" :style="{height:height}">
                  <span class="number">{{item.pid}}</span>
                  <span class="pname">{{item.pname}}</span>
                  <div class="d2"><img src="https://cn.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" class="bg"/></div> 
                  <img :src="item.purl" class="pk"/>
                  <div class="attribute"></div>
                  <img :src="item.pattr" alt="" class="attribute_img">                 
                </div>
              </el-col>
            </el-row>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="pageCount" :current-page="page_number" @current-change="get_page_2">
            </el-pagination>
          </div>

          <!-- 按输入框搜索的内容显示相应的宝可梦 -->
          <div class="picture" v-show="is_show3">
            <el-row>
              <el-col
                :xs="6"
                :sm="6"
                :md="6"
                :lg="6"
                :xl="6"
                >
                <div class="photo_frame" :style="{height:height}">
                  <span class="number">{{search_pokemon[0].pid}}</span>
                  <span class="pname">{{search_pokemon[0].pname}}</span>
                  <div class="d2"><img src="https://cn.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" class="bg"/></div> 
                  <img :src="search_pokemon[0].purl" class="pk"/>
                  <div class="attribute"></div>
                  <img :src="search_pokemon[0].pattr" class="attribute_img" :style="{height:height}">                 
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 回到顶部 -->
          <el-backtop style="background-color: transparent">
            <img
              src="https://s1.52poke.wiki/wiki/thumb/c/ca/%E5%AF%B6%E5%8F%AF%E5%A4%A2%E5%9C%96%E9%91%91_SM.png/75px-%E5%AF%B6%E5%8F%AF%E5%A4%A2%E5%9C%96%E9%91%91_SM.png"
              alt=""
            />
          </el-backtop>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/map",           //当前所显示的导航栏
      height:"",                     //动态设置相框的高度
      pokemon:[],                    //保存请求回来的数据库pokemon表中的数据
      input:"",                      //保存当前输入框的内容
      page_number:1,                 //当前页面的页码
      pageCount:0,                   //总页数
      options:[{                     //基于elementui的select选择器
        value:"选项一",
        label:"按编号从小到大排列"
      },
      {
        value:"选项二",
        label:"按编号从大到小排列"
      }
      ],
      value:"",                       //获取用户选中了那个选项
      is_show1:true,                  //控制编号从小到大排列的div的显示
      is_show2:false,                 //控制编号从大到小排列的div的显示
      is_show3:false,                 //控制按编号和名字查找的div的显示
      search_pokemon:[{               //保存通过查询请求回来的数据
        pid:"",
        pname:"",
        purl:"",
        pattr:""
      }]
    };
  },

  methods: {
    //默认或者用户选中从小到大排序时,切换页面调用此方法
    get_page_1(val){
      this.page_number = val;
      let page = this.page_number;
      this.axios.get(`/pokemon_page?page=${page}`).then(result=>{
      //  console.log(result.data.results);
       let pokemon = result.data.results
        pokemon.forEach(item=>{
        if(item.purl != null && item.pattr != null){
          item.purl = require("../assets/img/"+item.purl);
           item.pattr = require("../assets/attr/"+item.pattr);
        }
      })
      this.pokemon = pokemon;
    })
    scrollTo(0,0);
    },
    //默认或者用户选中从大到小排序时,切换页面调用此方法
    get_page_2(val){
      this.page_number = val;
      let page = this.page_number;
      this.axios.get(`/pokemon_page_desc?page=${page}`).then(result=>{
      //  console.log(result.data.results);
       let pokemon = result.data.results
        pokemon.forEach(item=>{
        if(item.purl != null && item.pattr != null){
          item.purl = require("../assets/img/"+item.purl);
           item.pattr = require("../assets/attr/"+item.pattr);
        }
      })
      this.pokemon = pokemon;
    })
    scrollTo(0,0);
    },
    //切换select选项时触发
    sorting(){
      this.input = "";
      if(this.value == "选项二"){
         this.is_show1=false;
         this.is_show3=false;
         this.page_number = 1;
         this.get_page_2(this.page_number);
         this.is_show2=true;
      }else if(this.value == "选项一"){
        this.is_show2=false;
        this.is_show3=false;
        this.page_number = 1;
        this.get_page_1(this.page_number);
        this.is_show1=true;
      }
    },
    //用户在输入框内输入内容失去焦点或者按下回车后触发,显示特定的宝可梦图片
    search(){
      this.axios.get(`/search?pname=${this.input}&pid=${this.input}`).then(result=>{
        console.log(result.data);
        let pokemon = result.data.result;
        if(pokemon.length == 0 && this.input!=""){
          this.open_message();
        }else if(this.input==""){
          this.is_show1 = true;
          this.is_show2 = false;
          this.is_show3 = false;
        }else{
          pokemon[0].purl = require("../assets/img/"+pokemon[0].purl);
          pokemon[0].pattr = require("../assets/attr/"+pokemon[0].pattr);
          this.search_pokemon = pokemon;
          this.is_show1 = false;
          this.is_show2 = false;
          this.is_show3 = true;
        }
      })
      
    },
    //显示错误消息框
     open_message() {
        this.$notify({
          title: '皮卡丘?',
          message: '您的宝可梦跑啦~~~',
          position: 'top-left',
          type:"warning"
        });
      },
  },
  mounted() {
    //设置每张卡牌的高度为屏幕的高度的31%
    this.height = (window.screen.height)*0.31+"px";

    //页面加载后展现第一页的内容
    let page = this.page_number;
    this.axios.get(`/pokemon_page?page=${page}`).then(result=>{
       this.pageCount = result.data.pagecount *10; //总页码数
       let pokemon = result.data.results;
        pokemon.forEach(item=>{  //遍历请求回来的数据,处理文件路径
        if(item.purl != null && item.pattr != null){
          item.purl = require("../assets/img/"+item.purl);
          item.pattr = require("../assets/attr/"+item.pattr);
        }
      })
      this.pokemon = pokemon;
    })
  },
};
</script>
<style>
.map .el-aside {
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.map .el-aside .d1{
  position: fixed;
  width: 18%;
}
.map .el-aside .aside_header {
  /* margin: 10px 0; */
  text-align: center;
}
.map .el-aside .menu{
  margin: 0 auto;
  width: 80%;
}
.map .el-aside .menu ul li {
  margin: 30px 0;
}
.map .el-aside .menu a {
  text-decoration: none;
  font-size: 16px;
  color: aquamarine;
}
.map .container1 .el-aside img {
  width: 60%;
}
.map .el-header {
  background-color: #333844;
  position: fixed;
  width: 78%;
}
.map .el-menu .el-menu-item {
  padding: 10px 3px;
  font-size: 20px;
  /* margin-left: 100px; */
  line-height: 35px;
  
}
.map .container2 .el-header {
  z-index: 10;
  width: 76%;
}
.map .container2 .el-button {
  /* margin-top: 18px; */
  margin-top: 7px;
}
.map .container2 .el-main {
  margin-top: 40px;
  width: 93%;
}
.map .container2 .picture .photo_frame {
  border: 1px solid #000;
  margin: 1px 0px;
  border-radius: 10px;
  width: 98%;
  display: flex;
  position:relative;
  box-shadow: 2px 1px 1px;
  background-image: url("../assets/img/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  align-items:center;
  justify-content:center;
  /* overflow: hidden; */
}
.map .container2 .picture .photo_frame .number {
  position: absolute;
  top: 5px;
  left: 5px;
  color: rgb(171, 224, 243);
  font-size: 18px;
}
.map .container2 .picture .photo_frame .number::before{
  content: "#";
}
.map .container2 .picture .photo_frame .pname{
  position: absolute;
  top: 30px;
  left: 5px;
  color: #fff;
  font-size: 20px;
}
.map .container2 .picture .photo_frame .pk{
  z-index: 7;
  width: 50%;
  cursor: pointer;
}
.map .container2 .picture .photo_frame .attribute_img{
  display: none;
}
.map .container2 .picture .photo_frame:active .attribute_img{
  position:absolute; 
  left:0; 
  top:0; 
  width: 100%;
  display:block;
  z-index: 8;
}
.map .container2 .picture .photo_frame .d2{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%,-50%);
  align-items:center;
  justify-content:center;
}
.map .container2 .picture .photo_frame .d2 .bg{
  width:70%;
  animation:3s spin linear infinite;
}
@keyframes spin{
  0%{
  }
  100%{
    transform: rotate(1turn);
  }
}
.map .attribute{
  position: absolute;
  bottom: 2%;
  width: 100%;
  height: 10%;
  border-radius: 30px;
  overflow:hidden;
  color: #000;
  display:flex;
  align-items:center;
  justify-content:center;
  left:50%;
  transform: translateX(-50%);
  background-image: url("https://s1.52poke.wiki/wiki/thumb/3/3a/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E7%89%B9%E5%88%AB%E7%AF%87%E5%95%86%E6%A0%87_%E5%90%89%E7%BE%8E.png/90px-%E5%AE%9D%E5%8F%AF%E6%A2%A6%E7%89%B9%E5%88%AB%E7%AF%87%E5%95%86%E6%A0%87_%E5%90%89%E7%BE%8E.png");
  background-repeat: no-repeat;
  background-position: center;
}
.map .el-pagination{
  display: flex;
  margin-top: 50px;
  justify-content:center;
}
.map .el-pagination .btn-prev{
  margin-right: 10px;
}
.map .el-pagination .btn-next{
  margin-left: 10px;
}
.map .el-pagination .el-pager li{
  margin: 0 10px;
}
</style>