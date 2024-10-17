
const header = document.querySelector('.nav-bar');
window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY >0);
    if (window.scrollY >0) {
        document.querySelector('.nav-bar-login .log').classList.add('active-log')
    }else{
        
        document.querySelector('.nav-bar-login .log').classList.remove('active-log')
    }
})



const mobile_nav = document.querySelector('.mobile-nav');
const menu = document.querySelector('.nav-bar-menu');
const login =document.querySelector('.nav-bar-login')
const close =document.querySelector('#menu_close i');
const icons = document.querySelectorAll('.menu i');
const subMenus = document.querySelectorAll('.sub-menu');



mobile_nav.addEventListener('click', function() {
   menu.classList.toggle('toggle_menu_bar');
})

close.addEventListener('click',function(){
   
    menu.classList.remove('toggle_menu_bar');
})


icons.forEach(icon => {
    icon.onclick = () => { 
        console.log(icon);
        const targetMenuId = icon.getAttribute('data-target');
        const targetMenu = document.getElementById(targetMenuId);
        if (targetMenu) {
            targetMenu.classList.toggle('active-sub-menu');
        }
    };
});


// //   Select all dropdown toggle icons
// const dropdownToggles = document.querySelectorAll('.menu > a');

// // Add click event listeners to each dropdown toggle
// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', function(e) {
//     e.preventDefault();
    
//     // Toggle the sub-menu visibility
//     const submenu = this.nextElementSibling;
//     if (submenu) {
//       submenu.classList.toggle('show');
//     }
//   });
// });

// Close the dropdown on click outside
// window.addEventListener('click', function(event) {
//   dropdownToggles.forEach(toggle => {
//     const submenu = toggle.nextElementSibling;
//     if (submenu && !submenu.contains(event.target) && !toggle.contains(event.target)) {
//       submenu.classList.remove('show');
//     }
//   });
// });







// ----------------------------------------------------------------------------------
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

// ------------------------------------------------------------------------

const tab = document.querySelectorAll('.nav-bar-menu-items a');
// console.log(tab);



tab.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        removeActive();
        tab.classList.add('active-menu');
        
    });
})

function removeActive() {
    tab.forEach((tab)=>{
        tab.classList.remove('active-menu');
    })
}

// -------------------------------------------------------------------
// top-category swiper
const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    loop:true,
    pagination: {
        el: ' .dots',
        type: 'bullets',
        clickable: true,
      },
    breakpoints:{
        768:{
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 4,
            
        }
    },
   
  });

//   --------------------------------------------------------------------


  const instractours_swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: ' .dots_container',
        type: 'bullets',
        clickable: true,
    },

    
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup:2
            
        },
    
        1024: {
            slidesPerView: 4,
            slidesPerGroup:4
        }
    }
});

// ---------------------------------------------------------------------------
const trusted_swiper = new Swiper('.trusted-swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
      },
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
            
        },
    
        1024: {
            slidesPerView: 4,
        }
    }
});
  
  
  
 

