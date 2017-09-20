require(["config"], function() {
	require(["jquery", "cookie","login"], function(a, b) {
		$(function(){
			
		
		
	//cookie
	$.cookie.json=true;
	//读取购物数据
	var _products=$.cookie("products")||[];
	if(_products.length===0){
		$("#hava_goods").hide();
		$("#index_cart").show();
	}
	$.each(_products, function(index,element) {
		var num=this.price.toString().slice(1,4);
		console.log(num);
		//克隆模板
		$(".cart-product").eq(0).clone(true)
						.data("product",this)
						.show().appendTo(".cart-item")
						.find("#cart_img").attr("src",this.img).end()
						.find("#cart_name").text(this.name).end()
						.find(".p-price").text(this.price).end()
						//积分，要截取2-4位
						.find(".p-integral").text(num).end()
						.find(".p-subtotal").text("￥"+num*this.amount+".00").end()
						.parents(".cart-product");
						console.log(this.name);
		$("#order_gift").find(".goods .price").text(this.price).end()	;		
	});
	//删除
	$(".cart-product").on("click","a",function(){
		var del=$(this).parents(".cart-product");
		var _pro=del.data("product");
		var s_index=$.inArray(_pro,_products);
		_products.splice(s_index,1);
		$.cookie("products",_products, {expires:7,path:"/"});
		del.remove();
		if(_products.length===0){
		$("#hava_goods").hide();
		$("#index_cart").show();
	}
	});
	});
	});
});