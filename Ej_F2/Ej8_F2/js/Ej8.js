function mostrarNumAleatorio(){

    let continuar = true;
    while(continuar){

        function numAleatorio(){
            let result = Math.floor(Math.random() * 10) + 1;
    
            return result;
        }
    
        let numALe = numAleatorio();
    
        let num = prompt('Introduzca un número entre 1 y 10:');
        
        console.log(num);
        
        if((isNaN(num)) || (num < 1) || (num > 10)){
    
            document.querySelector('#caja').insertAdjacentHTML("beforeend", "<p>Por favor, introduzca un número entre 1 y 10.</p>");
            continuar = false;
    
        } else {
            if(num == numALe){
                document.querySelector('#caja').insertAdjacentHTML("beforeend", `<p>Genial! has acertado con ${num}!</p>`);
                continuar = false;
            } else {
                document.querySelector('#caja').insertAdjacentHTML("beforeend", `<p>Vaya! no has acertado con ${num}!. El número era ${numALe}</p>`);
                continuar = false;
            }
        }

    }
    
}

