function mostrarRepetido(){

    let tamanoaArray = prompt("Introduzca la longitud del array");

    let array = [tamanoaArray];
    
    for(let i=0;i<tamanoaArray;i++){

        array[i] = prompt(`Introduzca el valor ${i} del array.`);
    }

    function calcularRepetido(matriz){
        let elem;
        let m = 0;
        let mf = 1;
        for (let j = 0; j < array.length; j++) {
            for (let k = j; k < array.length; k++) {
              if (array[j] == array[k]) m++;
              if (mf < m) {
                mf = m;
                elem = array[j];
              }
            }
          
            m = 0;
          }
         document.write(`El elemento mas repetido es ${elem} con ${mf} veces.`);
    }
    calcularRepetido(array);
}