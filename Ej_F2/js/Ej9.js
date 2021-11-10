function mostrarDiasNavidad(){
    let fecha2 = "2021-12-24";
    
    date1 = new Date().getTime();
    date2 = new Date(fecha2).getTime();

    let dif = -(date1 - date2)/(1000*60*60*24);

    alert(`Quedan en días es ${dif} para Navidad.`)
}