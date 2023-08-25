const Characters = document.querySelectorAll(".Principal-aside div")

const PrincipalImage = document.querySelector(".Principal-Img")
const PrincipalInfo = document.querySelector("#principalInfo")
const BtnMenu = document.querySelector(".Menu-btn")
const MobileMenu = document.querySelector(".Container-mobile")
const closeMenuMob = document.querySelector(".Mobile-close")
const Cortana = document.querySelector(".Principal-cortana")
const BotonScroll = document.querySelector(".Button-scroll")
const BotonLogin = document.querySelector(".Desktop-boton")
const LoginMenu = document.querySelector(".Container-login")

const characterList = []
characterList.push({
    image : 'https://i.postimg.cc/3NPZ8tvH/Master-chief-2-lg.jpg',
    text : "El Suboficial Jefe Maestro John-117, es un SPARTAN-II de la Armada del UNSC"
})
characterList.push({
    image : 'https://i.postimg.cc/bvTLx0KQ/Spartan-2-lg.jpg',
    text : "Miembros provenientes del proyecto Spartan en el que se trataba de crear soldados mucho más adaptados y resistentes que cualquier marine de la UNSC"
})
characterList.push({
    image : 'https://i.postimg.cc/50K3G49y/Covenant-2-lg.jpg',
    text : "Es una raza militar extraterrestre que alguna vez dirigió el ejército Covenant"
})
characterList.push({
    image : 'https://i.postimg.cc/X7nZLZZV/Brute-2-md.jpg',
    text : "Es una especie agresiva de mamíferos bípedos que se unió al Covenant poco antes de la guerra contra la humanidad."
})

Characters.forEach((eachImg,index) => {
  
    Characters[index].addEventListener("click",()=>{
        PrincipalImage.setAttribute('src',characterList[index].image)
        PrincipalInfo.textContent = characterList[index].text  
        borderGrey(Characters)
        Characters[index].style.border = "1.8rem solid var(--white)";
        Cortana.style.opacity = "0.2"  
    })

})

BtnMenu.addEventListener("click",menuMobile)
closeMenuMob.addEventListener("click",closeMenu)
BotonScroll.addEventListener("click", scrollTop)
BotonLogin.addEventListener("click",openLogin)
window.addEventListener("scroll", isTop)


function openLogin(){
    LoginMenu.classList.toggle("loginActive")
}

function isTop() {
    if (window.scrollY <= 400){
      BotonScroll.style.display = "none";
       }
       else{
      BotonScroll.style.display = "block";
    }
  }

function scrollTop() {
    window.scrollTo(0, 0);
  }
  
function menuMobile(){
    MobileMenu.classList.add("menuActive")
}

function closeMenu(){
    MobileMenu.classList.remove("menuActive")
}

function borderGrey (array){
    for(let ch of array) {
        ch.style.border= "1rem solid var(--grey)"; 
    }
}
