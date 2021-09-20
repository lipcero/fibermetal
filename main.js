$(document).ready(function(){
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
    });
});
//javascript  abrir,cerrar menú
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

//javascript efecto scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

