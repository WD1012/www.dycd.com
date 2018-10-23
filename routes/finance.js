// 金融产品路由
const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.cookie('navCur','actFin');
   res.render('finance/index',{title:'金融信息服务-第1车贷'})
});

module.exports=router;
