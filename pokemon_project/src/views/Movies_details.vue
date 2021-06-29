<template>
  <shell>
    <template #menu>
      <div v-for="item,index in small_img" :key="index" :id="index" class="small_img">
        <img class="img_1"
          :src="item"
          style="width: 100%; border-radius: 50%; box-shadow: 3px 3px 5px #000;"
          @click="is_drawer"
        />        
      </div>
      <el-drawer
          append-to-body
          :visible.sync="drawer"
          :with-header="false"
        >
        <div class="drawer">
          <div class="drawer_1" style="  position: absolute;width: 70%;top:5%;left: 50%;transform:translateX(-50%);color: #fff;font-size:1.5vw">
            <div style="display:flex;justify-content: center;">{{p_name[i]}}</div>
            <p style="font-size:1.2vw;margin-top:10px;text-indent:2em">
              {{p_intr[i]}}
            </p>
          </div>
          <div class="drawer_2" style="position: absolute; width: 70%; top: 30%; right: 50%;transform:translateX(50%)">
            <img
              :src="big_img[i]"
              width="100%"
            />
          </div>
        </div>
      </el-drawer>
    </template>

    <template #main>
      <div class="article">
        <el-row>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="article_1">
              <div class="img"><img src="../../public/img/back.png" @click="back"></div>
              <div class="title">
                {{title}}
              </div>
              <div class="inner">
                {{article}}
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="story_img">
              <img v-for="item,index in story_img" :key="index"
                :src="item"
                width="49%"
                style="margin: 0 2px"
              />
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
  components: { shell },
  props:["mid"],
  data() {
    return {
      activeName: "first",
      show: true,
      drawer: false,
      p_name:[],
      p_intr:[],
      small_img:[],
      big_img:[],
      story_img:[],
      title:"",
      article:"",
      i:""
    };
  },
  methods: {
    is_drawer(event){
      this.i = event.path[1].id;
      this.drawer = true;
    },
    back(){
      history.go(-1);
    }
  },

  mounted(){
     this.axios.get(`/api/movies_details?id=${this.mid}`).then(result=>{
        let details = result.data.result;
        let small_img = [];
        let big_img = [];
        let story_img = [];
        details.forEach(item=>{
          this.p_intr = item.p_intr.split("丨");
          this.p_name = item.p_name.split("丨");
          small_img = item.small_img.split("丨");
          big_img = item.big_img.split("丨");
          story_img = item.story_img.split("丨");
          this.title = item.title;
          this.article = item.article;
        });

        this.small_img = small_img.map(item=>{
          item = require(`../assets/movies_details/${details[0].id}/`+item);
          return item;
        })


        this.big_img = big_img.map(item=>{
          item = require(`../assets/movies_details/${details[0].id}/`+item);
          return item;
        })

        this.story_img = story_img.map(item=>{
          item = require(`../assets/movies_details/${details[0].id}/`+item);
          return item;
        })


      }); 
  }
};
</script>
<style>

</style>