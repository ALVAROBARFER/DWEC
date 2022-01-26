function mayus(){

    let cadena = prompt("Introduzca una frase:");

    let arrayCadena=cadena.split(' ');

    for(let i = 0;i< arrayCadena.length;i++){

        let palabra = arrayCadena[i];

        let letra = palabra.toUpperCase().charAt(0);

        let residuo = arrayCadena[i].slice(1);

        document.write(`${letra}${residuo} `);
    }

    
}