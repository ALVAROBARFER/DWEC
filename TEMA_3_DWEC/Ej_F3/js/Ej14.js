function insertCadena(){

    let cadena1 = prompt("Introduzca la cadena a insertar:");

    let cadena2 = prompt("Introduzca la cadena donde insertar la primera:");

    let posicion = prompt("Introduzca una posición de la cadena:");

    let cadenaFinal = cadena2.slice(posicion);

    let cadenaInicial = cadena2.substr(0,posicion);

    let cadenaCompleta = cadenaInicial + cadena1 + cadenaFinal;

    document.write(`${cadenaCompleta}`);
}