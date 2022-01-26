function sumaArray(){
    let arrayTamano = prompt("Elija el tamaño del array:");
    let array = [arrayTamano];
    let arrayValores = 0;
    let suma = 0;
    for(let i =0;i<arrayTamano;i++){

        array[i] = prompt(`Introduzca el valor de la posición ${i}`); 
    }

    for(let j =0;j< array.length;j++){

        suma = parseInt(suma) + parseInt(array[j]);
    }

    document.write(`La suma de los valores del array es ${suma}`)
}