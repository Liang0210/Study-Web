//1.引入fs模块
const { rejects } = require("assert");
const fs=require("fs");
const { resolve } = require("path");

//读取
function readdog(){
    return new Promise((resolve,reject)=>{
    fs.readFile("./web/ES6+/小狗.md",(err,data)=>{
        //如果失败
        if(err) reject(err);
        resolve(data)
    })
})
}
function readok(){
    return new Promise((resolve,reject)=>{
    fs.readFile("./web/ES6+/好吗.md",(err,data)=>{
        //如果失败
        if(err) reject(err);
        resolve(data)
    })
})
}
function readheart(){
    return new Promise((resolve,reject)=>{
    fs.readFile("./web/ES6+/心碎.md",(err,data)=>{
        //如果失败
        if(err) reject(err);
        resolve(data)
    })
})
}

//声明一个async函数
async function main(){
    let heart=await readheart();
    let ok=await readok();
    let dog=await readdog();
    console.log(heart.toString());
    console.log(ok.toString());
    console.log(dog.toString());
}
main();