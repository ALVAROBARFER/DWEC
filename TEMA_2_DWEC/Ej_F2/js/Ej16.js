function numerosIguales(){

    let num1 = prompt("Introduzca el primer número:");
    let num2 = prompt("Introduzca el segundo número:");

    let suma = parseInt(num1) + parseInt(num2);

    alert(`${num1} + ${num2} = ${suma}`);

    if(num1 == num2){

        let triple = suma * 3;

        alert(`El triple de la suma es ${triple}`);
    }
}