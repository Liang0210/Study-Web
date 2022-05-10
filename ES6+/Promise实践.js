const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');
/* const { resolve } = require('path');
fs.readFile('心碎.md',(err,data1)=>{
    fs.readFile('小狗.md',(err,data2)=>{
        let result=data1+'\r\n'+data2;
        console.log(result)
    })
}) */

//使用Promise实现
const p= new Promise((resolve,reject)=>{
    fs.readFile('心碎.md',(err,data)=>{
        resolve(data);
    });
});

p.then(value=>{
    return new Promise((resolve,reject)=>{
    fs.readFile('好吗.md',(err,data)=>{
        resolve([value,data]);
    });
});
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('小狗.md',(err,data)=>{
            value.push(data);
            resolve(value)
        });      
    })
}).then(value=>{
    console.log(value.join('\r\n'));
});