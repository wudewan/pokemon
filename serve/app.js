// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

// 加载bodyParser模块
const bodyParser = require('body-parser');

//加载multer模块
const multer = require('multer');

// 加载MD5模块
const md5 = require('md5');

// 创建MySQL连接池
const pool = mysql.createPool({
  host: '127.0.0.1',   //MySQL服务器地址
  port: 3306,          //MySQL服务器端口号
  user: 'root',        //数据库用户的用户名
  password: '',        //数据库用户密码
  database: 'app',    //数据库名称
  connectionLimit: 20, //最大连接数
  charset: 'utf8'      //数据库服务器的编码方式
});

// 创建服务器对象
const server = express();

server.use(bodyParser.urlencoded({
  extended: false
}));


// 加载CORS模块
// const cors = require('cors');

// 使用CORS中间件
// server.use(cors({
//   origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
// }));




//注册接口
server.post('/register',(req,res)=>{
  //获取用户的用户名和密码
  // console.log(req.body.avatar);
  let username = req.body.username;
  let password = req.body.password;
  let avatar
  if(req.body.avatar == ""){
    avatar = "unload.png"
  }else{
    avatar = newPath
  }
  //以username为条件进行查找操作,以保证用户名的唯一性
  let sql = 'SELECT COUNT(uid) AS count FROM app_user WHERE uname=?';
  pool.query(sql,[username],(error,results)=>{
    if(error) throw error;
    let count = results[0].count;
    if(count == 0){
      //将用户的相关信息插入到数据表
      sql = 'INSERT INTO app_user(uname,upwd,avatar) VALUES(?,MD5(?),?)';
      pool.query(sql, [username,password,avatar], (error,results) =>{
        if(error) throw error;
        res.send({message:"ok",code:200})
      });
    }else{
      res.send({message:'用户已经存在,请重新注册',code:201})
    }
  })

})


//登录接口
server.post('/login',(req,res)=>{
  let username = req.body.username;
  let password = req.body.password;
  let sql = 'SELECT * FROM app_user WHERE uname=? AND upwd=MD5(?)';
  pool.query(sql,[username,password],(err,result)=>{
    if(err) throw err;
    if(result.length == 0){
      res.send({message:'用户名或密码输入错误',code:201});//登录失败
    }else{
      res.send({message:'登录成功',code:200,result:result[0]}); //登录成功
    }
  })
})


//获取index首页的内容的接口
server.get('/index',(req,res)=>{
  let sql = 'SELECT * FROM pokemon_index';
  pool.query(sql,(error,result)=>{
    if(error) throw error;
    res.send({message:'ok',code:200,result:result})
  })
})


// 顺序获取宝可梦的编号姓名和图片的接口
server.get('/pokemon_page', (req, res) => {
  // 获取客户端传递的page参数
  let page = req.query.page? req.query.page : 1;
  // 存储每页显示的记录数
  let pagesize = 16;
  // 通过公式来计算从第几条记录开始返回
  let offset = (page - 1) * pagesize;
  // 用于存储获取到的总记录数
  let rowcount;
  // 获取宝可梦图片总数
  let sql = 'SELECT COUNT(pid) AS count FROM pokemon';
  pool.query(sql,(error, results) => {
    if (error) throw error;
    // 将获取到总记录数赋给rowcount变量
    rowcount = results[0].count;
    /**************************************************/
    // 根据总记录数和每页显示的记录数来计算总页数
    let pagecount = Math.ceil(rowcount / pagesize);
    // 查询SQL语句
    sql = 'SELECT pid,pname,purl,pattr FROM pokemon LIMIT ?,? '  ;
    // 执行SQL
    pool.query(sql, [offset, pagesize], (error, results) => {
      if (error) throw error;
      res.send({ message: 'ok', code: 200, results: results, pagecount: pagecount });
    });
    /**************************************************/
  });
});

// 倒序获取宝可梦的编号姓名和图片的接口
server.get('/pokemon_page_desc', (req, res) => {
  // 获取客户端传递的page参数
  let page = req.query.page? req.query.page : 1;
  // 存储每页显示的记录数
  let pagesize = 16;
  // 通过公式来计算从第几条记录开始返回
  let offset = (page - 1) * pagesize;
  // 用于存储获取到的总记录数
  let rowcount;
  // 获取宝可梦图片总数
  let sql = 'SELECT COUNT(pid) AS count FROM pokemon';
  pool.query(sql,(error, results) => {
    if (error) throw error;
    // 将获取到总记录数赋给rowcount变量
    rowcount = results[0].count;
    /**************************************************/
    // 根据总记录数和每页显示的记录数来计算总页数
    let pagecount = Math.ceil(rowcount / pagesize);
    // 查询SQL语句
    sql = 'SELECT pid,pname,purl,pattr FROM pokemon ORDER BY pid DESC LIMIT ?,? '  ;
    // 执行SQL
    pool.query(sql, [offset, pagesize], (error, results) => {
      if (error) throw error;
      res.send({ message: 'ok', code: 200, results: results, pagecount: pagecount });
    });
    /**************************************************/
  });
});

//获取用户输入的宝可梦编号或名字对应的宝可梦数据的接口
server.get('/search',(req,res)=>{
  //获取用户输入的内容
  // console.log(req.query);
  let pname = req.query.pname;
  let pid = req.query.pid;
  let sql = 'SELECT * FROM pokemon WHERE pname=? OR pid=?';
  pool.query(sql,[pname,pid],(error,results)=>{
    if (error) throw error;
    res.send({message:'OK',code:200,result:results})
  })
})


