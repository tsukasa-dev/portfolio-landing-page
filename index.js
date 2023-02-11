const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})