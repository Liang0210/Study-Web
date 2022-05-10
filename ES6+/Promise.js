//引入fs模块
const fs = require('fs');

//2.调用方法
/* fs.readFile('小狗.md',(err,data)=>{
    if(err) throw err;

    console.log(data.toString());
}) */
const p=new Promise(function(resolve,reject){
    fs.readFile('小狗.md',(err,data)=>{
        //判断是否失败
        //if(err) reject(err);
        //如果成功
        resolve(data);
        

    })
})

p.then(function(value){
console.log(value.toString())
},function(reson){
     console.log(reson)
})