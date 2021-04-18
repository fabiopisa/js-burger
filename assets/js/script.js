//REFERENCE
var finalPrice = document.getElementById('price');
var buttonStart = document.getElementById('button');
var couponSold = document.getElementById('coupon');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var burgerName = document.getElementById('name');
//SETTING
var priceDefault = 50;
var arrcoupon = ['sconto2021', 'sconto-bool'];
var discount = 0.3;
writePrice(priceDefault, finalPrice);

//EVENTS
buttonStart.addEventListener('click', function(){

  //controllo che il nome fnzioni correttamente con il comando .trim che toglie gli spazzi prima e dopo una frase
  var nomeIserito = burgerName.value.trim();

  // verifico la presenza del nome
  if(burgerName.length === 0){
    alert("ATTENZIONE! Inserisci il nome del burger")
  }else{
    //sommo gli elementi checked
    var priceIngredient = 0;

    //ciclo la lista degli imput checkbox
    for(var i=0; i< ingredients.length; i++){
      // definisco un ingrediente
      var ingr = ingredients[i];
      // se in checkbox è checked === true sommo il valore al price degli altri ingredienti
      if(ingr.checked === true){
        priceIngredient += parseInt(ingr.value);
      } 

    }

    //creo una variante del prezzo totale fatto dal prezzo di default e il prezzo degli ingredienti
    var totalPrice = priceDefault + priceIngredient;
    //verifico che sia presente un codice sconto con includes dicendo se dentro l'arrey dei coupon è incluso cosa viene scritto come valore nella sezione coupon allora si applica lo sconto
    if(arrcoupon.includes(couponSold.value) === true){
      totalPrice *= (1 - discount); 
    }
    
    // fatto tutto stampo il prezzo finale compreso di tutto
    writePrice(totalPrice, finalPrice);
  }

 }

)


//FUNZIONI
// Faccio una funzione dove dico come scrivere il prezzo e dove
function writePrice(value, target){
  target.innerHTML = value.toFixed(2);
}

//SECONDO TENTATIVO
//REFERENZE
/* var nameBurger = document.getElementById('name');
var ingedientsList = document.getElementsByClassName("ingredient-checkbox");
var coupon = document.getElementById('coupon');
var burgerPrice = document.getElementById('price');
var buttonStart = document.getElementById('button');
 */
//SETTINGS
/* var arrcoupon = ['sconto2021', 'sconto-bool'];
var defaultPrice = 50;
var disount = 0.3; */

/* writePrice(defaultPrice, burgerPrice);
 */
//EVENTS

/* buttonStart.addEventListener('click', function(){

  var nomeInsert = nameBurger.value.trim();
  if(nomeInsert.length === 0){
    alert("ATTENZIONE! Inserire nome panino")
  }else{

    var ingredientsPrice = 0;

    for(var i=0; i<ingedientsList.length; i++){
      var ingredient = ingredientsList[i];
      if(ingredient.checked === true){
        ingredientsPrice += parseInt(ingredient.value);
      }
    }

    var totalPrice = defaultPrice + ingredientsPrice

    if(arrcoupon.includes(coupon.value)){
     totalPrice*= (1 - disount);
    }

    writePrice(totalPrice, nameBurger);

  }

  




}); */

//FUNCTIONS

/* function writePrice(value, target){
  target.innerHTML = value.toFixed(2);
} */