function caracteres(){

    let cadena1 = prompt("Introduzca una cadena:");

    let posicion1 = prompt("Introduzca la posición comienzo:");
    let posicion2 = prompt("Introduzca la posición final:");

    let cadena2 = cadena1.slice((posicion1-1),(posicion2));

    document.write(`la cadena resultante es ${cadena2}`)
}