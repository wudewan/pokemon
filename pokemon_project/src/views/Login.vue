<template>
  <div class="login">
    <el-container>
      <el-main>
        <div style="width: 30%; margin: 0 auto; color: #fff">
          <img src="../assets/img/header.png" width="100%" height="120vw" />
          <div style="margin: 20px 0; position: relative">
            用户名:
            <el-input v-model="username"></el-input>
          </div>
          <div style="margin: 20px 0; position: relative">
            密码:
            <el-input v-model="password" type="password"></el-input>
          </div>
            <el-button
            type="primary"
            style="width: 40%; display: block; margin: 30px auto"
            @click="login"
            >登录</el-button>
          <div style="display:flex;align-items:flex-end;justify-content:center;margin-top:20px">
            <router-link to="/register" style="color:#FFCA39;font-size:13px;">还没账号?快来注册一个吧~</router-link>
          </div>         
          
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
   login(){
    this.axios.post("/api/login",`username=${this.username}&password=${this.password}`).then(result=>{
      console.log(result);
      if(result.data.code == 200){
        this.$message({
          message: result.data.message,
          type: "success",
        });
        let username = result.data.result.uname;
        let avatar = result.data.result.avatar;
        this.$store.commit("loginOK",username);
        this.$store.commit("getAvatar",avatar);
        //向sessionStoragez中存储islogin与username
        sessionStorage.setItem("islogin","true");
        sessionStorage.setItem("username",username);
        sessionStorage.setItem("avatar",avatar);

        //跳转到首页
        this.$router.push("/")
      }else{
        this.$message({
          message: result.data.message,
          type: "error",
        });
      }
    })
   }
  },
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload .el-upload {
  border-radius: 50%;
}

.avatar-uploader {
  text-align: center;
}

</style>