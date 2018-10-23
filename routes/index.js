const express = require('express');
const router = express.Router();
// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
    //判断当前环境 默认development   testing production
    let NODE_ENV = process.env.NODE_ENV;
    switch (NODE_ENV) {
        case 'development':
            global.API_DOMAIN='http://dev.dycd.com'; //车贷api
            global.MC_DOMAIN='https://qaopen.dycd.com';  //梦享车api
            break;
        case 'testing':
            global.API_DOMAIN='http://chedai.test.dycd.com';
            global.MC_DOMAIN='https://qaopen.dycd.com';
            break;
        case 'production':
            global.API_DOMAIN='http://chedai.dycd.com';
            global.MC_DOMAIN='https://open.dycd.com';
            break;
        default:
            console.log('来自index的中间件 未知的NODE_ENV' + NODE_ENV);
            break;
    }
    console.log('FROM index NODE_ENV ====' + NODE_ENV);
    console.log('API_DOMAIN ==== '+API_DOMAIN );
    console.log('MC_DOMAIN ==== '+MC_DOMAIN );
    next()
});

/* GET home page. */
router.get('/',  (req, res, next) =>{
    res.cookie('navCur','actIndex');
    res.render('index', {title: '首页-第1车贷'});

});


module.exports = router;
