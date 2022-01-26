function ocultarMail(){

    let mail = prompt("Introduzca su e-mail:");

    let arrayMail=mail.split('@');

    nomMail = arrayMail[0];
    finalMail = arrayMail[1];

    let trozoMail = nomMail.slice(0,3);

    document.write(`la e-mail es ${trozoMail}..@${finalMail}`)
}