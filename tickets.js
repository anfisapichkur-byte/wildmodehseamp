let ticketButtons =
document.querySelectorAll(".ticket-buy");

let plus =
document.getElementById("plus");

let minus =
document.getElementById("minus");

let count =
document.getElementById("count");

let ticketName =
document.getElementById("ticketName");

let ticketQuantity =
document.getElementById("ticketQuantity");

let ticketTotal =
document.getElementById("ticketTotal");

let buyTicket =
document.getElementById("buyTicket");

let currentTicket = {

name:"STANDARD",

price:2500,

image:"event-current.jpg"

};

let quantity = 1;

function updateTicket(){

count.textContent = quantity;

ticketQuantity.textContent = quantity;

ticketName.textContent = currentTicket.name;

ticketTotal.textContent =
currentTicket.price * quantity + " ₽";

}

ticketButtons.forEach(function(button){

button.addEventListener("click",function(){

ticketButtons.forEach(function(item){

item.classList.remove("active");

});

button.classList.add("active");

currentTicket.name =
button.dataset.name;

currentTicket.price =
Number(button.dataset.price);

currentTicket.image =
button.dataset.image;

updateTicket();

});

});

plus.addEventListener("click",function(){

quantity++;

updateTicket();

});

minus.addEventListener("click",function(){

if(quantity > 1){

quantity--;

updateTicket();

}

});

buyTicket.addEventListener("click",function(){

let name =
document.getElementById("name").value.trim();

let surname =
document.getElementById("surname").value.trim();

let email =
document.getElementById("email").value.trim();

let phone =
document.getElementById("phone").value.trim();

if(

name == "" ||
surname == "" ||
email == "" ||
phone == ""

){

alert("Заполните все поля");

return;

}

let cart =
JSON.parse(localStorage.getItem("cart"));

if(cart == null){

cart = [];

}

let ticket = {

type:"ticket",

name:currentTicket.name,

event:"ZOO AFTER DARK",

date:"21.06.2026",

time:"23:00",

price:currentTicket.price,

quantity:quantity,

image:currentTicket.image

};

cart.push(ticket);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

window.location.href =
"cart.html";

});

updateTicket();