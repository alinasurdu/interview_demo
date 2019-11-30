
// 
// ne legam de id-ul butonului 
//$('#cart_btn').click(function(){ add_to_cart(); return false; });
var cart_total = 0;

cart_content = []


function load_products()
{
	checkCookie();

	prevCart();


	var json = [
		{ "id" : "1", "titlul"   : "Rebecca Mincoff", "image" : "res_8a6203e6765792063c9af2b97f040e6a.jpg", "price": "50$"},
		{ "id" : "2", "titlul"   : "Rosefield", "image" : "res_44bd29070d68c3d83721edb258d8cfac.jpg", "price": "70$" },
		{ "id" : "3", "titlul"   : "Tommy Hilfiger", "image" : "res_60a4225bafc7334dc49ee1286c2aa915.jpg", "price": "150$" },
		{ "id" : "4", "titlul"   : "Oxette", "image" : "res_082f87d34ac77737f031fc7595a76349.jpg", "price": "60$" },
		{ "id" : "5", "titlul"   : "Tommy Hilfiger", "image" : "res_b6b409bc10972ffc2034c1e69b96d11a.jpg", "price": "180$" },
		{ "id" : "6", "titlul"   : "Emporio Armani","image" : "res_7ec6a7c170488537e7fa86e9636a7265.jpg", "price": "350$" },
		{ "id" : "7", "titlul"   : "Fossil","image" : "res_c0030f266f922cca341f744570e63dea.jpg", "price": "110$" },
		{ "id" : "8", "titlul"   : "Calvin Klein","image" : "res_91360d46990ecc016f9618acfdfa79e1.jpg", "price": "190$" }
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

	new_card += " <li class='li_aling'>" + price +"<button type='button' class='btn btn-danger  btn-sm  delete_btn' onClick='remove_item(\""+id+ "\" );' >x</button>" +"</li>" ;  
	new_card += " <li> ---- </li>"  ;

	
	colomn_body.innerHTML += new_card ; // add new card value to body catd

	// updatam cos
	cart_total += parseInt(price, 10);
	
	//afisam cos
	total_cart_element.innerText = cart_total + ' $' ;

	cart_content.push({"id":id,"titlul":titlul,"price":price});

	setCookie('cos',JSON.stringify(cart_content));
}



function prevCart(){
	var cart_content_string = getCookie("cos");

	// restore la cos 
	cart_content = JSON.parse( cart_content_string )

	//console.log(cart_content[i].titlul);
	var colomn_body = document.getElementById ("cart_space");
	//console.log(colomn_body.innerHTML); 
	var total_cart_element= document.getElementById("total_value");

	for (i in cart_content) {
	
	var new_card = " <li>" + cart_content[i].titlul + "</li>"  ;
	new_card += " <li class='li_aling'>" + cart_content[i].price +"<button type='button' class='btn btn-danger  btn-sm  delete_btn' onClick='remove_item(\""+cart_content[i].id+ "\" );' >x</button>" +"</li>" ;  
	new_card += " <li> ---- </li>"  ;
	
	colomn_body.innerHTML += new_card ; // add new card value to body catd

	// updatam cos
	cart_total += parseInt( cart_content[i].price, 10);
	
		
	}

	//afisam cos
	total_cart_element.innerText = cart_total + ' $' ;

}

function remove_item(id){
	// 1. parsam toate elementele si stergem elemntul dorit 
	for (i in cart_content) {

		if (cart_content[i].id == id )
		{
			// steergem elementul dorit
			cart_content.splice(i,1);

		}
	}
	// 2.  sa salvam in coockies varianta fianla a cosului 
	setCookie('cos',JSON.stringify(cart_content));

	// stergem html-ul aferent cosului 
	var colomn_body = document.getElementById ("cart_space");
	colomn_body.innerHTML = "";

	cart_total = 0; 

	// 3. redesenam cosul dupa delete 
	prevCart();


}


/// coockies access functions 

function setCookie(cname, cvalue) {
	var d = new Date();
	var exdays = 365; // expira in 1 an 
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;samesite;";
  }


function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

  function checkCookie() { 
	var continut_cos = getCookie("cos");
	

	if (continut_cos == "") // variabila nu exista
	{  
		/* do nothing  */
		console.log("Init cockies.... ");

		continut_cos = "[]";
		setCookie("cos", continut_cos, 365); // initializam cos
	}
	else
	{
		/* do nothing  */
		console.log(getCookie('cos'));
	}

  }
 