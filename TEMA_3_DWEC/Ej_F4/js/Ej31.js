function maxNum(){
    let num1 = prompt("Introduzca un número");
    let num2 = prompt("Introduzca un número");
    let num3 = prompt("Introduzca un número");

    let max = Math.max(num1,num2,num3);

    document.write(`EL máximo es ${max}`)
}