$(function () {
	/*
  * 关于我们标题切换 通过下标
  * */
	$('.df-about-title').click(function () {
		// console.log($(this).index());
		$('.df-cityassemblet').hide();
		$('.df-cityassembleb').hide();
		$('.df-cityassemblem').hide();
		$('.df-boxblet1').show();
		var ind = $(this).index();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var tabc = $('.J-tabw').find('.J-tabc');
		tabc.hide().eq(ind).show().addClass('fin-fadeInRight');
		if (ind == 5) {
			/*
    * 初始化联系我们展示效果 （默认山东显示）
    * */
			$('.df-cityassemblet').hide();
			$('.df-cityassembleb').hide();
			$('.df-cityassemblem').hide();
			$('.df-sd').addClass('active');
			$('.df-city').velocity({ scale: 1 }, { duration: 100, easing: "ease" });
			$('.df-cityassemblet1').velocity({ 'top': '-55px' }, { duration: 1000 }).show();
			$('.df-cityassembleb1').velocity({ 'top': '125px' }, { duration: 1000 }).show();
			function myFunction() {
				setTimeout(function () {
					$('.df-cityassemblem1').show();
				}, 1000);
			}
			myFunction();
		} else {
			$('.df-cityassemblet1').velocity({ 'top': '35px' }, { duration: 0 }).show();
			$('.df-cityassemblem1').hide();
			$('.df-cityassembleb1').velocity({ 'top': '93px' }, { duration: 0 }).show();
		}
	});
	/*
  * 联系我们地图设置
  * */
	var dyCities = {
		'df-1': { pro: '黑龙江', city: '哈尔滨  齐齐哈尔  牡丹江  大庆  佳木斯  七台河  黑河  双鸭山  鸡西' },
		'df-2': { pro: '北京', city: '北京' },
		'df-3': { pro: '河北', city: '沧州  唐山  秦皇岛  石家庄  保定  邯郸  廊坊  张家口  衡水  邢台  承德' },
		'df-4': { pro: '天津', city: '天津' },
		'df-5': { pro: '山东', city: '青岛  临沂  济宁  济南  烟台  泰安  聊城  威海  淄博  潍坊  东营  日照  滨州  枣庄  菏泽  德州  滕州  莱芜' },
		'df-6': { pro: '河南', city: '洛阳  郑州  开封  信阳  濮阳  商丘  三门峡  平顶山  安阳  南阳  周口  新乡  焦作  许昌  驻马店  济源' },
		'df-7': { pro: '安徽', city: '合肥  阜阳  芜湖  池州  亳州  宿州  蚌埠  铜陵  六安  滁州  淮南  马鞍山  黄山  宣城  巢湖  安庆' },
		'df-8': { pro: '上海', city: '上海' },
		'df-9': { pro: '江苏', city: '苏州  常州  南京  南通  徐州  无锡  淮安  宿迁  扬州  镇江  连云港  盐城  泰州' },
		'df-10': { pro: '浙江', city: '杭州  金华  台州  绍兴  丽水  宁波  温州   湖州  衢州  嘉兴  舟山' },
		'df-11': { pro: '江西', city: '南昌  赣州  上饶  鹰潭  景德镇  九江  新余  抚州  吉安  萍乡  宜春' },
		'df-12': { pro: '福建', city: '泉州  厦门  三明  南平  福州  龙岩  漳州  莆田  宁德' },
		'df-13': { pro: '广东', city: '深圳  东莞  佛山  广州  中山  惠州  阳江  湛江  珠海  汕尾  茂名  河源  韶关  潮州  汕头  梅州  肇庆  清远  江门  揭阳  云浮' },
		'df-14': { pro: '广西', city: '百色  南宁  柳州  桂林  贵港  北海  钦州  贺州  玉林  防城港  来宾  梧州  河池  崇左' },
		'df-15': { pro: '吉林', city: '长春  辽源  吉林  白山  延边  通化  四平  白城  松原  榆树' },
		'df-16': { pro: '辽宁', city: '大连  沈阳  辽宁  抚顺  营口  锦州  本溪  鞍山  阜新  葫芦岛  辽阳  丹东  盘锦' },
		'df-17': { pro: '内蒙古', city: '鄂尔多斯  包头  呼和浩特  兴安  呼伦贝尔  通辽  巴彦淖尔  赤峰  锡林郭勒  乌兰察布' },
		'df-18': { pro: '宁夏', city: '银川  中卫' },
		'df-19': { pro: '甘肃', city: '兰州  庆阳  酒泉  白银  张掖  嘉峪关  临夏  武威' },
		'df-20': { pro: '山西', city: '太原  大同  运城  晋中  临汾  晋城  长治  朔州  吕梁' },
		'df-21': { pro: '陕西', city: '西安  榆林  渭南  安康  汉中  咸阳  宝鸡  延安' },
		'df-22': { pro: '青海', city: '西宁  海西' },
		'df-23': { pro: '湖北', city: '荆州  武汉  十堰  宜昌  随州  仙桃  黄石  孝感  荆门  咸宁  襄阳  恩施  黄冈  潜江' },
		'df-24': { pro: '四川', city: '成都  乐山  绵阳  广安  攀枝花  泸州  凉山  达州  自贡  德阳  遂宁  南充  巴中  宜宾  内江  资阳  广元  眉山  雅安' },
		'df-25': { pro: '重庆', city: '重庆' },
		'df-26': { pro: '湖南', city: '长沙  株洲  衡阳  岳阳  郴州  常德  娄底  益阳  永州  怀化  邵阳  湘潭' },
		'df-27': { pro: '贵州', city: '贵阳  黔西南  遵义  黔东南  铜仁  六盘水  黔南  毕节  安顺' },
		'df-28': { pro: '云南', city: '昆明  曲靖  玉溪  丽江  红河  文山  大理  德宏  昭通  楚雄  普洱' },
		'df-29': { pro: '海南', city: '海口  琼海  东方  三亚' },
		'df-30': { pro: '新疆', city: '乌鲁木齐  伊宁  伊犁  哈密  克拉玛依' }
	};
	/*
  * 地图高亮效果
  * 获取当前城市省份集合  dyCities[].pro  dyCities[].city
  * */
	$('.df-city').hover(function () {
		$('.df-boxblet1').hide();
		$('.df-sd').removeClass('active');
		$('.df-cityassembleb').show();
		$(this).siblings().velocity({ scale: 1 }, { duration: 100, easing: "ease" });
		$(this).velocity({ scale: 1.5 }, { duration: 100, easing: "ease" });
		var collect = $(this).data('city');
		var provcol = dyCities[collect].pro;
		var citycol = dyCities[collect].city;
		$('.df-cityassemblet').html(provcol).show();
		$('.df-cityassemblem').html(citycol).show();
		if ($('.df-cityassemblem').html() == '') {
			$('.df-cityassemblem').css({ padding: 0 });
		} else {
			$('.df-cityassemblem').css({ padding: '20px 23px' });
		}
	});
	/*
  * 加入我们左侧菜单切换
  * */
	var strJobInit = '           <% var jl=data.lists;if(jl){ for(var i=0;i<jl.length;i++){%>\n' + '                    <div class="df-right-box">\n' + '                        <div class="df-right-tit cfix">\n' + '                            <h3 class="df-designer"><%= jl[i].title%></h3>\n' + '                            <div class="df-need-box">\n' + '                                <span class="df-need">需求人数：<%= jl[i].num%>人</span>\n' + '                                <span class="df-site">工作地点：<%= jl[i].job_city%></span>\n' + '                            </div>\n' + '                        </div>\n' + '                        <div class="df-post">\n' + '                            <p class="df-duty">岗位职责</p>\n' + '                            <div class="df-duty-h"><%- jl[i].job_duty%></div>\n' + '                        </div>\n' + '                        <div class="df-post">\n' + '                            <p class="df-duty">岗位要求</p>\n' + '                            <div class="df-duty-h"><%- jl[i].job_require%></div>\n' + '                        </div>\n' + '                    </div>\n' + '                    <%}%>\n' + '                    <% if(jl.length>=5){%>\n' + '                    <div class="df-join-bottom J-moreJob">\n' + '                        <span class="df-skim">浏览更多</span>\n' + '                    </div>\n' + '                    <%}}else{%>' + '                       <div class="df-right-box">暂无相关职位</div>' + '                      <%}%>';
	var strJobMore = '           <% var jl=data.lists;if(jl){ for(var i=0;i<jl.length;i++){%>\n' + '                    <div class="df-right-box">\n' + '                        <div class="df-right-tit cfix">\n' + '                            <h3 class="df-designer"><%= jl[i].title%></h3>\n' + '                            <div class="df-need-box">\n' + '                                <span class="df-need">需求人数：<%= jl[i].num%>人</span>\n' + '                                <span class="df-site">工作地点：<%= jl[i].job_city%></span>\n' + '                            </div>\n' + '                        </div>\n' + '                        <div class="df-post">\n' + '                            <p class="df-duty">岗位职责</p>\n' + '                            <div class="df-duty-h"><%- jl[i].job_duty%></div>\n' + '                        </div>\n' + '                        <div class="df-post">\n' + '                            <p class="df-duty">岗位要求</p>\n' + '                            <div class="df-duty-h"><%- jl[i].job_require%></div>\n' + '                        </div>\n' + '                    </div>\n' + '                    <%}%>\n' + '                    <%}else{%>' + '                       <div class="df-nomore">没有更多了~</div>' + '                      <%}%>';
	var cid = null;
	var p = 1;
	$('.df-synthesize').click(function () {
		var jobs = $('.J-join-box').find('.J-join');
		$(this).siblings().removeClass('df-synthesize-change');
		$(this).addClass('df-synthesize-change');
		p = 1;
		cid = $(this).data('id');
		$.ajax({
			type: 'get',
			url: '/v1/api/job',
			dataType: 'json',
			cache: false,
			data: {
				p: p,
				rows: 5,
				cid: cid
			},
			success: function (data) {
				// console.log(data)
				var html = ejs.render(strJobInit, data);
				jobs.html(html);
			}
		});
	});
	//浏览更多
	$(".J-join").on('click', '.J-moreJob', function () {
		var self = $(this);
		p += 1;
		console.log(p);
		$.ajax({
			type: 'get',
			url: '/v1/api/job',
			dataType: 'json',
			cache: false,
			data: {
				p: p,
				rows: 5,
				cid: cid
			},
			success: function (data) {
				// console.log(data);
				var html = ejs.render(strJobMore, data);
				self.before(html);
				if (!data.data.lists) {
					//已无数据
					self.remove();
				}
			}
		});
	});
	// 初始化职位
	function jobInit() {
		var jobs = $('.J-join-box').find('.J-join');
		cid = 1;
		$.ajax({
			type: 'get',
			url: '/v1/api/job',
			dataType: 'json',
			cache: false,
			data: {
				p: 1,
				rows: 5,
				cid: cid
			},
			success: function (data) {
				// console.log(data)
				var html = ejs.render(strJobInit, data);
				jobs.html(html);
			}
		});
	}
	jobInit();
	/*
  * 核心团队鼠标移入移出效果
  * */
	$('.df-team').mouseover(function () {
		$(this).find('.df-team-box').velocity('stop').velocity({ bottom: '0px' }, { duration: 100 });
	});
	$('.df-team').mouseout(function () {
		$(this).find('.df-team-box').velocity('stop').velocity({ bottom: '-145px' }, { duration: 100 });
	});

	/*
  * 底部关于我们菜单跳转
  * */
	var id = $.getQueryString('id');
	if (id) {
		// 关于我们标题切换
		$('.J-tabc').hide();
		$('.J-tabw').find('.J-tabc').eq(id).show();
		$('.df-about-title').removeClass('active');
		$('.df-title-b').find('.df-about-title').eq(id).addClass('active');
		if (id == 5) {
			/*
    * 联系我们初始化展示效果 （默认显示山东）
    * */
			$('.df-boxblet1').show();
			$('.df-cityassemblet').hide();
			$('.df-cityassembleb').hide();
			$('.df-cityassemblem').hide();
			$('.df-sd').addClass('active');
			$('.df-city').velocity({ scale: 1 }, { duration: 100, easing: "ease" });
			$('.df-cityassemblet1').velocity({ 'top': '-55px' }, { duration: 1000 }).show();
			$('.df-cityassembleb1').velocity({ 'top': '125px' }, { duration: 1000 }).show();
			function myFunction() {
				setTimeout(function () {
					$('.df-cityassemblem1').show();
				}, 1000);
			}
			myFunction();
		} else {
			$('.df-cityassemblet1').velocity({ 'top': '35px' }, { duration: 0 }).show();
			$('.df-cityassemblem1').hide();
			$('.df-cityassembleb1').velocity({ 'top': '93px' }, { duration: 0 }).show();
		}
	}
});