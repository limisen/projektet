'use strict'

let x = document.getElementById('x')
let nav = document.getElementById('nav')

x.addEventListener('click', function () {
    console.log("CLICKAD PÅ!!!");
    nav.classList.toggle('open')
})

sub_nav.addEventListener('click', function () {
    console.log("CLICKADE PÅ Sub_nav!!!");
    nav.classList.toggle('open')
})

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape" && nav.classList.contains('open')) {
        nav.classList.toggle('open')
    }
})
