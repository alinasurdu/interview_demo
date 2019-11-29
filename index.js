// ne legam de id-ul butonului 
//$('#cart_btn').click(function(){ add_to_cart(); return false; });

var cart_total = 0;

function load_products()
{
	var json = [
		{ "id" : "1", "titlul"   : "Rebecca Mincoff", "image" : "res_8a6203e6765792063c9af2b97f040e6a.jpg", "price": "50$"},
		{ "id" : "2", "titlul"   : "Rosefield", "image" : "res_44bd29070d68c3d83721edb258d8cfac.jpg", "price": "70$" },
		{ "id" : "3", "titlul"   : "Tommy Hilfiger", "image" : "res_60a4225bafc7334dc49ee1286c2aa915.jpg", "price": "150$" },
		{ "id" : "4", "titlul"   : "Oxette", "image" : "res_082f87d34ac77737f031fc7595a76349.jpg", "price": "60$" },
		{ "id" : "5", "titlul"   : "Tommy Hilfiger", "image" : "res_b6b409bc10972ffc2034c1e69b96d11a.jpg", "price": "180$" },
		{ "id" : "6", "titlul"   : "Emporio Armani","image" : "res_7ec6a7c170488537e7fa86e9636a7265.jpg", "price": "350$" },
		{ "id" : "7", "titlul"   : "Fossil","image" : "res_c0030f266f922cca341f744570e63dea.jpg", "price": "110$" },
		{ "id" : "8", "titlul"   : "Calvin Klein","image" : "res_91360d46990ecc016f9618acfdfa79e1.jpg", "price": "190$" },


	];
	
	
	for(var i = 0; i < json.length; i++) 
	{
		var obj = json[i];
		add_card( obj.id, obj.titlul ,obj.image, obj.price);
	}

}

// when window is loaded call function to load drop down elemens 
window.addEventListener('load', function(){ load_products();  });


function add_card(prod_id, prod_name, prod_image, prod_price) {

	//alert('hello');
	var colomn_body = document.getElementById ("creation_space");
	//console.log(colomn_body.innerHTML); 

	var new_card = "<div class='card column '>" ;

	new_card += "<div class='row ' id='top_img'><div class='col-md-12'>";
	new_card +="<img src='images/" + prod_image + "'  class='card-img-top'alt='tommy hilfiger' style='width:100%'>";
	new_card +="</div>";
	new_card +="</div>";
	new_card +="<div class='row' id='product_name'>";
	new_card +="<div class='col-md-12 no_padding item_name_align'>";
	new_card +="<span class='card-text card_font item_name'>" + prod_name + " </span>";
	new_card +="</div>";
	new_card +="</div>";
	new_card +="<div class='row ' id='price_btn'>";
	new_card +="<div class='col-md-6 no_padding'>";
	new_card +="<p class='price_style'>" + prod_price + "</p>";
	new_card +="</div>";
	new_card +="<div class='col-md-6 no_padding' >";
	new_card +="<button type='button' class='btn btn-info  btn-sm  fa fa-shopping-cart shopp_btn' onClick='add_to_cart(\""+prod_id+ "\",  \"" +prod_name +"\" , \"" + prod_image +"\" , \""+prod_price+"\" );' ></button>";
	new_card +="</div>";
	new_card +="</div>";
	new_card +="</div>";

	var result = colomn_body.innerHTML + new_card; 
	//console.log(result); 


	colomn_body.innerHTML = result;

	
}






function add_to_cart(id, titlul, image_name, price) {

	//alert('hello');
	var colomn_body = document.getElementById ("cart_space");
	//console.log(colomn_body.innerHTML); 
	var total_cart_element= document.getElementById("total_value");

	var new_card = " <li>" + titlul + "</li>"  ;
	new_card += " <li class='li_aling'>" + price +"</li>"  ;
	new_card += " <li> ---- </li>"  ;
	
	colomn_body.innerHTML += new_card ; // add new card value to body catd

	// updatam cos
	cart_total += parseInt(price, 10);
	
	//afisam cos
	total_cart_element.innerText = cart_total + ' $' ;

	



}



