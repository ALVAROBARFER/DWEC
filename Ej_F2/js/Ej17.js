function diferenciaAbsoluta(){

    let num = prompt("Introduzca un número:");

    let diferencia = num - 19;

    if(diferencia < 0){

    let diferenciaAbs = -diferencia;

    alert(`La diferencia absoluta es ${diferenciaAbs}`);
    } else {

        diferenciaAbs = diferencia;

        alert(`La diferencia absoluta es ${diferenciaAbs}`);
    }

    if(num > 19){

        let triple = diferenciaAbs * 3;

        alert(`El triple de la diferencia absoluta es ${triple}`);
    }

}