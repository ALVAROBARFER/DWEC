/*
mayor de dos fechas
dada una fecha mayor de 18
diferencia en dias de dos fechas
*/
date1 = new Date("Novemver 4, 2021 14:30:56");
date2 = new Date("Novemver 20, 2022 11:15:06");

console.log(date1)
console.log(date2)


function fechaMayor(dat1 , dat2){
    let anio1 = date1.getYear();
    let mes1 = date1.getMonth();
    let dia1 = date1.getDate();
    
    let anio2 = date2.getYear();
    let mes2 = date2.getMonth();
    let dia2 = date2.getDate();

    if(anio1 < anio2){

        console.log(`La fecha ${date2} es mayor.`);
    
    } else {
        if (anio1 = anio2){
            
            if(mes1 < mes2){
    
                console.log(`La fecha ${date2} es mayor.`);
            } else {
                if(mes1 = mes2){
    
                    if(dia1 < dia2){
    
                        console.log(`La fecha ${date2} es mayor.`)
                    } else {
                        if(dia1=dia2){
                            console.log(`La fecha ${date1} y ${date2} son la misma.`)
                        } else {
                            console.log(`La fecha ${date1} es mayor.`)
                        }
                    }
                } else {
                    console.log(`La fecha ${date1} es mayor.`);
                }
            }
    
        } else {
            
                console.log(`La fecha ${date1} es mayor.`);
        }
    }
}

fechaMayor(date1,date2);

date3 = new Date("Novemver 20, 2004 11:15:06");

function mayorDe18(dat1){

    let fechaActual = date3.getFullYear();
    let anio = date3.getYear();

    let edad = fechaActual - anio;
    
    console.log(fechaActual);
    console.log(anio);

    console.log(edad);

}

mayorDe18(date3);

cad1 = date1.toDateString();
cad2 = date2.toDateString();



