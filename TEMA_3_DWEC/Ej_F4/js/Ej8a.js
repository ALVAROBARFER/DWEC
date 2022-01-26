function difDias(){
    let fecha1 = new Date('2021-11-17').getTime();
    let fecha2    = new Date('2030-11-4').getTime();



    let diff = fecha2 - fecha1;

    let dias = diff/(1000*60*60*24);

    document.write(`Hay ${dias} de diferencia`);
}