function mostrarBorrado(){

    let tamanoaArray = prompt("Introduzca la longitud del array");

    let array = [tamanoaArray];
    
    for(let i=0;i<tamanoaArray;i++){

        array[i] = prompt(`Introduzca el valor ${i} del array.`);
    }

    let valorBorrar = prompt("Introduzca el valor a borrar")

    function borrarElemento(matriz, valor){

        let pos = 0;
        let borrado;

        console.log(valor)
        
        for( let j = 0 ; j < matriz.length; j++){

            console.log(matriz[j])

            if(matriz[j] == valor){

                pos = j;
                borrado = matriz.splice(pos, 1)
            }
        }
       

         document.write(`El elemento borrado es <${borrado}> en la posición <${pos}>. `);
         document.write(`Array resultante: ${matriz}`)
    }
    borrarElemento(array, valorBorrar);
}