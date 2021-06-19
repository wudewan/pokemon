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
          <!-- <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
          </video-player> -->
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
          <div>
            <img src="https://cn.portal-pokemon.com/assets_c/2019/05/112a3c6c5a1424dd13080551461d2a5501a6f3d4-thumb-1280x458-13480.jpg" width="99%">
          </div>
          <div class="accordion" style="width:99%;margin-top:10px;">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="剧场版宝可梦 我们的故事" name="1">
                <img src="../assets/movies/001.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">《宝可梦》电影版 迈出全新一步——继20週年纪念电影《剧场版宝可梦 就决定是你了！》大热登场之后，才华洋溢的年轻导演加上製作团队，带来全新的《宝可梦》电影 —《剧场版宝可梦 我们的故事》！即将与大家一起展开前所未见的冒险，踏出全新的一步！</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">剧场版宝可梦 我们的故事<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
              <el-collapse-item title="剧场版宝可梦 就决定是你了！" name="2">
                <img src="../assets/movies/002.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">你知道两人是如何相遇的吗？小智和皮卡丘现在是最强的伙伴，但是他们的第一次见面实际上却很糟！虽然笨拙的小智想成为皮卡丘的朋友，皮卡丘却听不进小智说的话。这两人如何成为伙伴?一天他们从真新镇出发踏上旅程。那天他们发誓要一起见到凤王。「有一天我们一定要去见他！」在凤王的彩虹之翼指引下，两人开始了他们的冒险！</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">剧场版宝可梦 就决定是你了！<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
              <el-collapse-item title="光环的超魔神 胡帕" name="3">
                <img src="../assets/movies/003.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">当小智、皮卡丘和他们的朋友们抵达海边的一个沙漠城市时，他们遇到了幻之宝可梦胡帕，他有能力通过Magic Ring召唤事物 - 包括人和宝可梦。在一个可怕的事件发生后，他们了解了一个勇敢英雄的故事，很久以前这位英雄就阻止了一个可怕宝可梦的肆虐。现在，已经尘封多年的威胁又将再次降临！小智可以帮助他的新朋友克服黑暗吗？还是一个危险的秘密会转变成一个传奇？</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">光环的超魔神 胡帕<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
              <el-collapse-item title="破坏之茧与蒂安希" name="4">
                <img src="../assets/movies/004.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">地底的钻石矿国住着许多小碎钻，他们的领导者是幻之宝可梦蒂安希。维持土地的圣洁钻石开始分崩离析，但蒂安希却没有强到足以创造一颗新的。寻求传说的宝可梦哲尔尼亚斯帮助的途中，蒂安希遇到了一群想要控制自己生产钻石能力的盗贼，过程中唤醒了茧中的传说宝可梦伊裴尔塔尔！小智和他的朋友们可以帮助蒂安希发现他真正的力量，并阻止伊裴尔塔尔的肆虐、拯救钻石矿国吗？</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">破坏之茧与蒂安希<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
              <el-collapse-item title="神速的盖诺赛克特 超梦觉醒" name="5">
                <img src="../assets/movies/005.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">当大麻烦威胁到大城市时，小智、皮卡丘和他们的朋友就要阻止它！喧嚣的大城市似乎是五只巨大的宝可梦盖诺赛克特一个完美的新家园。这些幻之宝可梦的到来很快成为一个问题，他们的巢穴威胁著城市的电力供应，并且不断的攻击任何接近他的人。最重要的是，他们引起了传说的宝可梦超梦的注意。超梦同情他们，因为他们的基因也遭到人为的篡改。这群盖诺赛克特的领导者，被称为赤红盖诺赛克特，并不相信超梦，他们的对决迅速失控！小智和朋友们可以在城市被摧毁之前阻止这两个强大的宝可梦吗？</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">神速的盖诺赛克特 超梦觉醒<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
              <el-collapse-item title="酋雷姆VS圣剑士 凯路迪欧" name="6">
                <img src="../assets/movies/006.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">小智和皮卡丘，以及他们的朋友艾莉丝和天桐，正搭乘火车前往旅程的下一个地点。小智在火车上发现了一只从未见过的宝可梦受伤了。他试图从传说的龙宝可梦酋雷姆的攻击中拯救这只宝可梦。小智和其他人几乎无法摆脱酋雷姆狂暴的攻击，随著尘埃落定，他们把注意力转向受伤的宝可梦。他们的新朋友竟然是幻之宝可梦凯路迪欧，他的任务是拯救他的朋友勾帕路翁、代拉基翁和毕力吉翁脱离酋雷姆的掌握。这几只宝可梦是被称为圣剑士的传说宝可梦。但是酋雷姆的肆虐还没有结束，他正从莱希拉姆和捷克罗姆汲取力量，变成焰白酋雷姆或闇黑酋雷姆，使其攻击更加强大！为什么酋雷姆以如此无情的愤怒攻击小智和他的朋友？他们将如何克服危机？为了保护朋友，为了发现真正的力量和纯正的勇气，为了保持与小智及其伙伴的羁绊，凯路迪欧隐藏的力量觉醒了。</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">酋雷姆VS圣剑士 凯路迪欧<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="比克提尼与黑英雄 捷克罗姆/比克提尼与白英雄 莱希拉姆" name="7">
                <img src="../assets/movies/007.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">在他们穿过合众地区的旅途中，小智和他的朋友们艾莉丝和天桐抵达艾茵多奥克，这个地区围绕著一座名为大地之剑的城堡而建。三名训练家来镇上参加一年一度的对战比赛，小智想藉著幻之宝可梦比克提尼的一些意想不到的帮助来赢得胜利！比克提尼却与这个地方有特别的羁绊。很久以前，这座城堡就可以观望大地之民王国，比克提尼和国王之间的合作关系保护了住在那裡的人们。但是这个王国从此消失了，留下了强大的遗迹和古老的宝可梦。大地之民的后裔德雷多打算以人造细胞卵恢复失落的王国。他的追求将他带到了遥远荒芜的沙漠，他说服了传说的宝可梦莱希拉姆加入他！德雷多打算用陷阱捕捉比克提尼，并使用其力量。随著这一计划的进行，整个艾茵多奥克都面临灾难！小智的理想是否可以说服传说的宝可梦捷克罗姆帮助他阻止德雷多？他们能拯救比克提尼吗？宝可梦历史上最伟大的冒险即将来临！</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">比克提尼与黑英雄 捷克罗姆/比克提尼与白英雄 莱希拉姆<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="幻影的霸者 索罗亚克" name="8">
                <img src="../assets/movies/008.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">这是今年最值得期待的赛事，数以百计的人群涌入王冠市观看令人激动的比赛。小智、皮卡丘和他的朋友们遇到了一个从未见过的神秘宝可梦。但是三个传说的宝可梦雷公、炎帝及水君突然出现并开始在街上暴走。小智和他的朋友们以及新宝可梦索罗亚将揭开隐藏在强大势力背后的秘密。王冠市正在发生什么奇怪而危险的事呢？为什么时拉比在消失了二十年之后突然回来呢？为什么强大的索罗亚克在城裡发怒呢？寻找这些答案的路上充满危险与不确定，小智和他的朋友们可以找到足够的勇气、力量和友谊来解答谜团并及时拯救王冠市吗？</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">幻影的霸者 索罗亚克<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="阿尔宙斯 超克的时空" name="9">
                <img src="../assets/movies/009.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">三部曲电影的最后一部，揭露传说的阿尔宙斯是在宝可梦世界断层的中心。首先帝牙卢卡和帕路奇亚之间史诗般的对战在时空的夹缝中开了一个洞。因此，反转世界唯一的守护者骑拉帝纳必须採取行动来保护其家园和宝可梦世界岌岌可危的平衡。现在，米季纳镇是行动的核心。这个城镇历史悠久并与强大的阿尔宙斯有关。阿尔宙斯将自己的力量，也就是生命宝玉 赋予城镇居民，但却遭到背叛！小智和他的朋友们与新伙伴希娜在帝牙卢卡的帮助下穿越了时空，希望可以纠正镇上祖先的错误，让世界不至于在阿尔宙斯的愤怒之下瓦解。他们能修复过去的错误吗？过去到底发生了什么事？希娜的祖先真的背叛了阿尔宙斯吗？前面两部电影隐藏的祕密即将被揭露，敬请观赏三部曲的精彩大结局！</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">阿尔宙斯 超克的时空<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="骑拉帝纳与冰空的花束 谢米" name="10">
                <img src="../assets/movies/010.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">骑拉帝纳是生活在反转世界的唯一宝可梦，反转世界是一个鲜为人知的领域。当帕路奇亚和帝牙卢卡扰乱时间和空间时，骑拉帝纳大怒而进入反转世界与之对战，但这场衝突却被一个小小的感谢宝可梦谢米打破！离开反转世界后，谢米遇见小智和他的朋友们，他使用心灵沟通寻求帮助，他才能返回葛拉西蒂亚的花束与其他谢米团圆。小智和他的朋友们同意协助谢米后不久，他们被拖入反转世界，并遇到了正在研究这个神秘领域的穆玄。他们并不知道穆玄的前助手杰洛试图利用骑拉帝纳的力量来统治反转世界，即使这意味著摧毁现实世界！我们的英雄们和他们的宝可梦是否可以摧毁杰洛的邪恶计划，保护两个世界呢？骑拉帝纳能否解决与帝牙卢卡的分歧？小智和他的朋友们又会了解谢米的特殊之处为何吗？</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">骑拉帝纳与冰空的花束 谢米<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="宝可梦巡护员与苍海的王子 玛纳霏" name="11">
                <img src="../assets/movies/011.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">有一个传说，有一个由水之民创造的海之神殿，里面藏著海之王冠。没有人见过海之王冠，也很少有人知道神殿的故事，除了一些曾去过宝可梦世界的水之民。宝可梦巡护员杰克从一名叫幻影的贪婪海盗手中救了玛纳霏的蛋后，一切起了变化。幻影决心要抢夺海之王冠，但他需要玛纳霏才能到达那裡。为了抢先一步，杰克将需要得到水之民的帮助。在遇到水之民后，小智、小遥和朋友们就被卷入这场行动。小遥甚至和神秘的玛纳霏有了一个非常特殊的羁绊，连幻影也望尘莫及。他们必须一起抢在幻影之前找到海之神殿，解开连接玛纳霏和海之神殿的秘密！</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">宝可梦巡护员与苍海的王子 玛纳霏<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="梦幻与波导的勇者 路卡利欧" name="12">
                <img src="../assets/movies/012.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">几百年前，波导骑士亚朗爵士崇高的牺牲拯救了欧鲁德朗及其人民。从那一天起，人们一直以年度庆典来纪念他的事蹟。当然，小智并不是一个历史迷，他更有兴趣的是宝可梦对战。他在对战中胜利后，被要求扮成伟大的波导的勇者，亚朗的重要性更得以显现，尤其是当路卡利欧从Aaron's staff中出现时。亚朗对这个长时间休眠的宝可梦来说并不是英雄，路卡利欧唯一记得的是背叛他的主人！距上次对战后过了数百年，路卡利欧被要求再次成为英雄。梦幻将皮卡丘和喵喵送到Tree of Life，一个只有路卡利欧才知道如何去的地方。路卡利欧是否可以放弃对人类的不信任，并和小智和他的朋友们合作？</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">梦幻与波导的勇者 路卡利欧<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="裂空的访问者 代欧奇希斯" name="13">
                <img src="../assets/movies/013.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">高科技的拉鲁斯市是一个相当令人印象深刻的游览景点，也是作为宝可梦对战一个非常令人印象深刻的地方！小智直奔他们著名的对战塔，但当他的对战伙伴变成一个叫小超的胆小男孩时，情况并不太乐观。由于童年事件造成的恐惧，小超害怕所有的宝可梦，即使是像皮卡丘一样可爱的宝可梦！当代欧奇希斯出现并控制了这个城市，造成了更多恐惧。他关闭了机器并俘虏了每个人。这个情形激怒了传说的烈空坐，他决定无论如何要将这个侵略者从他的领域中驱逐。与此同时，小智、小超和朋友们或许会身限其中，但他们当然不会害怕战斗。</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">裂空的访问者 代欧奇希斯<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="七夜的许愿星 基拉祈" name="14">
                <img src="../assets/movies/014.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">千年彗星即将再次在天空中崭露头角，据说是为所有在天空中看到它的人们献上祝福。当然，小智和朋友们对Millennium Festival也很感兴趣，特别是参加了伟大的巴特勒的魔术表演时。 更有趣的是巴特勒拥有的神秘的茧，小胜听到有声音从裡面传出来！当基拉祈从沉睡中醒来的时候，小胜有了一个新的朋友，可悲的是，他们拥有彼此的时间只有在千年彗星出现的短短几天。小胜渴望能够把自己的时间用在他的新朋友身上，但是伟大的巴特勒对自己的计划却不是很支持。他想要恢复传说的固拉多，而基拉祈也许能够实现这个愿望。小胜、小智、小遥和小刚是否能阻止巴特勒并在固拉多再次出现破坏一切时拯救基拉祈？</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">七夜的许愿星 基拉祈<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="水都的守护神 拉帝亚斯与拉帝欧斯" name="15">
                <img src="../assets/movies/015.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">每年奥多马雷都会沿著运河街道举行一场特殊的宝可梦水上竞赛，而这一次，小智和小霞是最大的竞争对手！即使没有获胜，小智仍然在一个神秘女孩的心中树立了自己的特殊地位，他从两个粗暴女人手中救出她。但她并非一般女孩而是伪装后的传说的宝可梦拉蒂亚斯！小智有机会一窥拉帝欧斯和拉帝亚斯的秘密世界，但是这个世界很快就了个来自过去的女人桑娜和莉安所威胁。她们不只想要抓到传说的宝可梦也想得到一种叫做心之水滴的神秘宝石。这些元素结合起来可以让她们控制一台可以防止危险的强大机器。但是，当机器发生故障时，不仅使得拉帝欧斯和拉帝亚斯陷于危险之中，还使整个奥多马雷全城发生危险！</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">水都的守护神 拉帝亚斯与拉帝欧斯<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
               <el-collapse-item title="时拉比 穿梭时空的相遇" name="16">
                <img src="../assets/movies/016.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">总有人想控制和捕猎稀有的宝可梦，有些人会保护这些特殊的宝可梦免受邪恶势力的攻击。四十年前，当时拉比正在逃离一个恶毒的猎人时，发生了一件事，一位名叫雪成的年轻训练家前来救援。他们消失了，从此成为市民讲述的另一个奇妙的传说。在现代，小智和朋友们到了森林裡，雪成和时拉比的事蹟原本只被当成一个故事，但在那个传说中的男孩和宝可梦再次出现时，他们发现了真相！虽然两人都从四十年前的悲惨经历中恢复，但情况并没有好转，仍然有人想捕猎时拉比！敌人叫做比夏斯，而他的计划可能是最残酷的。他装备了黑暗球，能使任何被捕猎到的宝可梦变得顺从以及邪恶。小智、雪成、小霞和小刚能否承受被洗脑的时拉比之力，并将其恢复到真正的自我呢？</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">时拉比 穿梭时空的相遇<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
              <el-collapse-item title="梦幻的宝可梦 洛奇亚爆诞" name="17">
                <img src="../assets/movies/017.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">小智和他的朋友们旅程来到橙子群岛，但即使这个看起来安静的岛屿，散布在关都地区偏远南部的水域，也有其神秘、冒险和传说的宝可梦！吉尔露太当然知道这一点，所以他现在在不同岛屿间旅行，捕猎三只传说的鸟类，火焰鸟、急冻鸟、闪电鸟。但是，即使拥有这三只鸟的力量，充其量也只是最大奖的垫脚石，这个最大奖就是海之守护者洛奇亚！当然当小智抵达目的地时，他完全不知道这件事。岛民对他也有很大但不险恶的计画，他们希望小智参加一个仪式，收集来自不同岛屿的三个元素球。当世界各地的天气失控时，这个任务变得更加重要，因为捕猎传说中的鸟类已经使环境失去了平衡。在洛奇亚的帮助下，小智可以成为众望所归的「被选中的人」吗？</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">梦幻的宝可梦 洛奇亚爆诞<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
              <el-collapse-item title="超梦的逆袭" name="18">
                <img src="../assets/movies/018.jpg" width="70%" style="display:block;margin:0px auto;">
                <p style="font-size:17px">这是首次亮相的超梦的冒险故事，超梦是通过生物工程制造的宝可梦，它是由所有最稀有的宝可梦之一梦幻的DNA创造的。从实验室逃离后，超梦决心证明自己的优势。它吸引了许多有天赋的训练家进入一场前所未有的宝可梦对战，当然，小智和他的朋友们也乐于接受挑战！当超梦揭露他的计画竟然是统治时，小智的心情由兴奋转变为恐惧和愤怒。超梦计画创造强大的复制英雄宝可梦，然后他就可以将宝可梦和训练家之间的不平衡消弭。尽管小智反对，超梦拒绝相信宝可梦和人可以成为朋友。但面对年轻训练家的决心和忠诚时，超梦可能不得不重新考虑......特别是对抗神秘的梦幻的力量时！</p>
                <el-button type="info" round  style="display:block;margin:0px auto;width:50%;position:relative;">超梦的逆袭<i class="el-icon-arrow-right el-icon--right" style="position:absolute;right:10px;"></i></el-button>
              </el-collapse-item>
            </el-collapse>
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
      activeIndex: "/video",
      pokemon_carousel:[],
      activeName:"1"
    }
  },
  methods: {
  },
  mounted() {
      this.axios.get(`/pokemon_carousel`).then(result=>{
       let pokemon_carousel = result.data.result;
      pokemon_carousel.forEach(item=>{
        item.cimg = require("../assets/carousel/"+item.cimg)
      })
      this.pokemon_carousel = pokemon_carousel;
    })
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
.video .container2 .el-main .el-collapse-item__header{
  color: #fff;
  font-size: 20px;
  padding-left:10px;
  background-color: rgb(255, 150, 0);
}
.video .container2 .el-main .el-collapse-item__content{
  padding-top: 20px;
  background-color: rgb(255, 245, 225);
}
</style>