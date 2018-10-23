$(function () {
	var indexFlag = false;

	var newsFlag = false;
	//placeholder兼容ie
	$('input, textarea').placeholder();
	var navigationTxt = ['首页', '精选车源', '个人车源', '媒体报道', 'A P P下载', '梦享车A P P'];
	$('#dc-index').fullpage({
		verticalCentered: false,
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['首页', '精选车源', '个人车源', '媒体报道', 'A P P下载', '梦享车A P P'],
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		scrollingSpeed: 700,
		lazyLoading: true,
		controlArrows: false,
		parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
		onLeave: function (index, nextIndex, direction) {
			$('#fp-nav .fp-tooltip').show();
			//"我要贷款" "预约看车"
			$('.ind-loan').hide();
			$('.ind-order').hide();
			//左侧导航
			$('#fp-nav').hide();
			$('#fp-nav span').html('');
			//客服按钮
			$('.ind-service').hide();
			if (index == "1") {
				$('.ind-guide').removeClass('ind-fadeInBottom ind-fadeOutBottom').hide();
				$('.section1 .ind-left,.section1 .ind-right').hide();
			} else if (index == "2") {
				$('.section2 .ind-toMore').hide();
			} else if (index == "3") {
				$('#swiper2 img').hide();
				// $('.section5 .ind-perStep').removeClass('ind-stepSlide');
				$('.section3 .ind-perStep').css({ width: 0, opacity: 0 });
				$('.sec5-toDetail,#next2,#prev2,.sec5-toMore').hide();
			} else if (index == "4") {
				$('.sec6-box1').hide();
				$('.sec6-box2').hide();
				$('.sec6-box3').hide();
				$('.sec6-box4').hide();
				$('.sec6-box5').hide();
			} else if (index == "5") {
				$('.section5 .sec7-name').removeClass('fin-fadeInRight').hide();
				$('.sec7-loadWrap').hide();
			} else if (index == "6") {
				$('.section6 .sec8-name').removeClass('fin-fadeInLeft').hide();
				$('.sec8-loadWrap').hide();
			}
		},
		afterLoad: function (anchorLink, index) {
			$('#fp-nav a.active').next().hide();
			//设置内容盒子高度
			$('.ind-contentW').css('height', $(this).height());

			if (index > 1) {
				//左侧导航
				$('#fp-nav span').eq(index - 1).html(navigationTxt[index - 1]);
				//顶部导航
				$('.dc-header').mouseover(function () {
					// $(this).children('.header-con').stop().fadeIn();
					$(this).children('.header-con').velocity('stop').velocity({ top: '0px' }, { duration: 300 });
				}).mouseout(function () {
					// $(this).children('.header-con').stop().fadeOut();
					$(this).children('.header-con').velocity('stop').velocity({ top: '-85px' });
				});
			}
			// if(index == 4 || index == 5 ){
			// 	selectCity();
			// }
			$('.ind-apply').hide();
			//客服按钮
			$('.ind-service').addClass('ind-fadeInRight').delay(500).fadeIn();
			$('#fp-nav').addClass('ind-fadeInLeft').delay(800).fadeIn();
			/*
    * 1）右侧客服图标背景
    * 2）"我要贷款"，"预约看车"显示隐藏
    * */
			switch (index) {
				case 1:
					$('.ind-service ul').removeClass('ind-garyBg').addClass('ind-whiteBg');
					$('.section1 .ind-left,.section1 .ind-right').delay(500).fadeIn(800);
					$('.ind-guide').addClass('ind-fadeInBottom').show();
					setTimeout(function () {
						$('.ind-guide').addClass('ind-fadeOutBottom');
					}, 4000);

					$('.header-con').removeClass('header-conBg animated').show();
					$('.header-con').velocity('stop').velocity({ top: '0px' });
					$('.dc-header').off('mouseover');
					$('.dc-header').off('mouseout');
					$('.ind-order').hide();
					$('.ind-loan').hide();
					break;
				case 2:
					$('.ind-service ul').removeClass('ind-garyBg').addClass('ind-whiteBg');
					/* 右侧 我要贷款 */
					$('.ind-order').hide();
					$('.ind-loan').addClass('ind-fadeInRight').delay(500).fadeIn();
					$('.section2 .ind-toMore').fadeIn();
					break;
				case 3:
					$('.ind-service ul').removeClass('ind-garyBg').addClass('ind-whiteBg');
					$('.ind-loan').hide();
					$('.ind-order').addClass('ind-fadeInRight').delay(500).fadeIn();
					// $('.section5 .ind-perStep').addClass('ind-stepSlide');
					$('.section3 .ind-perStep').animate({ width: '100%', opacity: '1' });

					/* 页内轮播 */
					var mySwiper = new Swiper('#swiper2', {
						direction: 'horizontal',
						loop: true,
						speed: 600,
						parallax: true, //视觉差
						// 如果需要前进后退按钮
						prevButton: '#prev2',
						nextButton: '#next2',
						onSlideChangeEnd: function (swiper) {
							$('#swiper2 img').removeClass('ind-carSlide').hide();
							$('#swiper2 img').eq(swiper.activeIndex).addClass('ind-carSlide').fadeIn();
							$('.sec5-toDetail').hide().eq(swiper.activeIndex).delay(300).fadeIn(500);
						}
					});
					$('#prev2,#next2,.sec5-toMore').delay(500).fadeIn(500);
					break;
				case 4:

					if (!newsFlag) {
						var strNews = '<% if(data){var dn = data.lists;if(dn && dn.length > 0){ %>\n' + '            <div class="sec6-box1 sec6-box">\n' + '                <img src="<%= dn[0].focus_img %>" class="ind-newImg">\n' + '                <img src="/dist/images/dc/bg-icon.png" alt="" class="ind-play J-player" data-video="<%= dn[0].video %>">\n' + '                <div class="sec6-title">\n' + '                    <div class="title-bg"></div>\n' + '                    <p class="title-txt"><%= dn[0].title %></p>\n' + '                </div>\n' + '            </div>\n' + '            <div class="sec6-box2 sec6-box">\n' + '                <img src="<%= dn[1].focus_img %>" class="ind-newImg">\n' + '                <img src="/dist/images/dc/bg-icon.png" alt="" class="ind-play J-player" data-video="<%= dn[1].video %>">\n' + '                <div class="sec6-title">\n' + '                    <div class="title-bg"></div>\n' + '                    <p class="title-txt"><%= dn[1].title %></p>\n' + '                </div>\n' + '            </div>\n' + '            <a href="/news/detail?id=<%= dn[2].aid %>" class="sec6-box3 sec6-box" target="_blank">\n' + '                <img src="<%= dn[2].focus_img %>" class="ind-newImg">\n' + '                <div class="sec6-title">\n' + '                    <div class="title-bg"></div>\n' + '                    <p class="title-txt"><%= dn[2].title %></p>\n' + '                </div>\n' + '            </a>\n' + '            <a href="/news/detail?id=<%= dn[3].aid %>" class="sec6-box4 sec6-box" target="_blank">\n' + '                <img src="<%= dn[3].focus_img %>" class="ind-newImg">\n' + '                <div class="sec6-title">\n' + '                    <div class="title-bg"></div>\n' + '                    <p class="title-txt"><%= dn[3].title %></p>\n' + '                </div>\n' + '            </a>\n' + '            <a href="/news/detail?id=<%= dn[4].aid %>" class="sec6-box5 sec6-box" target="_blank">\n' + '                <img src="<%= dn[4].focus_img %>" class="ind-newImg">\n' + '                <div class="sec6-title">\n' + '                    <div class="title-bg"></div>\n' + '                    <p class="title-txt"><%= dn[4].title %></p>\n' + '                </div>\n' + '            </a>\n' + '            <% }} %>';

						$.ajax({
							type: 'get',
							url: '/v1/api/article/home',
							dataType: 'json',
							cache: false,
							success: function (data) {
								// console.log(data)
								var html = ejs.render(strNews, data);
								$('#indNews').before(html);
								$('.sec6-box1').fadeIn(800);
								$('.sec6-box2').delay(100).fadeIn(800);
								$('.sec6-box3').delay(200).fadeIn(800);
								$('.sec6-box4').delay(300).fadeIn(800);
								$('.sec6-box5').delay(400).fadeIn(800);
								$('.sec6-toMore').delay(500).fadeIn(800);
								$('.sec6-box').hover(function () {
									$(this).children('.sec6-title').velocity('stop').velocity({ bottom: '0px' });
								}, function () {
									$(this).children('.sec6-title').velocity('stop').velocity({ bottom: '-100%' });
								});
							}
						});

						newsFlag = true;
					}
					$('.sec6-box1').fadeIn(800);
					$('.sec6-box2').delay(100).fadeIn(800);
					$('.sec6-box3').delay(200).fadeIn(800);
					$('.sec6-box4').delay(300).fadeIn(800);
					$('.sec6-box5').delay(400).fadeIn(800);
					$('.sec6-toMore').delay(500).fadeIn(800);
					$('.sec6-box').hover(function () {
						$(this).children('.sec6-title').velocity('stop').velocity({ bottom: '0px' });
					}, function () {
						$(this).children('.sec6-title').velocity('stop').velocity({ bottom: '-100%' });
					});
					break;
				case 5:
					$('.section5 .sec7-name').addClass('fin-fadeInRight').show();
					$('.section5 .sec7-loadWrap').delay(400).fadeIn(800);
					break;
				case 6:
					$('.section6 .sec8-name').addClass('fin-fadeInLeft').show();
					$('.section6 .sec8-loadWrap').delay(400).fadeIn(800);
					break;
			}
		},
		afterRender: function () {
			$('#fp-nav').addClass('animated');
			$('#fp-nav span').eq(4).addClass('large');
			$('#fp-nav span').eq(5).addClass('largest');
			$('.dc-header').addClass('ind-header');
		},
		afterResize: function () {},
		afterResponsive: function (isResponsive) {},
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
		onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
	});
	//右侧"我要贷款""预约看车"，鼠标放上 提交框显示隐藏
	$('.ind-sus').click(function () {
		$(this).children('.ind-apply').addClass('ind-fadeInRight').show();
	});
	$('.cancel-btn').click(function (e) {
		$(this).parent().removeClass('ind-fadeInRight').hide();
		e.stopPropagation();
	});

	//首页我要贷款
	var rePattern = /^1[3-9][0-9]\d{8}$/;
	var reName = /^[\u4E00-\u9FA5A-Za-z]+$/;
	var clicktag = 0;
	$("#getLoan").on('click', function (e) {

		var tel = $('#loanTel').val();
		var des = $('#loanDes').val();
		if (!rePattern.test(tel)) {
			$('#loanErr').html('请输入有效的手机号码！');
			return false;
		}
		if ($.trim(des) == '') {
			$('#loanErr').html('请输入贷款理由！');
			return false;
		}
		if (clicktag == 0) {
			$.ajax({
				type: "post",
				url: "/v1/api/borrow/submit",
				dataType: 'json',
				data: {
					description: des,
					mobile: tel
				},
				cache: false,
				success: function success(data) {
					$('#loanErr').html('');
					$.dcAlt('提交成功！');
					$('.ind-apply').removeClass('ind-fadeInRight').hide();
					clicktag = 1;
					setTimeout(function () {
						clicktag = 0;
					}, 10000);
				}
			});
		} else {
			$.dcAlt('请勿频繁点击！');
			$('.ind-apply').removeClass('ind-fadeInRight').hide();
			e.stopPropagation();
		}
	});
	//首页预约看车
	function selectCity() {
		//城市列表
		$.ajax({
			type: "get",
			url: "/v3/api/icar/n/common/queryAvailableCity",
			dataType: 'json',
			cache: false,
			success: function (data) {
				if (data.code == 0) {
					var city = $('#city');
					$.each(data.data.store, function (i, n) {
						var option = '<option value="' + n.deptName + '">' + n.deptName + '</option>';
						city.append(option);
					});
				}
			}
		});
	}

	function selectStore(cityName) {
		//门店列表
		if (!cityName) {
			return false;
		}
		$.ajax({
			type: "get",
			url: "/v3/api/icar/n/common/queryAreaStores?cityName=" + cityName,
			dataType: 'json',
			cache: false,
			success: function (data) {
				if (data.code == 0) {
					var store = $('#store');
					store.html('<option value="">请选择门店</option>');
					$.each(data.data.store, function (i, n) {
						var option = '<option value="' + n.id + '">' + n.deptName + '</option>';
						store.append(option);
					});
				}
			}
		});
	}

	var storeId = '';
	//时间选择器
	laydate.render({
		elem: '#appointTime',
		type: 'datetime',
		min: 0,
		ready: function (date) {
			console.log(date); //得到初始的日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
			// 	//禁止鼠标滚动
			if ($.fn.fullpage) {
				$.fn.fullpage.setAllowScrolling(false);
			} else {
				$(document).bind('mousewheel', function (event, delta) {
					return false;
				});
			}
		},
		done: function (datas) {
			//选择日期完毕的回调
			// alert('得到：' + datas);
			$('#appointTime').val(datas);
			if ($.fn.fullpage) {
				$.fn.fullpage.setAllowScrolling(true);
			} else {
				$(document).bind('mousewheel', function (event, delta) {
					return true;
				});
			}
		}
	});

	selectCity();
	//选择城市
	var city = $('#city');
	city.on('change', function () {

		storeId = '';

		$('#se-default').remove();
		var cityName = $(this).val();
		if (cityName == '全部') {
			selectStore('all');
			return false;
		}
		if (cityName != 0) {
			selectStore(cityName);
		}
	});
	//选择门店
	var store = $('#store');
	store.on('change', function () {
		storeId = $(this).val();
	});
	var orderFlag = 0;
	$('#carOrder').on('click', function (e) {

		var mcName = $('#mcName').val();
		var mcTel = $('#mcTel').val();
		var mclay = $('#appointTime').val();
		var aTime = mclay.split(' ');
		var mcDate = aTime[0];
		var mcTime = aTime[1];

		if (!reName.test(mcName)) {
			$('#aptErr').html('请输入有效姓名！');
			return false;
		}

		if (!rePattern.test(mcTel)) {
			$('#aptErr').html('请输入有效的手机号码！');
			return false;
		}
		if (!mclay) {
			$('#aptErr').html('请选择到店时间！');
			return false;
		}
		if (storeId == '') {
			$('#aptErr').html('请选择门店！');
			return false;
		}
		$('#aptErr').html('');

		if (orderFlag == 0) {
			$.ajax({
				type: "post",
				url: "/v3/api/icar/n/order/appointment",
				data: {
					"customerName": mcName,
					"mobile": mcTel,
					"appointDate": mcDate,
					"appointTime": mcTime,
					"storeId": storeId
				},
				success: function (data) {
					if (data.code == 0) {
						$.dcAlt(data.msg);
						$('.ind-apply').removeClass('ind-fadeInRight').hide();
						orderFlag = 1;
						setTimeout(function () {
							orderFlag = 0;
						}, 10000);
					} else {
						$.dcAlt(data.msg);
						orderFlag = 1;
						setTimeout(function () {
							orderFlag = 0;
						}, 10000);
					}
				}
			});
		} else {
			$.dcAlt('请勿频繁点击！');
			$('.ind-apply').removeClass('ind-fadeInRight').hide();
			e.stopPropagation();
		}
	});
});