<template>
    <shell>
        <template #menu>
            
        </template>

        <template #main>
          <table border="1px solid #fff" width="100%" style="color:#fff;text-align:center;">
            <thead>
              <tr>
                <td style="width:10%"><input type="checkbox" v-model="showAll" >&nbsp;全选</td>
                <td style="width:50%">商品</td>
                <td>单价</td>
                <td>数量</td>
                <td>小计</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item,index in cart" :key="index">
                <td style="width:10%"><input type="checkbox" v-model="item.checked">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td style="text-align:left">{{item.pname}}</td>
                <td>¥{{item.price.toFixed(2)}}</td>
                <td>{{item.count}}</td>
                <td>¥{{(item.price * item.count).toFixed(2)}}</td>
                <td><i class="el-icon-delete"></i></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                  <td colspan="2">合计:</td>
                  <td colspan="4">¥{{sum.toFixed(2)}}</td>
              </tr>
            </tfoot>
          </table>
        </template>      
    </shell>
</template>
<script>
import shell from "../components/Shell.vue";
export default {
    components:{shell},
    data() {
      return {
        uname:this.$store.state.username,
        cart:[],        
        multipleSelection: [],
        showAll:0,
      }
    },
    watch:{
      showAll(newVal,oldVal){
        if(newVal){
          this.cart.forEach(item=>{
            item.checked = true;
          })
        }
      }
    },
    computed:{
      sum(){
        let result = 0;
        this.cart.forEach(item=>{
          if(item.checked){
            result += (item.price * item.count);
          }
        });
        let result2 = this.cart.every(item=>{
          return item.checked == true;
        });
        if(result2){
          this.showAll = true;
        }else{
          this.showAll = false;
        }

        return result;
      }
    },
    methods: {
     
    },
    mounted(){
        this.axios.get(`/api/cart?uname=${this.uname}`).then(result=>{
          console.log(result.data.result);
          this.cart = result.data.result;
        })
    }
}
</script>
<style>

</style>