<template>
  <shell>
    <template #menu>
      <div style="text-align: center; width: 25%; margin-left:16%;margin-top:20px;display:inline-block" v-for="item,index in small_img" :key="index" :id="index">
        <img
          :src="item"
          style="width: 100%; border-radius: 50%;"
          @click="is_drawer"
        />
        <el-drawer
          append-to-body
          :visible.sync="drawer"
          :with-header="false"
        >
        <div style="width: 100%; position: relative; height: 300px">
          <div
            style="
              position: absolute;
              width: 40%;
              top: 25%;
              left: 10%;
              color: #fff;
            "
          >
            <div style="margin: 10px 0; font-size: 25px">{{p_name[i]}}</div>
            <p>
              {{p_intr[i]}}
            </p>
          </div>
          <div style="position: absolute; width: 50%; top: 5%; right: 0%">
            <img
              :src="big_img[i]"
              width="100%"
            />
          </div>
        </div>
      </el-drawer>
      </div>

    </template>

    <template #main>
      <div>
        <el-row>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="" style="color: #fff; font-size: 18px">
              <div class="title" style="text-align: center; font-size: 25px; margin-top:20px">
                {{title}}
              </div>
              <div class="inner" style="text-indent: 40px; margin-top: 20px">
                {{article}}
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div
              class=""
              style="color: #fff; text-align: center; margin-top: 12%"
            >
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
.el-drawer__body {
  background-color: #ff9600;
}
</style>