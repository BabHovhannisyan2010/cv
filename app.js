let header = document.querySelector("header")
window.addEventListener("scroll",function () {
    header.classList.toggle ("sticky" , window.scrollY > 100)
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x') //poxrkel
    navlist.classList.toggle('open')
};


window.onscroll= () => {
    menu.classList.remove('bx-x')   //heracnel
    navlist.classList.remove('open')
};

let btn = document.querySelector(".btn")

btn.onclick = () => {
    alert("Hello")
}