window.onload=comprobarEmail;

function comprobarEmail(){

    const input = document.getElementById("emailTexto");
    const boton = document.getElementById("emailBoton");
    const regExp1 = /@/;
    const arrayServidores = ["gmail.com","hotmail.com","yahoo.es","outlook.com","gmx.es","gmx.com","protonmail.com","pm.me"];

    let email = "";
    let arrayEmail = "";
    let servidor = "";
    let nombre = "";
    let sinNomnre = /^@/;
    let valido = false;

    input.addEventListener('focusout', (event)=>{

        email = input.value;

        if(!regExp1.test(email)){

            alert(`El email ${email} debe seguir el formato  'nombre@servidor.loquesea`);
        } else {

            arrayEmail = email.split("@");

            if (sinNomnre.test(email)){

                alert(`El email ${email} debe seguir el formato  'nombre@servidor.loquesea`);
            } else {

            servidor = arrayEmail[1];

            for(let i = 0; i < arrayServidores.length; i++){

                if(servidor == arrayServidores[i]){

                    valido = true;
                    break;
                }
            }

            if(!valido){

                alert(`El servidor del email ${email} no es válido.`);
            }
        }
        }
    });

    boton.addEventListener('click', (event) => {

        if(!valido){

            alert(`No se pudo enviar el email. No es válido.`)
        }
    });
}