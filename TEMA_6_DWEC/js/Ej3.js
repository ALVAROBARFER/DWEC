window.onload = anagrama;

function anagrama(){

    const elemPalabra1 = document.getElementById("palabra1");
    const elemPalabra2 = document.getElementById("palabra2");
    const boton = document.getElementById("comprobar");

    let regExpVar = "";
    let palabra1 = "";
    let palabra2 = "";
    let regExp;
    let letrita = "";

    boton.addEventListener('click', (event)=>{

        palabra1 = elemPalabra1.value;
        palabra2 = elemPalabra2.value;
        

        for(let i = 0; i < palabra1.length; i++){

            letrita = String(palabra1).charAt(i);

            if( i < (palabra1.length - 1)){

                regExpVar = regExpVar.concat(letrita);    
            } else {

                regExpVar = regExpVar.concat(letrita);
            }
        }

        regExp = new RegExp(`[${regExpVar}]`, "gi");

        if(palabra2.match(regExp).length == palabra1.length){

            alert(`La palabra ${palabra1} es un anagrama de ${palabra2}.`)
        } else {

            alert(`La palabra ${palabra1} no es un anagrama de ${palabra2}.`)
        }

        regExpVar = "";
    });
}