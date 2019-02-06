const fs = require('fs')
const path = require('path')
/*1、fs.readFile(path.join(__dirname,'./test1.txt'),'utf-8',(err,dataStr)=>{
  console.log(dataStr)
})*/
/*
2、
//fs.readFile是异步的，所以用回调函数
//callback回调函数有2个参数，当有error，第一个参数有给值，没有则不给
function getFileBypath(fpath,callback) {
  fs.readFile(fpath,'utf-8',(error,dataStr)=>{
    if(error) return callback(error);
    callback(null,dataStr);
    }
  )}
getFileBypath(path.join(__dirname,'./test1.txt'),(error,result)=>{
  if(error) return console.log(error);
  console.log(result+":::::")
})*/
/*3、两个回调函数，这样好理解*/
function getFileBypath(fpath,succCb,failCb) {
  fs.readFile(fpath,'utf-8',(error,dataStr)=>{
      if(error) return failCb(error);
    succCb(dataStr);
    }
  )}
getFileBypath(path.join(__dirname,'./test1.txt'),function succCb(data) {
  console.log(data+"--成功了")
},function failCb(error) {
  console.log(error.message+"--失败了")
})
