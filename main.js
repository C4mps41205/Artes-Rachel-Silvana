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
var produtod = document.getElementById('products');

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
//==============--Alguns menus--============//
//==============--Carrossel do banner--============//
var banner_img_01 = document.getElementById('bannerfull');
var btn1_banner = document.getElementById('circle1');
var btn2_banner = document.getElementById('circle2');
var btn3_banner = document.getElementById('circle3');

btn1_banner.onclick = function(){
    banner_img_01.style.display = "flex";
    btn1_banner.style.width = "12px";
    btn1_banner.style.height = "12px";
    btn2_banner.style.width = "10px";
    btn2_banner.style.height = "10px";
    btn3_banner.style.width = "10px";
    btn3_banner.style.height = "10px";
}
btn2_banner.onclick = function(){
    banner_img_01.style.display = "none";
    btn2_banner.style.width = "12px";
    btn2_banner.style.height = "12px";
    btn2_banner.style.marginTop = "-1px"
    btn1_banner.style.width = "10px";
    btn1_banner.style.height = "10px";
    btn3_banner.style.width = "10px";
    btn3_banner.style.height = "10px";
}
btn3_banner.onclick = function(){
    banner_img_01.style.display = "none";
    btn3_banner.style.width = "12px";
    btn3_banner.style.height = "12px";
    btn3_banner.style.marginTop = "-1px"
    btn1_banner.style.width = "10px";
    btn1_banner.style.height = "10px";
    btn2_banner.style.width = "10px";
    btn2_banner.style.height = "10px";
}
if(banner_img_01.style.display = "flex"){
    btn1_banner.style.width = "12px";
    btn1_banner.style.height = "12px";
    btn1_banner.style.marginTop = "-1px"
}else{
    btn1_banner.style.width = "10px";
    btn1_banner.style.height = "10px";
}
//==============--Carrossel do banner--============//

produtod.onclick = function(){
    window.scrollTo(0, 500);
}