function mostrarCadena(){

    let tamanoaArray = prompt("Introduzca la longitud del array");

    let array = [tamanoaArray];
    
    for(let i=0;i<tamanoaArray;i++){

        array[i] = prompt(`Introduzca el valor ${i} del array.`);
    }

    function sumaNumeros(matriz){

        let suma = '';

         for(let i = 0;i<matriz.length;i++){

            suma = suma + matriz[i];
         }

         document.write(`La suma es ${suma}`);
    }
    sumaNumeros(array);
}