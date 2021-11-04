/*
mayor de dos fechas
dada una fecha mayor de 18
diferencia en dias de dos fechas
*/



function mostrarFechaMayor(){

    fecha1 = prompt("Introduzca la primera fecha");
    fecha2 = prompt("Introduzca la segunda fecha");

    date1 = new Date(fecha1);
    date2 = new Date(fecha2);

function fechaMayor(dat1, dat2){
    let anio1 = date1.getYear();
    let mes1 = date1.getMonth();
    let dia1 = date1.getDate();
    
    let anio2 = date2.getYear();
    let mes2 = date2.getMonth();
    let dia2 = date2.getDate();

    console.log(anio1);
    console.log(anio2);

    if(anio1 < anio2){

        result = `La fecha mayor es ${date2}.`;

        console.log(date2)
    
    } else {
        if (anio1 == anio2){
            
            if(mes1 < mes2){
    
                result = `La fecha mayor es ${date2}.`;

            } else {

                if(mes1 == mes2){
    
                    if(dia1 < dia2){
    
                        result = `La fecha mayor es ${date2}.`;

                    } else {

                        if(dia1 == dia2){

                            result = `La fecha ${date1} y ${date2} son la misma.`;

                        } else {
                            
                            result = `La fecha mayor es ${date1}.`;
                        }
                    }
                } else {
                    
                    result = `La fecha mayor es ${date1}.`;
                }
            }
    
        } else {
            
            result = `La fecha mayor es ${date1}.`;
        }
    }

    return result;
}

    alert(fechaMayor(date1,date2));
}

function mostrarMayorEdad(){

    fecha = prompt("Introduzca una fecha");

    date = new Date(fecha);

function calcularEdad(fecha_nacimiento){

   
    let hoy = new Date();
    let nacimiento = new Date(fecha_nacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())){

        edad--;
    }
    return edad;
}
let edadFinal = calcularEdad(date);

if(edadFinal >= 18){

    alert(`Tu edad es ${edadFinal}. Eres mayor de edad!`);
} else {
    alert(`Tu edad es ${edadFinal}. Eres menor de edad!`);
}

}


function mostrarDiferenciaDias(){

    fecha1 = prompt("Introduzca la primera fecha");
    fecha2 = prompt("Introduzca la segunda fecha");

    date1 = new Date(fecha1).getTime();
    date2 = new Date(fecha2).getTime();

    let dif = (date1 - date2)/(1000*60*60*24);

    alert(`La diferencia en días es ${dif}`)
}