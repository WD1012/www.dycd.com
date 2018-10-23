/**
 * Created by zhengshaohua on 2017/12/18.
 */
$(function(){
    /*
    * href方式初始化tab
    * */
    $.tabHref('tabContent');

    //锚点
    var hash = $.trim(window.location.hash);
    if(hash.split('#')[1]){
        var a=document.createElement("a");
        a.href=hash;
        document.body.appendChild(a);
        setTimeout(function(){
            a.click();
        },2000);

    }

    /*
    * tab切换，通过索引控制内容显隐藏
    * */
    $('.J-tab').on('click','.fin-tab',function(){
        var href = $(this).data('href');
        window.location.href = href;
        // $(this).addClass('active').siblings().removeClass('active');
        // $('.J-con').children().addClass('fin-fadeInRight').hide().eq($(this).index()).show();
    })

    //$('#fin-business .fin-step').addClass('ind-stepSlide');
    $('#fin-business .fin-step').animate({width:'100%',opacity:'1'});
    $('#fin-business .step-txt').delay(800).fadeIn(800);
})