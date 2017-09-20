require(["config"], function() {
	require(["jquery","login"], function(a) {
			$(function() {
					//变换
				$("#show_many_img li").mouseenter(function(){
					var wener=$(this).index();
					
					$.getJSON("/xiangmu/data/all_img.json",function(data){
						var wen_img=data.all_img[wener].src;
						$("#proto_img").css("background-image","url("+wen_img+")");
						$("#big_big").css("background-image","url("+wen_img+")");
					});
				});
				//点击换图
				var i=0,
					j=0;
				$("#goods_prov").click(function(){
					i++;
					$("#show_many_img_go").stop().animate({"left":-117*i},200).end();
					if(i>4){
						i=4;
					}
				});
				//难题
				$("#goods_next").click(function(){
					i--;
					$("#show_many_img_go").stop().animate({"left":-118*i},200).end();
					if(i<4){
							i=1;
					}
				});
//					

//				$(".a_right_cancel").click(function(){
//					$("#into_login").show();
//				});
				
					//放大镜功能
					(function big() {
						var mHeight = $("#move_img").innerHeight(),
							mWidth = $("#move_img").innerWidth(),
							bHeight = $("#proto_img").innerHeight(),
							bWidth = $("#proto_img").innerWidth(),
							bt = $("#proto_img").offset().left,
							nH = $("#proto_img").offset().top;
						$("#proto_img").mouseenter(function() {
							$("#move_img").show();
							$("#big_img").show();
						});
						$("body,html").mousemove(function(e) {
							e = e || event;
							var tt = e.pageY,
								ll = e.pageX,
								_top = tt - nH - 320 ,
								_left = ll -200 -bt;
							if(_top < 0)
								_top = 0;
							else if(_top > bHeight - mHeight)
								_top = bHeight - mHeight;
							if(_left < 0)
								_left = 0;
							else if(_left > bWidth - mWidth)
								_left = bWidth - mWidth;
							$("#move_img").css({
								"top": _top + "px",
								"left": _left + "px"
							});
							$("#big_big").css({
								"top": _top * -1.3 + "px",
								"left": _left * -1.3 + "px"
							});
						});
						$("#proto_img").mouseleave(function() {
							document.onmousemove = null;
							$("#move_img").hide();
							$("#big_img").hide();
						})
					}());
					(function move() {
						//吸顶效果
						$("#go_product_detail").click(function() {
							$("html,body").animate({scrollTop: 1165}, 1000);
							$("#product_detail").fadeIn().siblings().hide();
						});
						$("#go_type_tab_2").click(function() {
							$("html,body").animate({scrollTop: 1165}, 1000);
							$("#type_tab_2").fadeIn().siblings().hide();

						});
						$("#go_type_tab_3").click(function() {
							$("html,body").animate({scrollTop: 1165}, 1000);
							$("#type_tab_3").fadeIn().siblings().hide();

						});
						$("#go_type_tab_4").click(function() {
							$("html,body").animate({scrollTop: 1165}, 1000);
							$("#type_tab_4").fadeIn().siblings().hide();

						});
						$("#go_type_tab_5").click(function() {
							$("html,body").animate({scrollTop: 1165}, 1000);
							$("#type_tab_5").fadeIn().siblings().hide();

						});
					}());
					(function go_top(){
						$(window).scroll(function() {
							var top = $("#main_con_bo").position().top;
							var mouseScroll = $(window).scrollTop();
							if(1175 <= mouseScroll) {
								$("#main_con_bo").addClass("go_top_top");
							} else if(1175 > mouseScroll) {
								$("#main_con_bo").removeClass("go_top_top");
							}
							$(".click_color").click(function() {
								$(this).addClass("top_red")
									.parent().siblings().children("a")
									.removeClass("top_red");
							});
						});
					}());
			});
	});
});
