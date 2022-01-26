function mostrarNum(){

    let tamanoaArray = prompt("Introduzca la longitud del array");

    let array = [tamanoaArray];
    
    for(let i=0;i<tamanoaArray;i++){

        array[i] = prompt(`Introduzca el valor ${i} del array.`);
    }

    function sumaNumeros(matriz){

        let suma = 0;

         for(let i = 0;i<matriz.length;i++){

            suma = parseInt(suma) + parseInt(matriz[i]);
         }

         document.write(`La suma es ${suma}`);
    }
    sumaNumeros(array);
}