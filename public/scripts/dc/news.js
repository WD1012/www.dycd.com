$(function () {
    //新闻标题摘要字数控制
    $('.df-h').dotdotdot({height:70});
    $('.ft-subject').dotdotdot({height:50});
    var apiDomain=$('#imgDomain').text();
    var p=1;
    var strNewsMore='           <% var dl = d.data.lists;if(dl){for(var i = 0;i < dl.length;i++){ %>\n' +
        '                <div class="df-medium-bottom cfix">\n' +
        '                    <div class="df-medium-img">\n' +
        '                        <img src="<%= dl[i].focus_img %>" alt="">\n' +
        '                    </div>\n' +
        '                    <a href="/news/detail?id=<%= dl[i].aid %>" class="df-medium-resume">\n' +
        '                        <h4 class="ft-sub"><p class="ft-subject"><%- dl[i].title %></p></h4>\n' +
        '                        <p class="df-h dot-ellipsis dot-height-70" ><%= dl[i].desc %></p>\n' +
        '                        <p class="df-bearing-box cfix">\n' +
        '                            <span class="df-bearing"><%= dl[i].cname %></span>\n' +
        '                            <span class="df-afrom"><%= dl[i].pub_time %></span>\n' +
        '                            <span class="df-author"><%= dl[i].author %></span>\n' +
        '                            <span class="df-afrom"><%= dl[i].afrom %></span>\n' +
        '                        </p>\n' +
        '                    </a>\n' +
        '                </div>\n' +
        '                <% }}else{ %>\n' +
        '                <p class="df-nomore">没有更多了~</p>\n' +
        '                <% } %>';
    //更多新闻
    $("#news-more").click(function () {
        var self=$(this);
        p+=1;
        console.log(p);
        $.ajax({
            type:'get',
            url:'/v1/api/article',
            dataType: 'json',
            cache:false,
            data:{
                p:p,
                rows:5
            },
            success:function (data) {
                console.log(data);
                var html=ejs.render(strNewsMore,{d:data});
                self.parents('.df-new-more').before(html);
                $('.df-h').dotdotdot({height:70});
                $('.ft-subject').dotdotdot({height:50});
                if(!data.data.lists){
                    //已无数据
                    self.remove();
                }

            }
        })
    });
});