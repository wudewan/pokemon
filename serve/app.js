// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

// 加载bodyParser模块
const bodyParser = require('body-parser');

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
const cors = require('cors');

// 使用CORS中间件
server.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));

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

// 指定服务器对象监听的端口号
server.listen(3000, () => {
  console.log('server is running...');
});