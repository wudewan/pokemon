<template>
  <shell>
    <template #menu>
      <div style="text-align:center;margin:20px 0">
        <el-tag style="width:70%;"
          ><i class="el-icon-shopping-cart-full"></i> 我的购物车</el-tag
        >
      </div>
    </template>

    <template #main>
      <table
        border="1px solid #fff"
        width="100%"
        style="color:#fff;text-align:center;"
      >
        <thead>
          <tr>
            <td style="width:10%">
              <input type="checkbox" v-model="showAll" />&nbsp;全选
            </td>
            <td style="width:50%">商品</td>
            <td>单价</td>
            <td>数量</td>
            <td>小计</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td style="width:10%">
              <input
                type="checkbox"
                v-model="item.checked"
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </td>
            <td style="text-align:left">{{ item.pname }}</td>
            <td>¥{{ item.price.toFixed(2) }}</td>
            <td>
              <el-input-number
                size="mini"
                v-model="item.count"
                :min="1"
              ></el-input-number>
            </td>
            <td>¥{{ (item.price * item.count).toFixed(2) }}</td>
            <td><i class="el-icon-delete" @click="del(item.id)"></i></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">合计:</td>
            <td colspan="4">¥{{ sum.toFixed(2) }}</td>
          </tr>
        </tfoot>
      </table>
      <div style="display:flex;justify-content:flex-end;">
        <el-button style="width:30%" type="danger" @click="open"
          >结算</el-button
        >
      </div>
    </template>
  </shell>
</template>
<script>
import shell from "../components/Shell.vue";
export default {
  components: { shell },
  data() {
    return {
      uname: this.$store.state.username,
      cart: [],
      multipleSelection: [],
      showAll: 0,
    };
  },
  watch: {
    showAll(newVal, oldVal) {
      let result = this.cart.every((item) => {
        return item.checked == true;
      });
      if (!newVal && result) {
        this.cart.forEach((item) => {
          item.checked = false;
        });
      } else if (!newVal && !result) {
        return;
      } else if (newVal) {
        this.cart.forEach((item) => {
          item.checked = true;
        });
      }
    },
  },
  computed: {
    sum() {
      let result = 0;
      this.cart.forEach((item) => {
        if (item.checked) {
          result += item.price * item.count;
        }
      });
      let result2 = this.cart.every((item) => {
        return item.checked == true;
      });
      if (result2) {
        this.showAll = true;
      } else {
        this.showAll = false;
      }
      return result;
    },
  },
  methods: {
    open() {
      let arr = [];
      this.cart.forEach((item) => {
        if (item.checked) {
          arr.push(item.id);
        }
      });
      console.log(arr);
      if (arr.length == 0) {
        this.$message({
          message: "请选择要结算的商品",
          type: "error",
        });
      } else {
        this.$confirm("亲~确定带人家回家嘛?", "提示", {
          confirmButtonText: "那当然",
          cancelButtonText: "再想想",
          type: "warning",
        })
          .then(() => {
            arr.forEach((item) => {
              this.axios.delete(`/api/del_cart?id=${item}`);
            });
            this.$message({
              type: "success",
              message: "谢谢主人,我会尽快赶到您身边的!",
            });
            history.go(0);
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "还是算了吧!",
            });
          });
      }
    },
    del(cid) {
      this.$confirm("亲~确定不要人家了嘛?", "提示", {
        confirmButtonText: "残忍拒绝",
        cancelButtonText: "继续怜悯",
        type: "warning",
      })
        .then(() => {
          this.axios.delete(`/api/del_cart?id=${cid}`).then((result) => {
            if (result.data.code == 200) {
              this.$message({
                type: "success",
                message: "拜拜了,您呐!",
              });
            }
            history.go(0);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "还是舍不得!",
          });
        });
    },
  },
  mounted() {
    this.axios.get(`/api/cart?uname=${this.uname}`).then((result) => {
      this.cart = result.data.result;
    });
  },
};
</script>
<style>
.shell table td {
  padding: 10px;
}

.shell table tbody td:last-child :hover {
  cursor: pointer;
  transform: scale(1.2);
  color: red;
}
</style>
