// ne legam de id-ul butonului 
$('#card_btn').click(function(){ add_card(); return false; });



function load_products()
{
	var json = [
		{ "id" : "1", "titlu"   : "til1" },
		{ "id" : "1", "titlu"   : "til12" },
		{ "id" : "1", "titlu"   : "til3" },
		{ "id" : "1", "titlu"   : "til4" },
		{ "id" : "1", "titlu"   : "til15" },
		{ "id" : "1", "titlu"   : "til1658" }
	];
	
	
	for(var i = 0; i < json.length; i++) 
	{
		var obj = json[i];
		add_card(obj.titlu);
	}

}

// when window is loaded call function to load drop down elemens 
window.addEventListener('load', function(){ load_products();  });


function add_card(prod_name) {

	//alert('hello');
	var colomn_body = document.getElementById ("creation_space");
	//console.log(colomn_body.innerHTML); 

	var new_card = "<div class='card column '>" ;

	new_card += "<div class='row ' id='top_img'><div class='col-md-12'>";
	new_card +="<img src='images/res_60a4225bafc7334dc49ee1286c2aa915.jpg' class='card-img-top'alt='tommy hilfiger' style='width:100%'>";
	new_card +="</div>";
	new_card +="</div>";
	new_card +="<div class='row' id='product_name'>";
	new_card +="<div class='col-md-12'>";
	new_card +="<div class='container'>";
	new_card +="<span class='card-text'>" + prod_name + " </span>";
	new_card +="</div>";
	new_card +="</div>";
	new_card +="</div>";
	new_card +="<div class='row' id='price_btn'>";
	new_card +="<div class='col-md-6'>";
	new_card +="<button type='button' class='btn btn-info  btn-sm  fa fa-shopping-cart shopp_btn'>";
	new_card +="50 $";
	new_card +="</button>";
	new_card +="</div>";
	new_card +="<div class='col-md-6' id='add_to_cart'>";
	new_card +="<button type='button' class='btn btn-info  btn-sm  fa fa-shopping-cart shopp_btn'></button>";
	new_card +="</div>";
	new_card +="</div>";
	new_card +="</div>";

	var result = colomn_body.innerHTML + new_card; 
	//console.log(result); 


	colomn_body.innerHTML = result;

	// var container = document.getElementById ("creation_space");
	// container.innerHTML = nnn

	// .then(function (post) {
	// 	var img = document.getElementById('top_img').value=post.body;
	// 	var product_name = document.getElementById('product_name').value= post.title;
	// 	var price_btn = document.getElementById('price_btn').value= post.user;
	// 	var add_to_cart = document.getElementById('add_to_cart').value= post.user;
	// 	document.getElementById("top_img-post").value;
	// 	document.getElementById("body-product_name").value;
	// 	document.getElementById("price_btn").value;
	// 	document.getElementById("body-add_to_cart").value;

	// 	return post.id;
	//})

}


