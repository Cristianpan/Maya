const ul = document.querySelector(".navegacion__ul"); 
const header = document.querySelector(".header"); 
const button = document.querySelector(".navegacion__button");
const buttonLine = document.querySelectorAll(".navegacion__button .line")  
const fondo = document.querySelector(".navegacion__fondo"); 
const tradiciones = document.querySelector(".tradiciones"); 
let tiempo = 500;
let buttonIsActivado = false; 


window.addEventListener("resize",()=> {
    if (window.matchMedia("(min-width: 768px)").matches) {
        modificiarNav("flex",);    
        buttonIsActivado = false; 
        activarButton(buttonIsActivado); 
    } else {
        modificiarNav();
    }
});

window.addEventListener("scroll", ()=> { 
    if(isInViewport(tradiciones)){
        header.style.background = "#B7AFEE"; 
    } else {
        header.style.background = "white";
    }
}); 

document.addEventListener("click", (event) => {
    const enlace = event.target;
    if (window.innerWidth < 768){
        if (enlace.matches('.navegacion__enlace')) {
            modificiarNav(); 
            buttonIsActivado = false;
            activarButton(buttonIsActivado); 
        }
    }
});

button.addEventListener("click", ()=>{
    if (buttonIsActivado == false){
        buttonIsActivado = true; 
        modificiarNav("block", "block");  
        activarButton(buttonIsActivado);
    } else {
        buttonIsActivado = false; 
        modificiarNav(); 
        activarButton(buttonIsActivado); 
    }
}); 

function activarButton(activado){
    if (activado == true){
        buttonLine[0].style.transform = "translateY(6.5px) rotate(45deg)"
        buttonLine[1].style.transform = "translateY(-6.5px) rotate(-45deg)"; 
    } else {
        buttonLine[0].style.transform = "none"; 
        buttonLine[1].style.transform = "none"; 
    }
}

function modificiarNav(displayUl = "none", displayFondo = "none"){
    ul.style.display = displayUl; 
    fondo.style.display = displayFondo; 
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    let top = rect.top; 
    top = Math.floor(top); 
    return(top <= 0 && top > -300)
}


