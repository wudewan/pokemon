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
                        <div style="position:absolute;left:110%;border-radius:10px;z-index:100" :style="{
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
                    <div class="right_products" style="margin:3vw 3vw;font-size:20px;color:#fff;width:30vw;">
                        <div>{{title}}</div>
                        <div style="width:100%;height:30px;margin-top:20px;border-radius:3px; background-image: linear-gradient(to right, #808080 , #708090);">
                            <span style="font-size:15px;margin-left:5px;">价格:</span><span style="margin-left:10%;color:red;">¥{{price.toFixed(2)}}</span>
                        </div>
                        <div style="font-size:15px;text-align:center;margin:20px 0;border-top:1px dotted #696969;border-bottom:1px dotted #696969;padding:10px 0;">
                            <el-row>
                                <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">月销量 <span style="color:red;">100+</span></el-col>
                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">丨</el-col>               
                                <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">累计评价:<span style="color:red;">&nbsp;{{comments.length}}</span></el-col>                  
                            </el-row>                            
                        </div>
                        <div style="display:flex;position:relative;">
                            <div style="position:absolute;top:4px">数量:</div>
                            <div style="margin-left:6vw">
                                <el-input-number v-model="num1"  controls-position="right" :min="0"></el-input-number>
                            </div>
                        </div>
                        <div style="margin-top:30px;">
                            <el-button type="danger" style="width:70%" icon="el-icon-shopping-cart-2"  @click="join_cart">加入购物车</el-button>
                        </div>
                        <div style="display:flex;justify-content:space-between;align-items:center;margin:20px 0" v-show="show">
                            <img src="../../public/img/true.png" width="5%"><span style="color:#1afa29;">商品已成功添加至购物车!</span> 
                            <el-button  type="danger" @click="go_to_cart">去购物车结算<i class="el-icon-arrow-right"></i></el-button>
                        </div>
                        <div style="margin-top:40px">
                            <span style="font-size:17px">服务承诺:</span> <span style="font-size:13px">正品保证 丨 极速退款 丨 退货运费险 丨七天无理由退换</span>
                        </div>
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
                        <el-tab-pane label="评价" name="second">
                            <div style="text-align:center;">
                                <el-rate
                                v-model="value"
                                show-text
                                text-color="#fff"
                                >
                                </el-rate>
                                <el-input
                                    type="textarea"
                                    placeholder="亲,您的评价是对我们最好的鼓励和鞭策!!!"
                                    v-model="textarea"
                                    maxlength="100"
                                    show-word-limit
                                    :rows="3"
                                    style="margin:10px 0"
                                    >
                                </el-input>
                                <el-button type="primary" style="width:100px" @click="insert_comments">提交</el-button>
                            </div>
                            <div style="border-top:3px solid #409EFF;border-bottom:3px solid #409EFF;margin-top:20px;padding:15px;font-size:16px">
                                <div style="border-top:1px solid #696969;margin-bottom:10px;padding:10px 0;color:#fff;" v-for="item,index in comments" :key="index">
                                    
                                    <el-rate
                                        :value="item.score"
                                        show-text
                                        text-color="#fff"
                                        >
                                    </el-rate>
                                    <div style="display:flex;align-items:center;margin:10px 0;">
                                        <el-avatar :src="require('../../../serve/upload_avatar/'+item.avatar)" style="margin-right:10px"></el-avatar>
                                        
                                        <el-link type="success" style="color:#92D8E6;font-size:15px;font-weight:bolder">
                                        {{item.uname}}
                                        </el-link>
                                         
                                    </div> 
                                    <div style="display:flex;justify-content:space-between">
                                        <p>{{item.content}}</p>      
                                        <p>{{item.riqi}}</p>                                  
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
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
            date:new Date().toLocaleDateString(),
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
            },
            num1:0,
            show:false,
            textarea:"",
            value:null,
            comments:[],
            uname: this.$store.state.username,
            avatar:this.$store.state.avatar
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
        },
        join_cart(){
            if(!this.$store.state.islogin){
                this.$message({
                    message: '你不登陆,我很难为你办事啊!',
                    type: 'warning'
                });
            }else if(this.num1 == 0){
                this.show = false;
                this.$message({
                    message: '请选择商品数量',
                    type: 'warning'
                });
            }else{
                this.show = true;
            }
        },
        insert_comments(){
            if(!this.$store.state.islogin){
                this.$message({
                    message: '你不登陆,我很难为你办事啊!',
                    type: 'warning'
                });
            }else if(this.textarea == ""){
                this.$message({
                    message: '请填写评论内容',
                    type: 'error'
                });
            }else if(this.value == ""){
                this.$message({
                    message: '请给出至少一星的评价',
                    type: 'error'
                });
            }else{
                this.axios.post("/api/pk_comments",`pid=${this.index}&content=${this.textarea}&score=${this.value}&date=${this.date}&uname=${this.uname}&avatar=${this.avatar}`).then(result=>{
                    if(result.data.code==200){
                        this.$message({
                        message: '感谢您的评论',
                        type: 'success'
                        });
                    }
                }).then(this.axios.get(`/api/pk_comments?pid=${this.index}`).then(result=>{
                    console.log(result.data.result);
                    this.comments = result.data.result;
                })).then(()=>{
                    history.go(0);
                    scrollTo(0,0);
                })
            }
        },
        go_to_cart(){
            this.$router.push(`/cart/${this.title}/${this.num1}/${this.price}`);
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
        });

        this.axios.get(`/api/pk_comments?pid=${this.index}`).then(result=>{
                this.comments = result.data.result;
                console.log(this.comments);
        })
    }
    
}
</script>
<style>

</style>