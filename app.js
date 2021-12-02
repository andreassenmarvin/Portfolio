var menuBar = document.querySelector(".menu-bar");
var sideBar = document.querySelector(".side-bar");
var overlay = document.querySelector(".overlay2");
var bar1 = document.querySelector(".bar-1");
var bar2 = document.querySelector(".bar-2");
var bar3 = document.querySelector(".bar-3");

menuBar.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);

function openMenu() {
    menuBar.classList.toggle("click");
    sideBar.classList.toggle("side-bar-visible")
}

function closeMenu() {
    menuBar.classList.remove("hover");
    sideBar.classList.remove("side-bar-visible");
}

function animation() {
    bar1.classList.add("bar-1-glow");
    bar2.classList.add("bar-2-glow");
    bar3.classList.add("bar-3-glow");
}