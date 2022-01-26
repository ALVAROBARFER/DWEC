function numerosRango(){

    let num1 = prompt("Introduzca el primer número:");
    let num2 = prompt("Introduzca el segundo número:");

    if(((num1 >= 50) && (num1 <= 99)) && ((num2 >= 50) && (num2 <= 99))){

        alert(`Los números ${num1} y ${num2} estan dentro del rango.`);
    } else {
        alert(`Los números ${num1} y ${num2} no estan dentro del rango.`);
    }
}