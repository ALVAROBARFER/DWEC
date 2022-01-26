function numeros50(){

    let num1 = prompt("Introduzca el primer número:");
    let num2 = prompt("Introduzca el segundo número:");

    let suma = parseInt(num1) + parseInt(num2);

    let flag = false;

    if((num1 == 50) || (num2 == 50) || (suma == 50)){

            flag = true;
    }

    if(flag){
        alert(`${num1};${num2};${suma}: Compruebe la consola.`);
        console.log(flag);
    } else {
        alert(`${num1};${num2};${suma}: Compruebe la consola.`);
        console.log(flag);
    }
}