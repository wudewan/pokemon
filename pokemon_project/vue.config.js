module.exports = {
  //配置懒加载
  chainWebpack:config=>{
    config.plugins.delete("prefetch");
  },
  // 配置http代理跨域
  devServer:{
      proxy:{
          '/api':{
              target:'http://localhost:3000',
              changeOrigin:true,
              pathRewrite: {
                '^/api' : ''
              }
          }
      }
  }
}