// 获取所有宝可梦数据的接口
server.get('/pokemon', (req, res) => {
  // SQL查询
  let sql = "SELECT * from pokemon";
  // 执行SQL查询
  pool.query(sql,(error, results) => {
    if (error) throw error;
    // 返回数据到客户端
    res.send({ message: 'ok', code: 200, result: results});
  });
});

//获取轮播图图片的接口
server.get('/pokemon_carousel', (req, res) => {
  // SQL查询
  let sql = "SELECT * from carousel";
  // 执行SQL查询
  pool.query(sql,(error, results) => {
    if (error) throw error;
    // 返回数据到客户端
    res.send({ message: 'ok', code: 200, result: results});
  });
});

//获取电影栏的信息
server.get('/movies',(req,res)=>{
  let sql = "SELECT * FROM movies";
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({message:'ok', code:200,result:results});
  });
});

//获取电影详情信息的接口
server.get('/movies_details',(req,res)=>{
  // console.log(req.query);
  let id = req.query.id;
  let sql = 'SELECT * FROM movies_details WHERE id=?';
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send({message:'ok',code:200,result:result})
  })
})

//获取产品信息的接口
server.get('/pk_products',(req,res)=>{
  let category = req.query.category;
  let sql;
  if(!category){
    sql = 'SELECT * FROM pk_products';
  }else{
    sql = 'SELECT * FROM pk_products WHERE category=?'
  }
  pool.query(sql,[category],(err,result)=>{
    if(err) throw err;
    res.send({message:'ok',code:200,result:result});
  })
})

//获取产品详情信息的接口
server.get('/products_details',(req,res)=>{
  let did = Number(req.query.did);
  // console.log(req.query);
  let sql = 'select did,small_img,big_img,magnify_img,title,details_img,new_price from products_details inner join pk_products on did=id where did=?;'
  pool.query(sql,[did],(err,result)=>{
    if(err) throw err;
    res.send({message:"ok",code:200,result:result});
  })
})


//插入评论的接口
server.post('/pk_comments',(req,res)=>{
  let pid = Number(req.body.pid);
  // console.log(pid);
  let score = req.body.score;
  let content = req.body.content;
  let date = req.body.date;
  let uname = req.body.uname;
  let avatar = req.body.avatar;
  // console.log(score)
  let sql = `INSERT INTO comments_${pid}(content,score,riqi,uname,avatar) VALUES(?,?,?,?,?)`
  pool.query(sql,[content,score,date,uname,avatar],(err,result)=>{
    if(err) throw err;
    res.send({message:"ok",code:200});
  })
})

//获取评论的接口
server.get("/pk_comments",(req,res)=>{
  let pid = Number(req.query.pid);
  let sql = `SELECT * FROM comments_${pid} ORDER BY cid DESC`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({message:"ok",code:200,result:result});
  })
})

//删除评论的接口
server.delete("/del",(req,res)=>{
  let cid = req.query.cid;
  let pid = req.query.pid;
  sql = `DELETE FROM comments_${pid} WHERE cid = ?`;
  pool.query(sql,[cid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows > 0){
      res.send({message:"删除成功",code:200});
    }else{
      res.send({message:"删除失败",code:201});
    }
  })
})

// 插入购物车的接口
server.post("/cart",(req,res)=>{
  let uname = req.body.uname;
  let pname = req.body.pname;
  let count = req.body.count;
  let price = req.body.price;
  sql = `INSERT INTO cart(uname,pname,count,price) VALUES(?,?,?,?)`;
  pool.query(sql,[uname,pname,count,price],(err,result)=>{
    if(err) throw err;
    res.send({message:"ok",code:200});
  })
})

// 获取购物内容的接口
server.get("/cart",(req,res)=>{
  let uname = req.query.uname;
  sql = 'SELECT * FROM cart WHERE uname = ?';
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw err;
    res.send({message:"OK",code:200,result});
  })
})


// 删除购物车的内容
server.delete("/del_cart",(req,res)=>{
  let id = req.query.id;
  sql = 'DELETE FROM cart WHERE id = ?';
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows > 0){
      res.send({message:"删除成功",code:200});
    }else{
      res.send({message:"删除失败",code:201});
    }
  })
})

//获取上传头像保存在upload_avatar文件夹下,根据注册ID分文件夹保存
global.$dirname = __dirname;
const fs = require("fs");
const formidable = require("express-formidable");
let path = require("path");
var newPath = "";
server.use(formidable());
server.post("/upload",(req,res)=>{
  // console.log(req.files);
  let oldP=req.files.file.path;
  var f1 = path.join($dirname + "/upload_avatar/"  + "/");
  let exts=req.files.file.name.split('.');
  let ext=exts[exts.length-1];
  let tepname=(new Date()).getTime()+parseInt(Math.random()*9999);
  let newP=f1+tepname+"."+ext;
  newPath = tepname+"."+ext;
  // console.log(newPath);
  // console.log(req.files.file.name);
  fs.rename(oldP,newP,()=>{

  })
  res.json({"status":0});
})




// 指定服务器对象监听的端口号
server.listen(3000, () => {
  console.log('server is running...');
});