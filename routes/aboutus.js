// 关于我们路由
const express=require('express');
const router=express.Router();
const request = require('request');

router.get('/',(req,res,next)=>{
	request.get(API_DOMAIN + '/api/job/category',(err,response,body)=>{
		if (!err && response.statusCode == 200) {
			let data=JSON.parse(body);
			console.log(data);
			res.cookie('navCur','actAbout');
			res.render('aboutus/index',{title:'关于我们-第1车贷',data:data});
		}else {
			console.log('err:'+err);
			res.sendStatus(500)
		}
	})

    });


module.exports=router;
