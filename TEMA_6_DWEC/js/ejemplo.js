window.onload = ejemplo;

function ejemplo(){
let elemento=document.getElementById("aprobar");
for(let i=0;i<elemento.options.length;i++){
alert("Valor de la opción "+elemento.options[i].value);
}
let sel=elemento.selectedIndex;
alert("El valor de la opción seleccionada es"+elemento.options[sel].value+" y el texto asociado es"+elemento.options[sel].text);
// Cambiamos el índice seleccionado
elemento.selectedIndex=0;
}