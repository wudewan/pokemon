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
                  <el-menu-item index="/products" class="el-icon-shopping-cart-2"
                    >周边商城</el-menu-item
                  >
                </el-col>
                <!-- 登录/注册 -->
                <div v-if="$store.state.islogin" style="margin-top:10px;">
                  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">                   
                    <div style="display:flex;align-items:center;justify-content:center">
                      <el-avatar :src="require('../../../serve/upload_avatar/'+$store.state.avatar)" style="margin-right:10px"></el-avatar>
                      <el-dropdown @command="cancellation">
                        <el-link type="success" style="color:#92D8E6;font-size:15px;font-weight:bolder">
                          {{$store.state.username}}
                        </el-link>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item command="a">注销</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>    
                    </div>      
                  </el-col>
                </div>
                <div v-else>
                  <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                    <el-button type="primary" @click="login">登录</el-button>
                  </el-col>
                  <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                    <el-button type="primary" plain @click="regist">注册</el-button>
                  </el-col>
                </div>
               
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
              src="https://s1.52poke.wiki/wiki/thumb/c/ca/%E5%AF%B6%E5%8F%AF%E5%A4%A2%E5%9C%96%E9%91%91_SM.png/75px-%E5%AF%B6%E5%8F%AF%E5%A4%A2%E5%9C%96%E9%91%91_SM.png"/>
          </el-backtop>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  props:["activeIndex"],
  methods:{
    login(){
      this.$router.push("/login");
    },
    regist(){
      this.$router.push("/register");
    },
    cancellation(command){
      this.$store.commit("cancellation");
      sessionStorage.setItem("islogin","false");
      this.$router.push("/")
    }
  }
}
</script>
<style>
@import '../../public/css/home_style.css';
@import '../../public/css/map_style.css';
@import '../../public/css/movies_style.css';
@import '../../public/css/movies_details_style.css';
@import '../../public/css/products_details_style.css'
</style>