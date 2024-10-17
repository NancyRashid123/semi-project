// header
const header = document.querySelector('.nav-bar');
window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY >0);
})

// ------------------------------------------------------------------------
// menu
const mobile_nav = document.querySelector('.mobile-nav');
const menu = document.querySelector('.nav-bar-menu');
const icon = document.querySelectorAll('.menu i');
const login =document.querySelector('.nav-bar-login')
const close =document.querySelector('#menu_close i');
const subMenu = document.querySelector('.sub-menu');



mobile_nav.addEventListener('click', function() {
   menu.classList.toggle('toggle_menu_bar');
   login.classList.toggle('toggle_login');
})

close.addEventListener('click',function(){
   
    menu.classList.remove('toggle_menu_bar');
    login.classList.remove('toggle_login');
})

// -----------------------------------------------------------------------
// review section

const right =document.querySelector('.right');
const left =document.querySelector('.left');
const slider =document.querySelectorAll('.sub-text');
current = 0;
function setDefault() {
    slider[current].style.display = 'block';

}
setDefault();

right.onclick = function(){
    slider[current].style.display = 'none';
    current += 1;
    if (current > slider.length - 1) {
        current= 0;
    }
    slider[current].style.display = 'block';
    slider[current].classList.add('animate_slider');
}

left.onclick = function(){
    slider[current].style.display = 'none';
    current -= 1;
    if (current < 0) {
        current= slider.length - 1;
    }
    slider[current].style.display = 'block';
    slider[current].classList.add('animate_slider');
}


const tab = document.querySelectorAll('.nav-bar-menu-items a');

tab.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        removeActive();
        tab.classList.add('active-menu ')
        
    })
})

function removeActive() {
    tab.forEach((tab)=>{
        tab.classList.remove('active-menu ');
    })
}