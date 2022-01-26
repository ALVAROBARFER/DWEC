function mostrarProducto(){

    let tamanoaArray = prompt("Introduzca la longitud del array");

    let array = [tamanoaArray];
    
    for(let i=0;i<tamanoaArray;i++){

        array[i] = prompt(`Introduzca el valor ${i} del array.`);
    }

    function productoNumeros(matriz){

        let producto = 1;

         for(let i = 0;i<matriz.length;i++){

            producto = producto * matriz[i];
         }

         document.write(`El producto es ${producto}`);
    }
    productoNumeros(array);
}