const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn-burger');

let showMenu =false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        burger.classList.add('open');
        showMenu = true;
    } else{
        burger.classList.remove('open');
        showMenu =false;
    }
    
}


//     const navLinks = document.querySelectorAll('.nav-links li');




//     burger.addEventListener('click', ()=>{
//         nav.classList.toggle('nav-active');

//         navLinks.forEach((link,index) => {
//             if(link.style.animation){
//                 link.style.animation = '';
//             }else{
//                 link.style.animation=`navLinkFade 0.5s ease forwards${index/5+0.5}s`;
//             }
//         });
        
//         burger.classList.toggle("toggle");
//         burger.classList.toggle('open');
//         nav-navLinks.fadeToggle('open');
//     });

// }

// navSlide();
