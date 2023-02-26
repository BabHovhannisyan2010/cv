let header = document.querySelector("header")
window.addEventListener("scroll",function () {
    header.classList.toggle ("sticky" , window.scrollY > 100)
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x') //poxrkel
    navbar.classList.toggle('open')
};


window.onscroll= () => {
    menu.classList.remove('bx-x')   //heracnel
    navbar.classList.remove('open')
};