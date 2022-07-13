const seccion = document.querySelector(".tradiciones__informacion"); 
const container = document.querySelectorAll(".tradiciones__target"); 
const button = document.querySelectorAll(".scroll-button") 
let numberSeccion = 0, anchoTarget; 




function scrollRightNx (){
    if (numberSeccion < obtenerNumberTargets()){ 
        numberSeccion++;   
        anchoTarget = obtenerAnchoTarget(); 
        seccion.scroll(seccion.scrollLeft + anchoTarget, 0); 
    } 
}

function scrollLeftNx() {
    if(numberSeccion >= 0) {
        numberSeccion--;  
        anchoTarget = obtenerAnchoTarget(); 
        seccion.scroll(seccion.scrollLeft - anchoTarget, 0);  
    }
}

function obtenerAnchoTarget(){
    if (window.innerWidth < 768){
        anchoTarget = 360;  
    } else {
        anchoTarget = 390;  
    }
    return anchoTarget; 
}

function obtenerNumberTargets(){
    if (window.innerWidth < 768){
        numberTargets = 5;  
    } else {
        numberTargets = 3;  
    }
    return numberTargets; 
}
