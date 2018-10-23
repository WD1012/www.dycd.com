// 媒体报道路由
const express=require('express');
const router=express.Router();
const fetch = require('node-fetch');

router.get('/',(req,res,next)=>{
    fetch(API_DOMAIN + '/api/article?p=1&rows=5', {
        method:'GET'
    })
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
            console.log(json);
            res.cookie('navCur','actNews');
            fetch(API_DOMAIN + '/api/article/home', {
                method:'GET'
            })
                .then(function (res) {
                    return res.json()
                })
                .then(function (aNews) {
                    console.log(aNews)
                    res.render('news/index',{title:'媒体报道-第1车贷',data:json,aNews:aNews})
                })

        })

});
router.get('/detail',(req,res,next)=>{
    let id=req.query.id;
    console.log(req.query.id);
    fetch(API_DOMAIN + '/api/article/detail?id='+id, {
        method:'GET'
    })
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
            res.render('news/detail',{title:'新闻详情-第1车贷',data:json})
        })

});
module.exports=router;
