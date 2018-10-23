/**
 * Created by zhengshaohua on 2017/12/18.
 */
var bFlag = false;
$.extend({
	/**
	 * 截取传参
	 * @param name key值
	 * @returns {null}
	 * @constructor
	 */
	getQueryString: function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null)return decodeURI(r[2]);
		return null;
	},
	/**
	 * tabHref切换 通过href，例：?query1=**
	 * @param query1: 内容id变量
	 */
	tabHref: function (query1) {
		var content = $.getQueryString(query1);
		$('#' + content).show();
		$('#data-' + content).addClass('active');

	},
	/**
	 * 毫秒转换为日期 $.dateFmt(1439257392759,"yyyy-MM-dd hh:mm");
	 * @param time 毫秒 此处 秒*1000
	 * @param fmt  转换格式
	 * @returns {*}
	 */
	dateFmt: function (time, fmt) {
		var t = new Date(time * 1000);
		var o = {
			"M+": t.getMonth() + 1, //月份
			"d+": t.getDate(), //日
			"h+": t.getHours(), //小时
			"m+": t.getMinutes(), //分
			"s+": t.getSeconds(), //秒
			"q+": Math.floor((t.getMonth() + 3) / 3), //季度
			"S": t.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	},
	/**
	 * 单按钮无回调弹框提示语 $.dcAlt('内容')
	 */
	dcAlt: function (txt) {
		if (!bFlag) {
			txt = txt || '';
			var modal = '<div class="modal">\
			<div class="modal-dialog  animated bounceInDown" role="document">\
			<div class="modal-content">\
			<div class="modal-header">\
			<button type="button" class="close modal-close"><span aria-hidden="true">&times;</span></button>\
		<h4 class="modal-title">提示</h4>\
		</div>\
		<div class="modal-body">\
			<p>' + txt + '</p>\
		</div>\
		<div class="modal-footer text-center">\
			<button type="button" class="bsbtn bsbtn-confirm modal-close">确定</button>\
		</div>\
		</div>\
		</div>\
		</div>';

			$("body").append(modal);
			bFlag = true;
			//禁止鼠标滚动
			if($.fn.fullpage){
				$.fn.fullpage.setAllowScrolling(false);
			}else{
				$(document).bind('mousewheel', function(event, delta) { return false; });
			}
		}
		//关闭
		$(".modal-close").on('click', function () {
			$(this).parents('.modal').remove();
			bFlag = false;
			//解除鼠标滚动
			if($.fn.fullpage){
				$.fn.fullpage.setAllowScrolling(true);
			}else{
				$(document).unbind('mousewheel');
			}
		})
	}
});
$(function () {
	//当前导航高亮
	var navCur = $.cookie('navCur');
	$('#' + navCur).addClass('active');
	//媒体报道视频播放 jwplayer视频调用页面DOM
	$('body').on('click','.J-player',function () {
		var file = $(this).data('video');
		if (!file) {
			return false;
		} else {
			$('.df-mask').show();
			jwplayer("mediaplayer").setup({//通过js调用播放器并安装到指定容器（mediaplayer）内
				type: 'mp4',
				flashplayer: "/vendor/player.swf",//调用播放器
				file: file,//调用视频文件
				width: 640,//播放器宽
				height: 420,//播放器高
				aspectratio: "10:10",//自适应宽高比例，如果设置宽高比，可设置宽度100%,高度不用设置
				// image: "/dist/images/dc/bg-news.jpg",//视频预览图片
				controlbar: "over",//控制条位置
				autostart: true, //自动播放
				skin: '/vendor/skins/five.xml'
			})
		}
		//禁止鼠标滚动
		if($.fn.fullpage){
			$.fn.fullpage.setAllowScrolling(false);
		}else{
			$(document).bind('mousewheel', function(event, delta) { return false; });
		}
	});
	//关闭视频  jwplayer视频移除页面DOM
	$('.df-close').click(function () {
		jwplayer("mediaplayer").remove();
		$('.df-mask').hide();
		//解除鼠标滚动
		if($.fn.fullpage){
			$.fn.fullpage.setAllowScrolling(true);
		}else{
			$(document).unbind('mousewheel');
		}
	});
	// 回到顶部效果
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		var backTop =$(window).scrollTop();
		var innerHeight = $(window).height();
		// console.log(innerHeight);
		if(backTop > innerHeight){
			$('.df-backTop').show();
			$('.df-backTop').click(function(){
				$(window).scrollTop(0);
			})
		}else{
			$('.df-backTop').hide();
		}
	})


});