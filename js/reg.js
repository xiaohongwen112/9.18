define(function(){
	function reg(){
	$(".header_chi").load("../html/include/header.html");
	$(".footer_chi").load("../html/include/footer.html");
	}
	function reg_index(){
	$(".header").load("html/include/header.html");
	$(".footer").load("html/include/footer.html");
	}
	
	return{
		reg:reg,
		reg_index:reg_index
	}
});