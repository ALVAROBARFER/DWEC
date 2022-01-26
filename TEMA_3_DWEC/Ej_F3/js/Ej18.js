function contarSubcadena(){

    let cadena = prompt("Introduzca una cadena:");

    let subcadena = prompt("Introduzca una subcadena:");

    let numSubcadenas = cadena.split(subcadena).length - 1;

    document.write(`Hay ${numSubcadenas} subcadenas ${subcadena} en la cadena.`);
}