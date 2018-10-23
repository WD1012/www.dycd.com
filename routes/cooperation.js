// 官方合作路由
const express=require('express');
const router=express.Router();
const request = require('request');

router.get('/',(req,res,next)=>{
	request.get(API_DOMAIN + '/api/partner',(err,response,body)=>{
		if (!err && response.statusCode == 200) {
			let data=JSON.parse(body);
			console.log(data);
			res.cookie('navCur','actCoop');
			res.render('cooperation/index',{title:'合作伙伴-第1车贷',data:data});
		}else {
			console.log('err:'+err);
			res.sendStatus(500)
		}
	})
});

module.exports=router;
