//1,引入express
const { request, response } = require('express');
const express=require('express')

//2,创建应用对象
const app = express();

//3，创建路由规则
//request 是对请求报文的封装
//response是对响应报文的封装
app.all('/server',(request,response)=>{
//设置响应头 设置允许跨越
response.setHeader('Access-Control-Allow-Origin','*')
response.setHeader('Access-Control-Allow-Headers','*')

//设置响应
response.send('Hello AJAX')
});
app.get('/ie',(request,response)=>{
    //设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应
    response.send('Hello IE')
    });
app.get('/delay',(request,response)=>{
    //设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置定时器
    setTimeout(()=>{
        response.send('延时响应')
    },3000)
    
    });
//4,监听端口启动服务


app.all('/json-server',(request,response)=>{
    //设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data={
        'name':'aa',
        'age':'20'


    }
    //对对象进行转换
    let str=JSON.stringify(data);
    //设置响应
    response.send(str)
    });
    app.all('/axios',(request,response)=>{
        //设置响应头 设置允许跨越
        response.setHeader('Access-Control-Allow-Origin','*')
        response.setHeader('Access-Control-Allow-Headers','*')
        const data={
            'name':'aa',
            'age':'20'
    
    
        }
        //设置响应
        response.send(JSON.stringify(data));
        });

        app.all('/check-username',(request,response)=>{
            //设置响应
            const data={
                exist:1,
                msg:"用户名已经存在"
            };
            let str=JSON.stringify(data);
            response.end(`handle(${str})`)
            });

            app.all('/jquery-jsonp',(request,response)=>{
                //设置响应
                const data={
                    exist:1,
                    msg:"用户名已经存在"
                };
                let str=JSON.stringify(data);
                response.end(`handle(${str})`)
                });
                app.listen(8000,()=>{
                    console.log("服务已经启动，8000端口监听中")
                })