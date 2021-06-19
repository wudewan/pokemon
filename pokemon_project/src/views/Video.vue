<template>
  <div class="video">
    <el-container class="container1">
      <!-- 首页侧边栏 -->
      <el-aside width="18%">
        <div class="d1">
          <!-- 头部图片 -->
          <div class="aside_header">
            <img src="../assets/img/header.png" />
          </div>
          <div class="menu">
            <ul style="list-style: none">
              <li><a href="#animate">1、宝可梦动画</a></li>
              <li><a href="#game">2、宝可梦游戏</a></li>
              <li><a href="#difference">3、动画和游戏的区别 </a></li>
            </ul>
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
                  <el-menu-item index="/video" class="el-icon-video-play"
                    >视频</el-menu-item
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
          <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
          </video-player>
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
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";

export default {
  data() {
    return {
      activeIndex: "/video",
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
        {
        type: "video/mp4",
        src: require("../assets/video/carousel.mp4"), //视频url地址
        },
        ],
        poster: require("../assets/img/001.png"), //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true, //全屏按钮
        },
        }
    }
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style>
.video .el-aside {
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.video .el-aside .d1 {
  position: fixed;
  width: 18%;
  /* left: 5%; */
}
.video .el-aside .aside_header {
  /* margin: 10px 0; */
  text-align: center;
}
.video .el-aside .menu{
  margin: 0 auto;
  text-align:left;
  width: 50%;
}
.video .el-aside .menu ul li {
  margin: 20px 0;
}
.video .el-aside .menu a {
  text-decoration: none;
  font-size: 16px;
  color: aquamarine;
}
.video .container1 .el-aside img {
  width: 60%;
}
.video .el-header {
  background-color: #333844;
  position: fixed;
  width: 78%;
}
.video .el-menu .el-menu-item {
  padding: 10px 3px;
  font-size: 20px;
  /* margin-left: 100px; */
  line-height: 35px;
}
.video .container2 .el-header{
  z-index: 10;
  width: 76%;
}
.video .container2 .el-button {
  /* margin-top: 18px; */
  margin-top: 7px;
}
.video .container2 .el-main {
  margin-top: 40px;
  width: 93%;
}
/* .video .container2 .el-main .vjs-poster{
    width: 80%;
} */
</style>