define(function() {
			require(["jquery"], function(a) {
				$(function(){
					
				
				$.ajax("/xiangmu/html/include/header.html").done(function(data) {
					$(data).appendTo(".header");
					$.ajax("/xiangmu/html/login.html").done(function(data) {
						$("#into_login").html(data);
					});
					$(".a_right_cancel").click(function() {
						$("#into_login").show();
					});
					$("#into_login").on("click", "#close", function() {
						$("#into_login").hide();
					});
					$("#into_login").on("click", ".registe", function() {
						$.ajax("/xiangmu/html/registe.html").done(function(data) {
							$("#into_login").html(data);
						});
					});
					$("#into_login").on("click", ".login", function() {
						$.ajax("/xiangmu/html/login.html").done(function(data) {
							$("#into_login").html(data);
						});
					});
					$(".footer").load("/xiangmu/html/include/footer.html");

				});
				});
			});
});