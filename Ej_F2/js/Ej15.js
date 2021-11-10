function devolverNumero(){

    let num = prompt("Introduzca un número:");

    let resta = 13 - num;

    alert(`El resultado de la resta es ${resta}`);

    if(num > 13){

        let doble = (-resta) * 2;

        alert(`El doble de la diferencia absoluta es ${doble}`);
    } else {

        alert('El número era menor o igual a 13.');
    }

    
}