var menuBar = document.querySelector(".menu-bar");
var sideBar = document.querySelector(".side-bar");
var overlay = document.querySelector("overlay2");

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