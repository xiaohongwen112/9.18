require(["config"], function() {
	require(["jquery"], function(a) {
		$(function() {
			(function reg_index() {
				$(".header").load("../html/include/header.html");
				$(".footer").load("../html/include/footer.html");
			}());
			//放大镜功能
			(function big() {
				var mHeight = $("#move_img").innerHeight(),
					mWidth = $("#move_img").innerWidth(),
					bHeight = $("#proto_img").innerHeight(),
					bWidth = $("#proto_img").innerWidth(),
					bt = $("#proto_img").offset().left,
					nH = $("#proto_img").offset().top;
				console.log(mHeight, bHeight, bt, nH);
				$("#proto_img").mouseenter(function() {
					$("#move_img").show();
					$("#big_img").show();
				});
				$("body,html").mousemove(function(e) {
					e = e || event;
					var tt = e.pageY,
						ll = e.pageX,
						_top = tt - nH - 20 - mHeight,
						_left = ll + 80 - mWidth;
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
			(function move(){
				$("#go_product_detail").click(function(){
					$("#go_product_detail").css({"margin":"-5px 2px 0 2px","border-right": "1px #ccc solid", "border-left": "1px #ccc solid","border-bottom":"none","background":"#fff","border-top":"red solid 3px"})
					.parent().siblings().children("a")
					.css({"padding": "0px 35px 8px","font-size":" 14px","line-height": "29px","display": "block","color": "#000"});
					$("#product_detail").fadeIn().siblings().hide();
					});
				$("#go_type_tab_2").click(function(){
					$("#go_type_tab_2").css({"margin":"-5px 2px 0 2px","border-right": "1px #ccc solid", "border-left": "1px #ccc solid","border-bottom":"none","background":"#fff","border-top":"red solid 3px"})
					.parent().siblings().children("a")
					.css({"padding": "0px 35px 8px","font-size":" 14px","line-height": "29px","display": "block","color": "#000"});
					$("#type_tab_2").fadeIn().siblings().hide();
				});
	
				$("#go_type_tab_3").click(function(){
					$("#go_type_tab_3").css({"margin":"-5px 2px 0 2px","border-right": "1px #ccc solid", "border-left": "1px #ccc solid","border-bottom":"none","background":"#fff","border-top":"red solid 3px"})
					.parent().siblings().children("a")
					.css({"padding": "0px 35px 8px","font-size":" 14px","line-height": "29px","display": "block","color": "#000"});
					$("#type_tab_3").fadeIn().siblings().hide();
				});
				$("#go_type_tab_4").click(function(){
					$("#type_tab_4").fadeIn().siblings().hide();
				});
				$("#go_type_tab_4").blur(function(){
					$("#type_tab_4").fadeOut();
				});
				$("#go_type_tab_5").click(function(){
					$("#type_tab_5").fadeIn().siblings().hide();
				});
				$("#go_type_tab_5").blur(function(){
					$("#type_tab_5").fadeOut();
				});
			}());
		});
	});
});
		//		//点击图片变换
			//		var lis = $("img", $("#show_many_img")),
			//			len = lis.length;
			//		//鼠标进入获取索引值
			//		for(var i = 0; i < len; i++) {
			//			$("li")[i].onmouseenter = function(e) {
			//				e = e || event;
			//				src = e.srcElement || e.target;
			//				var that = this;
			//				console.log(that);
			//				ajax({
			//					type: "get",
			//					url: "../data/all_img.json",
			//					dataType: "json",
			//					success: function(data) {
			//						if(data.status == 1) {
			//							for(let i = 0; i < data.all_img.length; i++) {
			//								console.log(this);
			//								if(this == src) {
			//									var srcs = data.all_img[i].src;
			//									console.log(that);
			//								}
