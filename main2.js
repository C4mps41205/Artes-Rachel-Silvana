var btn_face = document.getElementById('btn-face');
var btn_insta = document.getElementById('btn-insta');
var btn_whats = document.getElementById('btn-whats');
var btn_profile = document.getElementById('btn-profile');
var login = document.getElementById('login');
var close = document.getElementById('close');
var carrinho = document.getElementById('carrinho');
var car = document.getElementById('car');
var close_car = document.getElementById('close-car');
var close_ham = document.getElementById('close-ham');
var minimenu =  document.getElementById('minimenu');
var ham =  document.getElementById('ham');

//==============--Alguns menus--============//
close_ham.onclick = function(){
    ham.style.display = "NONE";
}
minimenu.onclick = function(){
    ham.style.display = "flex";
}

close.onclick = function(){
    login.style.display = "NONE";
}
btn_profile.onclick = function(){
    login.style.display = "flex";
}



close_car.onclick = function(){
    car.style.display = "NONE";
}
carrinho.onclick = function(){
    car.style.display = "flex";
}