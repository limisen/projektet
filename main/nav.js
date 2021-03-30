'use strict'

let x = document.getElementById('x')
let nav = document.getElementById('nav')

x.addEventListener('click', function () {
    console.log("CLICKAD PÅ!!!");
    nav.classList.toggle('open')
    span.contains('>'); span.cotent.toggle('<')
})

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape" && nav.classList.contains('open')) {
        nav.classList.toggle('open');
    }
})