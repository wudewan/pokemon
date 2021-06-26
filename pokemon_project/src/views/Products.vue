<template>
  <shell :activeIndex="activeIndex">
    <template #menu>
      <el-dropdown placement="bottom" @command="select">
        <el-button type="primary">
          {{type}}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item,index in type_list" :key="index" :command="commands_list[index]">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>

    <template #main>
      <el-row>
        <el-col v-for="(item, index) in products" :key="index" :xs="12" :sm="8" :md="8" :lg="6" :xl="6" style="padding:0.3vw">
          <el-card :body-style="{ padding: '0px' }">
            <div @click="goto_details(index+1)">
              <img :src="item.products_img" class="image">
              <div style="padding: 14px;">
                <span style="font-size:0.9vw;">{{item.products_description}}</span>
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                  <p class="price_now">¥{{item.new_price.toFixed(2)}}</p>
                  <p class="price_ago">¥{{item.old_price.toFixed(2)}}</p>
                </div>
              </div>
            </div>
            
          </el-card>
        </el-col>
      </el-row>
    </template>
  </shell>
</template>
<script>
import shell from "../components/Shell.vue";
export default {
  components: { shell },
   data() {
    return {
      currentDate: new Date().toLocaleDateString(),
      activeIndex: "/products",
      type:"所有",
      type_list:["所有","衣服丶饰品类","寝具、家具、生活杂货类","食品类","玩具、玩偶、模型类","其他"],
      commands_list:["","clothes","life","food","toy","others"],
      products:[]
    }
  },
  mounted(){
    this.get_products().then(res=>{
      this.products = res;
    })
  },
  methods:{
    // 封装获取产品信息的请求
    get_products(type=""){
      return new Promise((resolve,reject)=>{
        this.axios.get(`/api/pk_products?category=${type}`).then(res=>{
          let products = res.data.result;
          products.forEach(item=>{
            item.products_img = require("../assets/products/"+item.products_img);
          });
          resolve(products);
        })
      })
    },

    //选取相应的子菜单,获取对应的产品信息,并在菜单上显示当前所选的菜单名
    select(command){
      this.get_products(command).then(res=>{
        this.products = res;
      });
      command == "" ? this.type="所有" : command == "clothes" ? this.type = "衣服丶饰品类" : command == "life" ? this.type = "寝具、家具、生活杂货类" : command == "food" ? this.type="食品类" : command == "toy" ? this.type = "玩具、玩偶、模型类" : this.type = "其他";
    },

    goto_details(index){
      this.$router.push(`/products_details/${index}`);
    }
  }
}
</script>
<style>
  .el-card{
    height: 23.5vw;
  }

  .time {
    font-size: 0.8vw;
    color: #999;
  }
  
  .bottom {
    margin-top: 8px;
    line-height: 12px;
    position: relative;
  }

  .bottom .price_now,.bottom .price_ago{
    position: absolute;
    color: red;
    font-size: 1vw;
    right: 4vw;
    bottom: 1px;
  }

  .bottom .price_ago{
    color: gray;
    font-size: 0.7vw;
    right: 0vw;
    text-decoration:line-through;
  }

  .image {
    width: 100%;
    display: block;
  }

  .el-button--primary{
    display: block;
    margin: 0 auto;
  }
  .el-card .image{
    transition: 1s linear;
  }

  .el-col  :hover .image{
    transform: scale(1.1);
    
  }
  .el-card .image,.el-card > div{
    cursor: pointer;
  }
</style>