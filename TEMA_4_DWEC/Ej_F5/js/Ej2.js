document.getElementById("cuadro").addEventListener("click", cambiarFondo1, false);
document.getElementById("cuadro").addEventListener("input", cambiarFondo2, false);
document.getElementById("cuadro").addEventListener("mousemove", cambiarFondo3, false);
        
function cambiarFondo1(){
    document.getElementById("cuadro").style.backgroundColor = "yellow";
}
function cambiarFondo2(){
    document.getElementById("cuadro").style.backgroundColor = "blue";
}
function cambiarFondo3(){
    document.getElementById("cuadro").style.backgroundColor = "white";
}