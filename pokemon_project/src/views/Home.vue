<template>
  <div class="home">
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
          <div class="d3">
            <!-- 文字介绍 -->
            <div class="intr">
              <img
                src="https://s1.52poke.wiki/wiki/thumb/3/3a/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E7%89%B9%E5%88%AB%E7%AF%87%E5%95%86%E6%A0%87_%E5%90%89%E7%BE%8E.png/90px-%E5%AE%9D%E5%8F%AF%E6%A2%A6%E7%89%B9%E5%88%AB%E7%AF%87%E5%95%86%E6%A0%87_%E5%90%89%E7%BE%8E.png"
                alt=""
              />
  
                <span style="font-size: 18px;color: #add8e6"  
                >电视动画《宝可梦》（ポケモン），改编自宝可梦系列游戏。是由汤山邦彦等执导，园田英树、大桥志吉等编剧，松本梨香、大谷育江等配音的同名长篇电视动画系列。动画的日文版根据游戏原作版本，可按照时间顺序划分为七部：《宝可梦》、《宝可梦：超世代》、《宝可梦：钻石与珍珠》、《宝可梦：超级愿望》、《宝可梦XY》、《宝可梦：太阳&月亮》和《宝可梦：旅途》。除电视动画系列外，宝可梦系列作品同样包括一些旁支作品：描述非主角一行的角色的故事的周刊宝可梦广播电台、宝可梦星期天、PokémonSmash!等。2019年8月1日起，The Pokémon Company（总公司：东京都港区六本木；代表取缔役社长：石原恒和）将逐步变更“精灵宝可梦”的名称为“宝可梦”。同时，也制作发布了“宝可梦”的标记设计。</span>   
            </div>
            <!-- 顶部轮播图 -->
            <div class="carousel">
              <ul>
                <li v-for="(value, i) in arr_image3" :key="i">
                  <img :src="value" alt="" />
                </li>
              </ul>
            </div>
          </div>
           <!-- 动漫简介 -->
          <div class="overview" id="animate">
            <img
              src="https://s1.52poke.wiki/wiki/thumb/2/2c/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E7%AC%AC7%E4%BD%9C_%E6%97%A5%E6%9C%AC%E5%9C%96%E6%A8%99.png/300px-%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E7%AC%AC7%E4%BD%9C_%E6%97%A5%E6%9C%AC%E5%9C%96%E6%A8%99.png"
              alt=""
            />
            <hr/>
            <p>
              宝可梦动画（日文︰アニメポケットモンスター，英文︰Pokémon
              anime）是指从1997年开始在电视上播放的宝可梦动画片，以及与之相关的电影、短篇、外传和动画特别篇等以宝可梦为主要角色之一的动画。主动画系列的主要剧情讲述立志成为宝可梦大师的小智，和他的搭档皮卡丘一起踏上旅途，在旅途中遇到了许多伙伴和种种事件。目前为止动画已经播放了7个主要系列，剧情分别对应了《宝可梦》系列游戏的内容，其中动画首作中还另有动画原创的橘子群岛剧情，超级愿望篇中也另有杰可罗拉群岛的原创剧情。截至2021年3月末，宝可梦动画目前已经在183个国家和地区播放。除了主动画系列以外也有一些与之不同世界观的特别动画，一般场合所说的宝可梦动画没有特别说明的情况下所指的都是主动画系列。
            </p>
            <p>
              宝可梦动画于1997年4月1日在日本开始播放，以《红／绿》和《金／银》的游戏为蓝本进行过程为动画故事主要剧情。于2002年11月21日起，随着《红宝石／蓝宝石》的发售，动画推出宝可梦
              超世代系列。又于在2006年9月28日，随着《钻石／珍珠》的发售而开始播出宝可梦
              钻石＆珍珠系列，于2010年9月23日开始则是配合《黑／白》的发售，开始播放宝可梦
              超级愿望系列，在2012年6月21日配合《黑２／白２》更换标题为“超级愿望
              第2季”，2013年1月17日追加“N篇”的后缀，又于2013年4月25日追加“杰可罗拉大冒险篇”的后缀。2013年10月17日，随著《Ｘ／Ｙ》的发售，开始播放宝可梦
              XY篇。于2016年11月17日起，以《太阳／月亮》蓝本的宝可梦
              太阳＆月亮系列开播。于2019年11月17起，宝可梦
              旅途系列开播。在日本以外的地区，宝可梦动画以每季约52集为单位销售播放版权。宝可梦动画原本在每周二晚6点半于东京电视台播放，在多边兽事件之后，从1997年12月16日开始到1998年4月15日停播，复播改为每周四晚7点播出。动画于2012年迎来了播放15周年的纪念，成为现在东京电视网所播放的动画系列中最长寿的动画节目。2016年4月，播放时间调整到每周四晚6点55分播出；2018年10月7日，调整到每周日晚6点播出；2020年10月9日，调整到每周五晚6点55分播出。动画最早使用赛璐珞胶片拍摄制作，在2002年开始转为数码制作，之前的作品也全部数码化。在超世代后期已经开始大量使用CG技术制作宝可梦招式的特效。在日本开始全面施行数字电视播放之后，宝可梦动画仍以标准清晰度进行制作（画面比4：3）。从2009年4月2日开始，转为高清晰度制作（画面比16：9）。另外在东京电视台的隐藏字幕中，招式的名字使用汉字来显示
            </p>
            <el-divider></el-divider>
          </div>
          <!-- 游戏简介 -->
          <div class="game" id="game">
            <img src="../assets/img/game_logo.png" alt="" />
            <hr/>
            <p>
              宝可梦游戏主要包括覆盖多种掌上游戏机、家用游戏机和街机平台的电子游戏、手机平台的应用程序，等等。所有游戏都基于宝可梦这一虚拟生物。宝可梦游戏主要是指游戏机（掌机、家机和街机）、手机和电脑平台上发行的游戏和衍生应用。广义的宝可梦游戏还可包括如宝可梦集换式卡牌游戏等桌面游戏。根据发售的平台，可以分为电子游戏（Video
              Game）、手机应用程序（App）和街机游戏。其中，电子游戏则包括基于第一款宝可梦游戏《红／绿》的《宝可梦》系列，以及旁支系列游戏；而旁支系列游戏又可根据世界观和主题划分为各种系列、与其它游戏合作的游戏、辅助游戏的各种应用类软件等。其中，又以《宝可梦》系列游戏更广为人知，大部分衍生作品都是基于《宝可梦》系列游戏创作的。其相关衍生产品涵盖了动画、漫画、集换式卡牌游戏、实体产品等多个方面，现在已经成为了全球流行的游戏系列。自Pokémon
              GO之后，官方也推出了更多手机应用程序。根据游戏涵盖的宝可梦数量、游戏平台和发布时间，宝可梦游戏（主要是电子游戏和卡牌游戏）在爱好者间多被划分为不同的世代，目前最新的世代是第八世代。
            </p>
            <el-divider></el-divider>
          </div>
          <!-- 动画和游戏的区别 -->
          <div class="difference" id="difference">
            <img
              src="https://s1.52poke.wiki/wiki/e/ef/%E6%9E%81%E5%B7%A8%E5%8C%96_Sprite.png"
              alt=""
            />
            <p>动画和游戏的区别</p>
            <img
              src="https://s1.52poke.wiki/wiki/e/ef/%E6%9E%81%E5%B7%A8%E5%8C%96_Sprite.png"
              alt=""
            />
            <hr/>
              <ul>
                <li>
                  1.初期出现了大量的上色错误或设定错误。如宝可梦中心大对决！中的绿色波波，与传说的鸟宝可梦并列传说的宝可梦的风速狗。
                </li>
                <li>
                  2.因为动画的错误，即使招式效果、变化招式或属性相克而导致无法造成伤害的招式，在动画中有时也会造成伤害，例如在深灰市的决斗！中，小智的皮卡丘用十万伏特击败了拥有地面属性的小拳石。后来这样的错误日益得到修正。
                </li>
                <li>
                  3.宝可梦在早期能够同时学会4个以上的招式，例如勇次的快龙就在对战中使用了10个以上的招式。而在第一部之后的动画中，除了宝可梦与生俱来的能力不计入4个招式内（库库伊博士的炽焰咆哮虎身上的火焰腰带），很少再出现同时期招式超过四个的情况。
                </li>
                <li>
                  4.收服宝可梦的途径并不只有宝可梦对战一种方式，也可以通过交流和感化。有的宝可梦甚至会主动加入队伍，例如：小智的煤炭龟、赫拉克罗斯。
                </li>
                <li>
                  5.招式的威力并不固定，可以由使用的宝可梦视情况来自主调整力道，例如在蜈蚣王发飙！救出牙牙!!中花椰猴曾经使用威力减弱后的种子机关枪和日光束陪牙牙练习。
                </li>
                <li>
                  6.招式的命中率和游戏不同，并没有固定的数据，即使是游戏中一定会命中的招式在动画中也可能被躲开，例如：燕返、波导弹、电击波等，即使是威力强大且一定会命中的Ｚ招式也不例外。
                </li>
                <li>
                  7.可能会出现特殊和物理混为一谈的情况，比如只能够抵挡特殊招式的光墙有时候会用来抵挡物理招式。
                </li>
                <li>
                  8.宝可梦使出招式有可能不会出现追加效果，例如劲敌决战！小智版甲贺忍蛙VS超级蜥蜴王!!中音波龙受到翔太的暴飞龙的龙尾的攻击，却未退场。
                </li>
                <li>
                  9.宝可梦有时候承受招式时不但不会受到伤害，反而会吸收对方的招式以便增加自己的力量，例如在灵兽形态合力进击！合众最大的危机!!中皮卡丘吸收了雷电云的打雷，使自己的电属性招式威力增加，并用巨大化的电球摧毁神殿及打败火箭队。
                </li>
                <li>
                  10.宝可梦可随时随地使用招式，并不局限于对战上，也不局限于游戏中对战外可使用的招式。宝可梦可以灵活运用招式方便做事情，会产生具有现实意义的效果。例如藤鞭是草属性宝可梦们手臂一样的存在；吐丝中的丝线可以帮助宝可梦们活动，并且捆缚住对方。
                </li>
                <li>
                  11.宝可梦无需掌握秘传学习器招式，就可以利用自身的能力协助训练家行动。比如拉普拉斯，一般来说即使没有学会冲浪也可以载人，但在游戏中必须先让它学会冲浪。
                </li>
                <li>
                  12.在动画中宝可梦的一些道具可以抵消招式。例如，小智的水水獭可以用扇贝贝来反射的电属性招式。
                </li>
                <li>
                  13.和游戏中只能使用招式不同，动画版中会出现诸如把对方“扔出去”、让宝可梦“躲开”这样的命令，或利用对方的攻势进行反击等情况发生。例如在再度遭遇火焰鸡!!与叶越的战斗!!中叶越的火焰鸡只使用脚部把月桂叶的飞叶快刀踢下来，甚至使用手部抓住藤鞭并把月桂叶拉过来，以便进行近距离攻击。此外，宝可梦也可只用身体部分而不用招式进行攻击或挡下招式。
                </li>
                <li>
                  14.能参加空中对战的宝可梦可能与游戏不同，比如在空中对战!?摔角鹰人对烈箭鹰!!中，小智的小箭雀和摔角鹰人都能参加空中对战，而游戏中不能。
                </li>
                <li>
                  15.宝可梦的速度表现不一定符合游戏的速度种族值，可能受到宝可梦的体形或者身体构造影响，比如在草苗龟、树林龟…以及土台龟！中小智的草苗龟因为进化成树林龟体重大大增加而导致行动变得迟缓。
                </li>
                <li>
                  16.宝可梦可以在对战中进化。例如在宝可圆环！天空大决战!!中小智的姆克鸟进化成姆克鹰。
                </li>
                <li>
                  17.宝可梦的进化方式可能不同，最著名的就是呆呆兽确实是被大舌贝咬住尾巴后合体进化成呆壳兽，或头戴王者之证后被大舌贝咬住王者之证合体进化成呆呆王，尽管游戏图鉴中亦如此说明，但实际是升级或者交换进化。
                </li>
                <li>18.宝可梦可以主动忍耐克制进化，比如小光的波加曼。</li>
                <li>
                  19.最初的伙伴并不限制在游戏中的几种宝可梦，也有根据风俗或特别情况给出别的宝可梦。
                </li>
                <li>
                  20.收集到8枚徽章后不能直接与四天王交战，而是参加宝可梦联盟大会与其他拥有徽章的训练家对战，类似于运动会，每个大会都会有自己的圣火传递和圣火点燃仪式。宝可梦联盟大会是进行宝可梦对战的选拔淘汰赛，类似于竞技场模式，还有类似于选手村的设定。如系列首作就有“石英联盟的石英大会”、“城都联盟的白银大会”等等。
                </li>
                <li>21.当成为宝可梦联盟大会的冠军后才能挑战四天王。</li>
                <li>
                  22.有时会出现游戏中没有的特殊宝可梦，最著名的就是水晶大岩蛇。
                </li>
                <li>
                  23.经常加入游戏中没有的原创剧情与地点，例如宝可梦中的橘子群岛和宝可梦
                  超级愿望中的杰可罗拉群岛。
                </li>
                <li>
                  24.各地方的道馆不止游戏中出现的，有的训练家还持有游戏中没有的徽章。除了橘子联盟，小智挑战的都是游戏中出现的道馆。
                </li>
                <li>
                  25.道具的效果可能与游戏不同。比如在对决！巨大鲶鱼王与钓鱼高手！中，铃村的大师球被鲶鱼王吃掉而并非捕捉成功。
                </li>
                <li>26.训练家可在放出宝可梦时下指令，方便宝可梦直接使用招式。</li>
              </ul>
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
      activeIndex: "/",
      arr_image1: [],
      arr_image2: [],
      arr_image3: []
    };
  },
  methods: {
  },
  mounted() {
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
  },
};
</script>
<style>
.home .el-aside {
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.home .el-aside .d1 {
  position: fixed;
  width: 18%;
  /* left: 5%; */
}
.home .el-aside .aside_header {
  /* margin: 10px 0; */
  text-align: center;
}
.home .el-aside .menu{
  margin: 0 auto;
  text-align:left;
  width: 50%;
}
.home .el-aside .menu ul li {
  margin: 20px 0;
}
.home .el-aside .menu a {
  text-decoration: none;
  font-size: 16px;
  color: aquamarine;
}
.home .container1 .el-aside img {
  width: 60%;
}
.home .el-header {
  background-color: #333844;
  position: fixed;
  width: 78%;
}
.home .el-menu .el-menu-item {
  padding: 10px 3px;
  font-size: 20px;
  /* margin-left: 100px; */
  line-height: 35px;
}
.home .container2 .el-header{
  z-index: 10;
  width: 76%;
}
.home .container2 .el-button {
  /* margin-top: 18px; */
  margin-top: 7px;
}
.home .container2 .el-main {
  margin-top: 40px;
  width: 92%;
}
.home .container2 .el-main .carousel {
  margin: 20px auto;
  width: 100%;
  height: 210px;
  border: 3px solid #5f9ea0;
  overflow: hidden;
  border-radius: 25px;
}
.home .container2 .el-main .carousel ul {
  list-style: none;
  width: 61200px;
  animation: 250s move linear infinite;
}
.home .container2 .el-main .carousel ul:hover {
  animation-play-state: paused;
}
.home .container2 .el-main .carousel ul li {
  float: left;
}
.home .container2 .el-main .carousel li img {
  width: 200px;
}

@keyframes move {
  0% {
  }
  100% {
    transform: translateX(-30600px);
  }
}
.home .container2 .el-main .overview {
  padding-top:60px;
  margin-top:-60px;
  margin-bottom: 50px;
}
.home .container2 .el-main .game{
  margin-bottom: 50px;
  padding-top:50px;
  margin-top:-50px;
}
.home .container2 .el-main .overview p,
.home .container2 .el-main .game p {
  margin: 10px 0;
  color: #add8e6;
  text-indent: 40px;
  font-size: 18px;
}
.home .container2 .difference {
  color: #add8e6;
  padding-top:45px;
  margin-top:-45px;
}
.home .container2 .difference ul{
  list-style-type: none;
}
.home .container2 .difference p {
  margin-top: 20px;
  font-size: 30px;
  color: #33cccc;
  font-family: "楷体";
  display: inline-block;
  font-weight: bolder;
}
.home .container2 .difference li {
  margin: 10px 0;
}

</style>