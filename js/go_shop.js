require(["config"], function() {
	require(["jquery","cookie","login"], function(a, b) {
		$(function() {
			
			$(function() {
				$.ajax({
					type: "get",
					url: "/xiangmu/data/goods.json",
					dataType: "json",
					success: function(data) {
						if(data.status == 1) {
							for(var i = 0; i < data.all.length; i++) {
								var $_dl = $("<dl></dl>").addClass("all_goods");
								var $_dt = $("<dt></dt>");
								var $_goods_img = $("<div></div>").addClass("goods_img");
								var $_a = $("<a></a>").html("<img src='" + data.all[i].src + "'>").attr("href", "/xiangmu/html/goods.html");
								var $_dd = $("<dd></dd>");
								var $_goods_word = $("<div></div>").addClass("goods_word");
								var $_dd_a = $("<a></a>").addClass("maxlinkname").html(data.all[i].first_word);
								var $_dd_span = $("<span></span>").html(data.all[i].price_desc).css({
									"color": "#dc4f45",
									"font": "normal 16px microsoft yahei",
									"display": "block"
								});
								var $_b = $("<b></b>").html("<a href='avascript:void(0);' class='minus'>-</a><input type='text' min='1' max='10995' size='2' name='goods[num]' class='input_num' value='1'><a href='javascript:void(0);' class='add'>+</a>")
									.css({
										"margin-top": "27px",
										"margin-bottom": "15px",
										"display": "block",
										"float": "left"
									});
								var $_a_shop_cart = $("<a></a>").addClass("shop_cart").html("<span><span>加入购物车</span></span>");
								$_dl.append($_dt).children().append($_goods_img).children().append($_a);
								$_dl.append($_dd);
								$_dd.append($_goods_word).children().append($_dd_a).parent().append($_dd_span);
								$_dd.append($_b).append($_a_shop_cart);
								$("#con_left_sceond_show").append($_dl);
							}
							//点击加入购物车
							$('.shop_cart').click(function(){
									var _index=$(this).parents("dl").index();
									console.log(_index);
									$.getJSON("/xiangmu/data/goods.json",function(data){
									var product={
										id:data.all[_index].id,
										img:data.all[_index].src,
										name:data.all[_index].first_word,
										price:data.all[_index].price_desc,
										amount:1
									}
									console.log(product);
									//保存到cooiek
									$.cookie.json=true;
									var _products=$.cookie("products")||[];
									//查找当前商品在数组中是否存在
									var _index_p=indexof(product.id,_products);
									if(_index_p===-1){
										_products.push(product);
										console.log("不存在的");
									
									else{
										_products[_index_p].amount++;
										console.log("存在的");
									}
									console.log(_products);
									//保存回cookie
									$.cookie("products",_products,{expires:7,path:"/"});
								});
								function indexof(id,products){
									for(var i=0,len=products.length;i<len;i++){
										if(products[i].id==id)
										return i;
									}
									return -1;
								}
							});
						}
					}
				});
				
				
			});
		});
	});
});