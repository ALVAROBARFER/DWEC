function contarPalabra(){

    let frase = prompt("Introduzca una frase:");

    let palabra = prompt("Introduzca una palabra para buscar:");

    let arrayPalabras = frase.split(' ');

    let numPalabras = 0;
    
    for(let i =0; i<arrayPalabras.length;i++){

        if(arrayPalabras[i] == palabra){
            numPalabras++
        }
    }

    document.write(`Hay ${numPalabras} palabras ${palabra} en la frase.`)
}