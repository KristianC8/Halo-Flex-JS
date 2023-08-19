const Pj1 =  document.querySelector(".Principal-pj--1")
const Pj2 =  document.querySelector(".Principal-pj--2")
const Pj3 =  document.querySelector(".Principal-pj--3")
const Pj4 =  document.querySelector(".Principal-pj--4")
const PrincipalImage = document.querySelector(".Principal-Img")
const PrincipalInfo = document.querySelector("#principalInfo")
const BtnMenu = document.querySelector(".Menu-btn")
const MobileMenu = document.querySelector(".Container-mobile")
const closeMenuMob = document.querySelector(".Mobile-close")


Pj1.addEventListener("click",imagenP1)
Pj2.addEventListener("click",imagenP2)
Pj3.addEventListener("click",imagenP3)
Pj4.addEventListener("click",imagenP4)

BtnMenu.addEventListener("click",menuMobile)
closeMenuMob.addEventListener("click",closeMenu)


function imagenP1(){
    PrincipalImage.setAttribute('src','https://i.postimg.cc/3NPZ8tvH/Master-chief-2-lg.jpg')
    PrincipalInfo.textContent = "El Suboficial Jefe Maestro John-117, es un SPARTAN-II de la Armada del UNSC"
}

function imagenP2(){
    PrincipalImage.setAttribute('src','https://i.postimg.cc/bvTLx0KQ/Spartan-2-lg.jpg')
    PrincipalInfo.textContent = " Miembros provenientes del proyecto Spartan en el que se trataba de crear soldados mucho más adaptados y resistentes que cualquier marine de la UNSC"
    
}

function imagenP3(){
    PrincipalImage.setAttribute('src','https://i.postimg.cc/50K3G49y/Covenant-2-lg.jpg')
    PrincipalInfo.textContent = "Es una raza militar extraterrestre que alguna vez dirigió el ejército Covenant"
}

function imagenP4(){
    PrincipalImage.setAttribute('src','https://i.postimg.cc/SsxdD2hH/Brute-2-lg.jpg')
    PrincipalInfo.textContent = "Es una especie agresiva de mamíferos bípedos que se unió al Covenant poco antes de la guerra contra la humanidad."
}

function menuMobile(){
    MobileMenu.classList.add("active")
}

function closeMenu(){
    MobileMenu.classList.remove("active")
}