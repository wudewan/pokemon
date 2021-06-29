<template>
    <shell>
        <template #menu>
            
        </template>

        <template #main>
            <el-row>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="left_products">
                        <!-- 大图区域 -->
                        <div class="big_img_"> 
                            <img :src="big_img[i]" width="100%">
                            <div style="width:150px;height:150px;background-color:gray;z-index:100;position:absolute;opacity: .5;" :style="maskmove" :class="{is_display:hide}"></div>     
                            <div style="width:100%;height:100%;position:absolute;z-index:110" @mouseover="torggle" @mouseout="torggle" @mousemove="move"></div>                       
                        </div>
                        <!-- 放大之后的图片区域 -->
                        <div style="position:absolute;left:110%;border-radius:10px" :style="{
                            'background-image':`url(${magnify_img[i]})`,
                            'background-position':`-${parseInt(maskmove.left)*2}px -${parseInt(maskmove.top)*2.3}px`
                        }"  :class="{is_display:hide}" class="fd"></div>
                        <div class="bottom_">
                            <button class="left" :disabled="times==0" @click="moveright"><i class="el-icon-arrow-left"></i></button>
                            <!-- 小图区域 -->
                            <div class="small_img_">
                                <ul :style="{'margin-left': -60*times+'px',width:-60*small_img.length+'px'}" @mouseover="change_img">
                                    <li v-for="item,index in small_img" :key="index"><img :src="item" :data-i="index" width="45px" height="60px"></li>
                                </ul>
                            </div>
                            <button class="right" @click="moveleft" :disabled="times==small_img.length-4"><i class="el-icon-arrow-right "></i></button>
                        </div>                        
                    </div>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="right_products" style="margin:3vw 3vw;font-size:20px;color:#fff;width:30vw">
                        <div>{{title}}</div>
                        <div style="width:100%;height:30px;margin-top:20px;border-radius:3px; background-image: linear-gradient(to right, #808080 , #708090);">
                            <span style="font-size:15px;margin-left:5px;">价格:</span><span style="margin-left:10%;color:red;">{{price}}</span>
                        </div>
                        <div style="font-size:15px;text-align:center;margin:20px 0;border-top:1px dotted #696969;border-bottom:1px dotted #696969;padding:10px 0;">累计评价:{{}}</div>
                    </div>
                </el-col>
            </el-row>    
            <el-container>
                <el-main>                    
                    <el-tabs value="first" type="card" >
                        <el-tab-pane label="产品详情" name="first">
                            <ul>
                                <li v-for="item,index in details_img" :key="index">
                                    <img :src="item" width="100%"/>
                                </li>
                            </ul>                        
                        </el-tab-pane>
                        <el-tab-pane label="评价" name="second">配置管理</el-tab-pane>
                    </el-tabs>                 
                </el-main>
            </el-container>     
        </template>
        
    </shell>
</template>
<script>
import shell from "../components/Shell.vue";
export default {
    components:{shell},
    props:["index"],
    data(){
        return{
            times:0,
            small_img:[],
            big_img:[],
            magnify_img:[],
            details_img:[],
            title:"",
            price:0,
            i:0,
            hide:true,
            maskmove:{
                top:0,
                left:0
            }
        }
    },
    methods:{
        moveleft(){
            if(this.small_img.length<4){
                return;
            }else{
                this.times++;
             }
        },
        moveright(){
            
                this.times--;
           
        },
        //采用事件委托的方式,为所有的图片绑定事件
        change_img(e){
            if(e.target.nodeName == "IMG"){
            this.i = e.target.dataset.i;  
            }         
        },
        torggle(){
           this.hide = !this.hide;
        },
        move(e){
            // console.log(e.offsetX,e.offsetY);
            let left = e.offsetX;
            let top = e.offsetY;
            if(left<75){
                left = 75;
            }else if(left>270){
                left = 270;
            };
            if(top<75){
                top = 75;
            }else if(top>325){
                top = 325;
            };
            this.maskmove.top = top-75+"px";
            this.maskmove.left = left-75+"px";
        }
    },
    mounted(){
        this.axios.get(`/api/products_details?did=${this.index}`).then(res=>{
            let details = res.data.result;
            console.log(details);
            let small_img = [];
            let big_img = [];
            let magnify_img = [];
            let details_img = [];
            details.forEach(item=>{
                small_img=item.small_img.split("丨");
                big_img=item.big_img.split("丨");
                magnify_img=item.magnify_img.split("丨");
                details_img=item.details_img.split("丨");
                this.title = item.title;
                this.price = item.new_price;
            })
            this.small_img = small_img.map(item=>{
                item = require(`../assets/products_details/${this.index}/`+item);
                return item;
            })
             this.big_img = big_img.map(item=>{
                item = require(`../assets/products_details/${this.index}/`+item);
                return item;
            })
             this.magnify_img = magnify_img.map(item=>{
                item = require(`../assets/products_details/${this.index}/`+item);
                return item;
            })
            this.details_img = details_img.map(item=>{
                item = require(`../assets/products_details/${this.index}/`+item);
                return item;
            })
        })
    }
    
}
</script>
<style>
.is_display{
    display: none;
}
.shell .left_products{
    display: flex;
    position: relative;
    width: 345px;
    flex-wrap: wrap;
    height: 500px;
    margin: 3vw 0vw;
    border: 1px solid #6581C4;
    border-radius: 10px;
    padding: 10px;
}
.shell .big_img_{
    width: 345px;
    height: 400px;
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}
.shell .magnify{
    position: absolute;
    left: 100px;
}

.shell .small_img_{
    display: flex;
    flex-wrap: nowrap;
    margin-top: 5px;
    overflow: hidden;
    width: 260px;
    height: 60px;
    margin-top: 5px;
}
.shell .left_products .bottom_{
    display: flex;
}

.shell .left_products ul{
    list-style: none;
    display: flex;
    height: 60px;
}
.shell .left_products  ul li{
    margin: 0 10px;
}
.shell .left_products .small_img_ ul li :hover{
    transform: scale(1.1); 
    transition: 0.5s linear;
}
.shell .left_products .left,.shell .left_products .right{
    width: 42px;
    height: 60px;
    margin-top: 5px;
} 
.shell .fd{
    width: 345px;
    height: 400px;
}
.shell .el-tabs__item{
    color: #fff;
}
.shell .el-tabs__item:hover{
    color: #409EFF;
}
.shell .el-main .is-active{
    color: #409EFF;
}
</style>