const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const index=require('./routes/index'); //首页
const finance=require('./routes/finance'); //金融产品
const news=require('./routes/news'); //媒体报道
const cooperation=require('./routes/cooperation'); //官方合作
const aboutUs=require('./routes/aboutus'); //关于我们
const demo=require('./routes/demo'); //示例
const v1=require('./routes/v1'); //转换路由 车贷
const v3=require('./routes/v3'); //转换路由 梦享车

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('x-powered-by',false);

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//映射虚拟目录
app.use('/dist',express.static('public/dist'));
app.use('/vendor',express.static('public/vendor'));



//global
global.BASEDIR=__dirname;
global.VERSION='20180507';


//routes
app.use('/', index);
app.use('/finance',finance);
app.use('/news',news);
app.use('/cooperation',cooperation);
app.use('/aboutUs',aboutUs);
app.use('/v1',v1);
app.use('/v3',v3);
// app.use('/demo', demo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// // error handler
app.use(function(err, req, res,next) {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err.stack);
    // render the error page
    // res.status(err.status || 500);
    res.render('error',{title:'error'});

});


module.exports = app;
