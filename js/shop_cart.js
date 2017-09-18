require(["config"], function() {
	require(["jquery", "reg"], function(a, b) {
		(function reg_index(){
		$(".header").load("../html/include/header.html");
		$(".footer").load("../html/include/footer.html");
	}());
	});
});