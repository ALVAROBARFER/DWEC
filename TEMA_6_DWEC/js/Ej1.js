window.onload = comprobarDNI;

function comprobarDNI(){

    let dni = "";
    let letra = "";
    let parteNumerica = 0;
    let parteLetra = "";
    let longitud = 0;
    let resto = 0;
    let correcto = false;

    const input = document.getElementById("dniTexto");
    const reExp = /a|b|c|d|e|f|g|h|j|k|l|m|1|n|p|q/;
    const letras = "trwagmyfpdxbnjzsqvhlcke";

    input.addEventListener('focusout', (event) =>{

    dni = input.value;

    longitud = dni.length;

    if(longitud > 9){

        alert(`el dni introducido ${dni} contiene mas de 9 caracteres`);
    } else {
        if(longitud < 9){

            alert(`el dni introducido ${dni} contiene menos de 9 caracteres`);
        } else {
        
                    parteNumerica = dni.substr(0,(longitud - 1));
        
                    parteLetra = dni.substr((longitud - 1), longitud);
        
                    if (reExp.test(parteNumerica)){
        
                        alert(`Los 8 primeros caracteres del dni ${dni} deben ser números.`);
                    } else {

                        if (!reExp.test(parteLetra)){
        
                            alert(`El último caracter del dni ${dni} debe ser una letra (excepto I, O y Ñ).`);
                        } else {
            
                            resto = Math.round((parseFloat(parseInt(parteNumerica) / 23) - (parseInt(parseInt(parteNumerica) / 23))) * 23);
                            
                            for(let i = 0 ; i <= 22; i++){
                                
                                letra = letras.charAt(i);
                            }

                            if(parteLetra.toLowerCase() != letra){

                                alert("La letra del dni es incorrecta.")
                            } else {

                                correcto = true;
                            }
                        }
                    }
                }
            }   
        });

        if (!correcto){

            document.getElementById("dniBoton").addEventListener('click', (event)=>{

                alert(`El dni ${dni} es incorrecto. Envio cancelado`);
            });
        }
}