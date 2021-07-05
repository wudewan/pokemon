<template>
  <div class="register">
    <el-container>
      <el-main>
        <div style="width: 30%; margin: 0 auto; color: #fff">
          <img src="../assets/img/header.png" width="100%" height="120vw" />
          <div style="margin-top: 20px; text-align: center">
            <el-upload
              class="avatar-uploader"
              action="/api/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>设置头像</p>
          </div>
          <div style="margin: 20px 0; position: relative">
            用户名:
            <el-input v-model="username" @blur="verdict_name"></el-input>
            <div style="margin-top: 3px" v-show="name_err">
              <img src="../../public/img/err.png" width="20px" /><span
                style="font-size: 13px; color: red"
                >用户名格式不正确,请重新输入3-6位且不能以_或数字开头的用户名</span>
            </div>

            <img
              src="../../public/img/true.png"
              width="20px"
              v-show="name_right"
              style="
                position: absolute;
                top: 50%;
                tansform: translateY(-50%);
                left: 102%;
              "
            />
          </div>
          <div style="margin: 20px 0; position: relative">
            设置密码:
            <el-input v-model="password_1" @blur="verdict_pwd_1" type="password"></el-input>
            <div style="margin-top: 3px" v-show="pwd_1_err">
              <img src="../../public/img/err.png" width="20px" /><span
                style="font-size: 13px; color: red"
                >密码格式不正确,请重新输入6-12位数字、字母或下划线的用密码</span
              >
            </div>
            <img
              src="../../public/img/true.png"
              width="20px"
              v-show="pwd_1_right"
              style="
                position: absolute;
                top: 50%;
                tansform: translateY(-50%);
                left: 102%;
              "
            />
          </div>
          <div style="margin: 20px 0; position: relative">
            确认密码:
            <el-input v-model="password_2" @blur="verdict_pwd_2" type="password"></el-input>
            <div style="margin-top: 3px" v-show="pwd_2_err">
              <img src="../../public/img/err.png" width="20px" /><span
                style="font-size: 13px; color: red"
                >两次密码输入不一致,请重新输入</span
              >
            </div>
            <img
              src="../../public/img/true.png"
              width="20px"
              v-show="pwd_2_right"
              style="
                position: absolute;
                top: 50%;
                tansform: translateY(-50%);
                left: 102%;
              "
            />
          </div>
          <el-button
            type="primary"
            style="width: 40%; display: block; margin: 0 auto"
            @click="register"
            >确认注册</el-button>
            <div style="display:flex;align-items:flex-end;justify-content:center;margin-top:20px">
            <router-link to="/login" style="color:#FFCA39;font-size:13px;">已有账号?赶紧去试试吧~</router-link>
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
      imageUrl: "",
      username: "",
      password_1: "",
      password_2: "",
      name_err: false,
      name_right: false,
      pwd_1_err: false,
      pwd_1_right: false,
      pwd_2_err: false,
      pwd_2_right: false,
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res,file);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    verdict_name() {
      let reg = /^(?!_)(?!\d)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]{3,6}$/;
      if (!reg.test(this.username)) {
        this.name_err = true;
        this.name_right = false;
      } else {
        this.name_err = false;
        this.name_right = true;
      }
    },
    verdict_pwd_1() {
      let reg = /^\w{6,12}$/;
      if (!reg.test(this.password_1)) {
        this.pwd_1_err = true;
        this.pwd_1_right = false;
      } else {
        this.pwd_1_err = false;
        this.pwd_1_right = true;
      }
      if (this.password_2 != "") {
        this.verdict_pwd_2();
      }
    },
    verdict_pwd_2() {
      if (this.password_1 == "") {
        return;
      } else if (this.password_1 == this.password_2) {
        this.pwd_2_err = false;
        this.pwd_2_right = true;
      } else {
        this.pwd_2_err = true;
        this.pwd_2_right = false;
      }
    },
    register() {
      if (this.name_right && this.pwd_1_right && this.pwd_2_right) {
        this.axios
          .post(
            "/api/register",
            `username=${this.username}&password=${this.password_1}&avatar=${this.imageUrl}`
          )
          .then((res) => {
            if (res.data.code == 200) {
              this.$message({
                message: "注册成功",
                type: "success",
              }); 
              this.$router.push("/login");           
            } else {
              this.$message({
                message: res.data.message,
                type: "error",
              });
            }
          })
      } else {
        this.$message({
          message: "注册失败,请检查",
          type: "error",
        });
      }
    },
  },
};
</script>
<style>
.register .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.register .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.register .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.register .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.register .avatar-uploader .el-upload .el-upload {
  border-radius: 50%;
}

.register .avatar-uploader {
  text-align: center;
}
</style>