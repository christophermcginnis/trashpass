const hamburger_menu = document.querySelector('.hamburger-menu')
const nav = document.querySelector('nav')
const body = document.querySelector('body')
const hamburger_menu_line = document.querySelectorAll('.hamburger-menu-line')
const menu = document.querySelector('.nav-list-mobile')
let menu_open = false

menu.style = 'display: none'

hamburger_menu.addEventListener('click', () => {

    if (menu_open == false) {
        menu_open = true;
    }
    else {
        menu_open = false;
    }

    if (hamburger_menu_line[0].classList.contains('slidedowntop')) {
        hamburger_menu_line[0].classList.remove('slidedowntop')
        hamburger_menu_line[0].classList.add('slideuptop')
    }
    else {
        hamburger_menu_line[0].classList.remove('slideuptop')
        hamburger_menu_line[0].classList.add('slidedowntop')
    }
    
    if(hamburger_menu_line[1].classList.contains('sliderightmiddle')) {
        hamburger_menu_line[1].classList.remove('sliderightmiddle')
        hamburger_menu_line[1].classList.add('slideleftmiddle')
    }
    else {
        hamburger_menu_line[1].classList.remove('slideleftmiddle')
        hamburger_menu_line[1].classList.add('sliderightmiddle')
    }

    if(hamburger_menu_line[2].classList.contains('slideupbottom')) {
        hamburger_menu_line[2].classList.remove('slideupbottom')
        hamburger_menu_line[2].classList.add('slidedownbottom')
    }
    else {
        hamburger_menu_line[2].classList.remove('slidedownbottom')
        hamburger_menu_line[2].classList.add('slideupbottom')
    }

    if (menu_open) {
        menu.style = 'display: initial;'
    }
    else {
        menu.style = 'display: none;'
    }
    
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 970) {
        menu.style = 'display: none'
    }
})

const mobileNav = document.querySelectorAll('.mobile-nav-item')

mobileNav.forEach(e => {
    e.addEventListener('click', () => {
        menu.style = 'display: none;'
        hamburger_menu_line[0].classList.remove('slidedowntop')
        hamburger_menu_line[0].classList.add('slideuptop')
        hamburger_menu_line[1].classList.remove('sliderightmiddle')
        hamburger_menu_line[1].classList.add('slideleftmiddle')
        hamburger_menu_line[2].classList.remove('slideupbottom')
        hamburger_menu_line[2].classList.add('slidedownbottom')
        menu_open = false
    })
})




