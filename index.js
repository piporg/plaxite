"use strict"

const heroOnDiv = document.querySelector(".hero-on");

function heroOn() {
    heroOnDiv.style.display = "block";
}

function heroOff() {
    heroOnDiv.style.display = "none";
}

function heroBlink() {
    heroOn()
    setTimeout(heroOff, 100);
    setTimeout(heroOn, 200);
    setTimeout(heroOff, 400);
    setTimeout(heroOn, 800);
    setTimeout(heroOff, 3000);
}

setTimeout(() => {
    heroBlink();
    setInterval(heroBlink, 4000);
}, 1500);
