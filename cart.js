let cartList =
document.getElementById("cartList");

let grandTotal =
document.getElementById("grandTotal");

let checkout =
document.getElementById("checkout");

let cart =
JSON.parse(localStorage.getItem("cart"));

if(cart == null){

cart = [];

}

function renderCart(){

cartList.innerHTML = "";

let total = 0;

cart.forEach(function(item, index){

let sum =
item.price * item.quantity;

total = total + sum;

let info = "";

if(item.type == "ticket"){

info =
item.event + "<br>" +
item.date + " • " + item.time;

}else{

info =
"Размер: " + item.size;

}

cartList.innerHTML +=

"<div class='cart-product'>" +

"<div class='cart-photo'>" +
"<img src='" + item.image + "'>" +
"</div>" +

"<div class='cart-info'>" +
"<h3>" + item.name + "</h3>" +
"<p>" + info + "</p>" +
"</div>" +

"<div class='quantity'>" +

"<button data-minus='" + index + "'>-</button>" +

"<span>" + item.quantity + "</span>" +

"<button data-plus='" + index + "'>+</button>" +

"</div>" +

"<div class='cart-price'>" +
item.price + " ₽" +
"</div>" +

"<div class='cart-price'>" +
sum + " ₽" +
"</div>" +

"</div>";

});

grandTotal.textContent =
total + " ₽";

bindButtons();

localStorage.setItem("cart", JSON.stringify(cart));

}

function bindButtons(){

let plusBtns =
document.querySelectorAll("[data-plus]");

let minusBtns =
document.querySelectorAll("[data-minus]");

plusBtns.forEach(function(btn){

btn.addEventListener("click", function(){

let index = btn.dataset.plus;

cart[index].quantity++;

renderCart();

});

});

minusBtns.forEach(function(btn){

btn.addEventListener("click", function(){

let index = btn.dataset.minus;

cart[index].quantity--;

if(cart[index].quantity <= 0){

cart.splice(index, 1);

}

renderCart();

});

});

}

checkout.addEventListener("click", function(){

if(cart.length == 0){

alert("Корзина пустая");

return;

}

alert("Заказ оформлен");

localStorage.removeItem("cart");

cart = [];

renderCart();

});

renderCart();