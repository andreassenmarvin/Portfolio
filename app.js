var menuBar = document.querySelector(".menu-bar");
var sideBar = document.querySelector(".side-bar");
var overlay = document.querySelector(".overlay2");
var bar1 = document.querySelector(".bar-1");
var bar2 = document.querySelector(".bar-2");
var bar3 = document.querySelector(".bar-3");
var explorebtn = document.querySelector(".explore-button");
var spanAnimation = document.querySelector(".span");
var children = spanAnimation.childNodes;
var index = document.getElementById("index");
var about = document.getElementById("about");
var skills = document.getElementById("skills")
var contact = document.getElementById("contact");
var on = document.getElementById("sound-on");
var off = document.getElementById("sound-off");
var music = document.querySelector(".music");


var i = 0;
var intro = "My name is Marvin Macharia; I'm a software developer specialising in both front-end and back-end. I also build mobile applications.";
var introHead = document.getElementById("intro");
var speed = 90;


menuBar.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);

function openMenu() {
     if (menuBar.classList.contains("click")) {
        menuBar.classList.remove("click");
        sideBar.classList.remove("side-bar-visible");
        overlay.style.display = "none";
    } else {
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
    if (window.location.pathname == "/index.html") {
        index.style.background = "#d92626"
    }

    else if (window.location.pathname == "/about.html") {
        about.style.background = "#d92626"
    }

    else if (window.location.pathname == "/skills.html") {
        skills.style.background = "#d92626"
    }

    else if (window.location.pathname == "/contact.html") {
        contact.style.background = "#d92626"
    }

    if (i < intro.length) {
        introHead.innerHTML += intro.charAt(i);
        i++;
        setTimeout(typing, speed);
    } else if (i = intro.length) {
        explorebtn.style.display = "inline-block";
        $(explorebtn).fadeIn();
    }
}

function spanRemove() {
    spanAnimation.classList.add("span-hover");
}

function spanAppend() {
    spanAnimation.classList.remove("span-hover");
}

$(function() {
    $(off).click(function() {
        on.style.display = "block";
        off.style.display = "none";
    })

    $(on).click(function() {
        off.style.display = "block";
        on.style.display = "none";
    })
})

function audioplay() {
    music.play()
}

function audiomute() {
    music.pause()
}