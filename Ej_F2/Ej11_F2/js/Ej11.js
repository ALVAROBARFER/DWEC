function celsiusFahrenheit(){

    let cel = prompt("Introduzca la temperatura en Celsius:");

    let f = 0;

    if(isNaN(cel)){
        alert("Introduzca un número, por favor.");
    } else {

        f = ((cel/5)*9)+32;
    }

    alert(`${cel} ºC es ${f} ºF `);
}

function fahrenheitCelsius(){

    let far = prompt("Introduzca la temperatura en Fahrenheit:");

    let c = 0;

    if(isNaN(far)){
        alert("Introduzca un número, por favor.");
    } else {

        c = ((far-32)/9)*5;
    }

    alert(`${far} ºC es ${c} ºF `);
}