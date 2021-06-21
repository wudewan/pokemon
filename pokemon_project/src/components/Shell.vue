<template>
  <div class="shell">
    <el-container class="container1">
      <!-- 首页侧边栏 -->
      <el-aside width="18%">
        <div class="d1">
          <!-- 头部图片 -->
          <div class="aside_header">
            <img src="../assets/img/header.png" />
          </div>
          <div class="menu">
            <!-- 页面侧边栏内容的插槽 -->
            <slot name="menu"></slot>

          </div>
          <!-- 尾部照片 -->
          <div>
            <img
              src="https://s1.52poke.wiki/wiki/thumb/6/60/%E6%9C%80%E5%88%9D%E7%9A%84%E4%BC%99%E4%BC%B4.png/200px-%E6%9C%80%E5%88%9D%E7%9A%84%E4%BC%99%E4%BC%B4.png"/>
          </div>
        </div>
      </el-aside>

      <el-container class="container2">
        <!-- 首页头部 -->
        <el-header>
            <!-- 头部导航条 -->
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
                  <el-menu-item index="/" class="el-icon-edit">首页</el-menu-item>
                </el-col>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <el-menu-item index="/map" class="el-icon-bicycle"
                    >图鉴</el-menu-item
                  >
                </el-col>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <el-menu-item index="/movies" class="el-icon-video-play"
                    >电影</el-menu-item
                  >
                </el-col>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <el-menu-item index="/shopping" class="el-icon-shopping-cart-2"
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
          <!-- 页面主页内容的插槽 -->
          <slot name="main"></slot>   

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
  props:["activeIndex"]
}
</script>
<style>
/* 首页的样式 */
.shell .el-aside {
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.shell .el-aside .d1 {
  position: fixed;
  width: 18%;
}
.shell .el-aside .aside_header {
  text-align: center;
}
.shell .el-aside .menu{
  margin: 0 auto;
  text-align:left;
  width: 100%;
}
.shell .el-aside .menu ul li {
  margin: 20px 0;
}
.shell .el-aside .menu a {
  margin-left: 25%;
  text-decoration: none;
  font-size: 16px;
  color: aquamarine;
}
.shell .container1 .el-aside img {
  width: 60%;
}
.shell .el-header {
  background-color: #333844;
  position: fixed;
  z-index: 10;
  width: 76%;
}
.shell .el-menu .el-menu-item {
  padding: 10px 3px;
  font-size: 20px;
  line-height: 35px;
}
.shell .container2 .el-button {
  margin-top: 7px;
}
.shell .container2 .el-main {
  margin-top: 40px;
  width: 93%;
}
.shell .container2 .el-main .carousel {
  margin: 20px auto;
  width: 100%;
  height: 210px;
  border: 3px solid #5f9ea0;
  overflow: hidden;
  border-radius: 25px;
}
.shell .container2 .el-main .carousel ul {
  list-style: none;
  width: 61200px;
  animation: 250s move linear infinite;
}
.shell .container2 .el-main .carousel ul:hover {
  animation-play-state: paused;
}
.shell .container2 .el-main .carousel ul li {
  float: left;
}
.shell .container2 .el-main .carousel li img {
  width: 200px;
}

@keyframes move {
  0% {
  }
  100% {
    transform: translateX(-30600px);
  }
}
.shell .container2 .el-main .overview,.shell .container2 .el-main .game{
  padding-top:60px;
  margin-top:-60px;
  margin-bottom: 50px;
}
.shell .container2 .el-main .overview p,
.shell .container2 .el-main .game p {
  margin: 10px 0;
  color: #add8e6;
  text-indent: 40px;
  font-size: 18px;
}
.shell .container2 .difference {
  color: #add8e6;
  padding-top:45px;
  margin-top:-45px;
}
.shell .container2 .difference ul{
  list-style-type: none;
}
.shell .container2 .difference p {
  margin-top: 20px;
  font-size: 30px;
  color: #33cccc;
  font-family: "楷体";
  display: inline-block;
  font-weight: bolder;
}
.shell .container2 .difference li {
  margin: 10px 0;
}

/* 图鉴页面样式 */
.shell .container2 .picture .photo_frame {
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
}
.shell .container2 .picture .photo_frame .number {
  position: absolute;
  top: 5px;
  left: 5px;
  color: rgb(171, 224, 243);
  font-size: 18px;
}
.shell .container2 .picture .photo_frame .number::before{
  content: "#";
}
.shell .container2 .picture .photo_frame .pname{
  position: absolute;
  top: 30px;
  left: 5px;
  color: #fff;
  font-size: 20px;
}
.shell .container2 .picture .photo_frame .pk{
  z-index: 7;
  width: 50%;
  cursor: pointer;
}
.shell .container2 .picture .photo_frame .attribute_img{
  display: none;
}
.shell .container2 .picture .photo_frame:active .attribute_img{
  position:absolute; 
  left:0; 
  top:0; 
  width: 100%;
  display:block;
  z-index: 8;
}
.shell .container2 .picture .photo_frame .d2{
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
.shell .container2 .picture .photo_frame .d2 .bg{
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
.shell .attribute{
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
.shell .el-pagination{
  display: flex;
  margin-top: 50px;
  justify-content:center;
}
.shell .el-pagination .btn-prev{
  margin-right: 10px;
}
.shell .el-pagination .btn-next{
  margin-left: 10px;
}
.shell .el-pagination .el-pager li{
  margin: 0 10px;
}

/* 电影页面样式 */
.shell .el-aside .menu .el-dropdown{
  display: block;
  margin: 20px auto;
}
.shell .container2 .el-main .accordion{
  width:99%;
  margin-top:10px;
}
.shell .container2 .el-main .el-collapse-item__header{
  color: #fff;
  font-size: 20px;
  padding-left:10px;
  background-color: rgb(255, 150, 0);
}
.shell .container2 .el-main .el-collapse-item__content{
  padding-top: 20px;
  background-color: rgb(255, 245, 225);
}
</style>