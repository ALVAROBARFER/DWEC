window.onload = inicio;
function inicio(){
    document.querySelector('#boton').onclick = obtenerCaracteres;
}

function obtenerCaracteres(){
    let cadena = prompt("Introduzca una cadena:");

    document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Para salir escriba: salir</p>');

    let numero = prompt("Introduzca un numero de caracteres:");

    for(let i=1;i<=numero;i++){

        let caracter = cadena.charAt(i -1);

        document.querySelector('#caja').insertAdjacentHTML("beforeend", `<p>El caracter ${i} es ${caracter}.</p>`);
    }
}