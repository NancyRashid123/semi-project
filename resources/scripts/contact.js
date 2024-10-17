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


// const tab = document.querySelectorAll('.nav-bar-menu-items a');

// tab.forEach((tab)=>{
//     tab.addEventListener('click',()=>{
//         removeActive();
//         tab.classList.add('active-menu ')
        
//     })
// })

// function removeActive() {
//     tab.forEach((tab)=>{
//         tab.classList.remove('active-menu');
//     })
// }
