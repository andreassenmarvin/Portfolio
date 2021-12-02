var menuBar = document.querySelector(".menu-bar");
var sideBar = document.querySelector(".side-bar");
var overlay = document.querySelector(".overlay2");
var bar1 = document.querySelector(".bar-1");
var bar2 = document.querySelector(".bar-2");
var bar3 = document.querySelector(".bar-3");


var i = 0;
var intro = "My name is Marvin Macharia, a phenomenal web and mobile applications developer." ;
var introHead = document.getElementById("intro");
var speed = 50;


menuBar.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);

function openMenu() {
    if (menuBar.classList.contains("click")) {
        menuBar.classList.remove("click");
        sideBar.classList.remove("side-bar-visible");
        overlay.style.display = "none";
    }

    else {
        menuBar.classList.add("click");
        sideBar.classList.add("side-bar-visible");
        overlay.style.display = "block";
    }
}

function closeMenu() {
    menuBar.classList.remove("click");
    sideBar.classList.remove("side-bar-visible");
    overlay.style.display = "none";
}

function animation() {
    bar1.classList.add("menu-bar-hover");
    bar2.classList.add("menu-bar-hover");
    bar3.classList.add("menu-bar-hover");
}

function noAnimation() {
    bar1.classList.remove("menu-bar-hover");
    bar2.classList.remove("menu-bar-hover");
    bar3.classList.remove("menu-bar-hover");
}

function typing() {
    if (i < intro.length) {
        introHead.innerHTML += intro.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}