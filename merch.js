let addButtons =
document.querySelectorAll(".add-btn");

let sizeLists =
document.querySelectorAll(".size-list");

let miniCart =
document.getElementById("miniCart");

let miniTotal =
document.getElementById("miniTotal");

let cart =
JSON.parse(localStorage.getItem("cart"));

if(cart == null){

cart = [];

}

sizeLists.forEach(function(list){

let buttons =
list.querySelectorAll(".size");

buttons.forEach(function(button){

button.addEventListener("click",function(){

buttons.forEach(function(item){

item.classList.remove("active");

});

button.classList.add("active");

});

});

});

addButtons.forEach(function(button){

button.addEventListener("click",function(){

let product =
button.closest(".product");

let activeSize =
product.querySelector(".size.active");

let item = {

type:"merch",

name:button.dataset.name,

price:Number(button.dataset.price),

image:button.dataset.image,

size:activeSize.textContent.trim(),

quantity:1

};

let found = false;

cart.forEach(function(cartItem){

if(

cartItem.type == item.type &&
cartItem.name == item.name &&
cartItem.size == item.size

){

cartItem.quantity++;

found = true;

}

});

if(found == false){

cart.push(item);

}

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

renderCart();

});

});

function renderCart(){

miniCart.innerHTML = "";

let total = 0;

cart.forEach(function(item){

if(item.type != "merch"){

return;

}

let sum =
item.price * item.quantity;

total = total + sum;

miniCart.innerHTML +=

"<div class='cart-item'>"+
"<img src='"+item.image+"' alt=''>"+
"<div>"+
"<h4>"+item.name+"</h4>"+
"<p>Размер: "+item.size+"</p>"+
"<p>Количество: "+item.quantity+"</p>"+
"<strong>"+sum+" ₽</strong>"+
"</div>"+
"</div>";

});

miniTotal.textContent =
total + " ₽";

}

renderCart();