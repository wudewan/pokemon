<template>
  <shell :activeIndex="activeIndex">
    <template #menu>
      <el-input size="medium" style="width:80%;display:block;margin:10px auto;" placeholder="通过编号或名字查找" v-model="input" @change="search"></el-input>
      <el-select v-model="value" filterable placeholder="请选择" size="medium" @change="sorting" style="width:80%;display:block;margin:10px auto;">
        <el-option
          v-for="item,i in options"
          :key="i"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </template>     

    <template #main>
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
    </template>
  </shell>       
</template>

<script>
import shell from "../components/Shell.vue";
export default {
  components:{shell},
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
      this.load_pokemon(page).then((result)=>{
        this.pokemon = result;
      })
      scrollTo(0,0);
    },
    //默认或者用户选中从大到小排序时,切换页面调用此方法
    get_page_2(val){
      this.page_number = val;
      let page = this.page_number;
      this.axios.get(`/api/pokemon_page_desc?page=${page}`).then(result=>{
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
      this.axios.get(`/api/search?pname=${this.input}&pid=${this.input}`).then(result=>{
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

    //封装请求分页的方法
    load_pokemon(page){
      return new Promise((resolve,reject)=>{
        this.axios.get(`/api/pokemon_page?page=${page}`).then(result=>{
          this.pageCount = result.data.pagecount * 10;
          let pokemon = result.data.results;
          pokemon.forEach(item=>{  //遍历请求回来的数据,处理文件路径
            if(item.purl != null && item.pattr != null){
              item.purl = require("../assets/img/"+item.purl);
              item.pattr = require("../assets/attr/"+item.pattr);
            }
          });
          resolve(pokemon);
        })
      })
    }
  },

  mounted() {
    //设置每张卡牌的高度为屏幕的高度的31%
    this.height = (window.screen.height)*0.31+"px";


    //页面加载后展现第一页的内容
    let page = this.page_number;
    this.load_pokemon(page).then((result)=>{
      this.pokemon = result;
    })
  },
};
</script>
