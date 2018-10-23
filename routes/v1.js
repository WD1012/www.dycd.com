//转换路由 get请求
const express = require('express');
const router = express.Router();
const request =require('request');

//get 请求
router.use((req,res,next)=>{
    let url = req.originalUrl.substr(3);
    if(req.method==='GET'){
        console.log('this get');
        request.get(API_DOMAIN + url,(err,response,body)=>{
            if (!err && response.statusCode == 200) {
                let data=JSON.parse(body);
                console.log(data);
                res.json(data);
            }else {
                console.log('err:'+err);
                res.sendStatus(500)
            }
        })
    }else if(req.method==='POST'){
        console.log('this post');
        next('route')
    }

});

//post
router.use((req,res,next)=>{
    let postdata=req.body;
    let url = req.originalUrl.substr(3);
    request.post(API_DOMAIN + url, {form:postdata},(err,response,body)=>{
        if (!err && response.statusCode == 200) {
            let data=JSON.parse(body);
            console.log(data);
            res.json(data);
        }else {
            console.log('err:'+err);
            res.sendStatus(500)
        }
    })
});
module.exports = router;