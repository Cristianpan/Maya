const ul = document.querySelector(".navegacion__ul");
const header = document.querySelector(".header");
const buttonLine = document.querySelectorAll(".navegacion__button .line")
const fondo = document.querySelector(".navegacion__fondo");
const tradiciones = document.querySelector(".tradiciones");
let buttonIsActivado = false;


window.addEventListener("resize",()=> {
    buttonIsActivado = false; 
    modificiarNav(buttonIsActivado);
});

window.addEventListener("scroll", ()=> {
    if(isInViewport(tradiciones)){
        header.style.background = "#B7AFEE";
    } else {
        header.removeAttribute("style")
    }
});


function activarBotton() {
    if (buttonIsActivado == false){
        buttonIsActivado = true;
        modificiarNav(buttonIsActivado);
    } else {
        buttonIsActivado = false;
        modificiarNav(buttonIsActivado);
    }
}

function ocultarEnlaces() {
    if (window.innerWidth < 768){
        modificiarNav();
        buttonIsActivado = false;
    }
}

function modificiarNav(isActivado){
    if (isActivado == true){
        ul.style.display = "block";
        fondo.style.display = "block";
    } else {
        ul.removeAttribute("style");
        fondo.removeAttribute("style");
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    let top = rect.top;
    top = Math.floor(top);
    return(top <= 70 && top > -300)
}


