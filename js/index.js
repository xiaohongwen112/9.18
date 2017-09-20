require(["config"],function(){
	require(["jquery","login"],function(a,b){
	console.log(b);
$(function(){
	
//	
//	(function reg_index(){
////	$(".header").load("html/include/header.html", function(data){
////		$(data).find("#into_login").show();
////	});
//	$.ajax("html/include/header.html").done(function(data){
//		$(data).appendTo(".header");
//		$.ajax("html/login.html").done(function(data){
//			$("#into_login").html(data);
//		});
//		$(".a_right_cancel").click(function(){
//			$("#into_login").show();
//		});
//		$("#into_login").on("click", "#close", function(){
//			$("#into_login").hide();
//		})
//	});
//	$(".footer").load("html/include/footer.html");
//	}());
	
	small_carouse();
	//小轮播
	function small_carouse(){
	var two_img=$("#all_img dl"),
		imgwidth=two_img.outerWidth(),
		currentIndex=1,
		nextIndex=2,
		timer=null;
		var first =two_img.eq(0).clone(true),
			last=two_img.last().clone(true);
			$("#all_img").append(first).prepend(last);
				var len=4;
				$("#all_img").width(imgwidth*len).css("left",-imgwidth);
				$("#s_next").click(move);//下一张按钮
				$("#s_prev").click(function(){
					nextIndex=currentIndex-1;
					move();
				});
				function move(){
					var _left=-1*nextIndex*imgwidth;
					$("#all_img ").stop().animate({left:_left},1000,function(){
						if(nextIndex>=len){
							currentIndex=1;
							nextIndex=2;
							$("#all_img ").css("left",-imgwidth);
						}
						if(currentIndex===0){
							currentIndex=len-2;
							nextIndex=len-1;
							$("#all_img").css("left",-(len-2)*imgwidth);
						}
					});	
					currentIndex=nextIndex;
					nextIndex++;
				}
		};
	
	//大轮播
	(function main_carouse(){
	var two_img=$("#img ul li"),
		imgwidth=two_img.outerWidth(),
		currentIndex=1,
		nextIndex=2,
		timer=null;
		var first =two_img.eq(0).clone(true),
			last=two_img.last().clone(true);
			$("#img ul").append(first).prepend(last);
				var len=5	;
				$("#img ul").width(imgwidth*len).css("left",-imgwidth);
				$("#next").click(move);//下一张按钮
				$("#prev").click(function(){
					nextIndex=currentIndex-1;
					move();
				});
				//鼠标进入时停止，出来动
				$("#img").hover(function(){
					clearInterval(timer);
				},function(){
					 timer=setInterval(move,3000); 
				}).trigger("mouseleave");//.mouseleave();
				function move(){
					var _left=-1*nextIndex*imgwidth;
					$("#img ul ").stop().animate({left:_left},500,function(){
						if(nextIndex>=len){
							currentIndex=1;
							nextIndex=2;
							$("#img ul").css("left",-imgwidth);
						}
						if(currentIndex===0){
							currentIndex=len-2;
							nextIndex=len-1;
							$("#img ul").css("left",-(len-2)*imgwidth);
						}
					});	
					currentIndex=nextIndex;
					nextIndex++;
				}
		}());
});
});
});
