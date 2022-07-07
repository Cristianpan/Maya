const ul = document.querySelector(".navegacion__ul");
const header = document.querySelector(".header");
const button = document.querySelector(".navegacion__button");
const buttonLine = document.querySelectorAll(".navegacion__button .line")
const fondo = document.querySelector(".navegacion__fondo");
const tradiciones = document.querySelector(".tradiciones");
let tiempo = 500;
let buttonIsActivado = false;


window.addEventListener("resize",()=> {
    buttonIsActivado = false; 
    modificiarNav(buttonIsActivado);
    activarButton(buttonIsActivado);
});

window.addEventListener("scroll", ()=> {
    if(isInViewport(tradiciones)){
        header.style.background = "#B7AFEE";
    } else {
        header.removeAttribute("style")
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
        console.log(buttonIsActivado);
        modificiarNav(buttonIsActivado);
        activarButton(buttonIsActivado);
    } else {
        buttonIsActivado = false;
        modificiarNav(buttonIsActivado);
        activarButton(buttonIsActivado);
    }
});

function activarButton(activado){
    if (activado == true){
        buttonLine[0].style.transform = "translateY(6.5px) rotate(45deg)"
        buttonLine[1].style.transform = "translateY(-6.5px) rotate(-45deg)";
    } else {
        buttonLine[0].removeAttribute("style");
        buttonLine[1].removeAttribute("style");
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


