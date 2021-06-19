SET NAMES UTF8;
DROP DATABASE IF EXISTS app;
CREATE DATABASE app CHARSET=UTF8;
USE app;


/** 用户信息 **/
CREATE TABLE app_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname   VARCHAR(32),
    upwd VARCHAR(32),
    phone VARCHAR(11),
    email   VARCHAR(64),
    avatar VARCHAR(128),
    user_name VARCHAR(32),
    gender INT
);

CREATE TABLE pokemon(
    pid VARCHAR(10),
    pname VARCHAR(20) NOT NULL,
    purl VARCHAR(10) NOT NULL ,
    pattr VARCHAR(10) NOT NULL 
)


