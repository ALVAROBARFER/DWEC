window.onload = mostrarClicks;

function mostrarClicks(){
    document.addEventListener("click", mensaje1);
    document.addEventListener("contextmenu", mensaje2);

    function mensaje1() {
        document.getElementById("caja").insertAdjacentHTML("beforeend", "<p>Ha hecho click con el botón izquierdo del ratón</p><br>");
    }
    function mensaje2() {
        document.getElementById("caja").insertAdjacentHTML("beforeend", "<p>Ha hecho click con el botón derecho del ratón</p><br>");
    }
}