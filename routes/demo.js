// demo
const express=require('express');
const router=express.Router();
const fetch = require('node-fetch');

//中间件 挂载路径或不挂载都会继承
router.use(function (req, res, next) {
    console.log('来自demo的中间件');
    next();
});
//路由 不继承  fetch数据并渲染
router.get('/fetchRender',(req,res,next)=>{
    fetch(MC_DOMAIN + '/api/icar/n/common/queryCities', {
        method:'GET'
    })
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
            res.render('demo/fetchRender',{title:'node fetch渲染',data:json})
            // res.json(json) 接口返回json
            // res.redirect('/') 重定向
            // res.download('./README.md') 提供下载
        });

});
//客户端请求中间层 中间层转换请求
router.get('/virAjax',(req,res,next)=>{
   res.render('demo/virAjax',{title:'虚拟请求'})
});
module.exports=router;