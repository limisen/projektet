'use strict'

let x = document.getElementById('x')
let nav = document.getElementById('nav')

x.addEventListener('click', function () {
    nav.classList.toggle('open')
    span.contains('>'); span.cotent.toggle('<')
})

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape" && nav.classList.contains('open')) {
        nav.classList.toggle('open');
    }
})