window.onload = iniciar;

function iniciar(){

    const elemento1 = document.getElementById("select1");
    const elemento2 = document.getElementById("select2");
    const enviarBoton = document.getElementById("enviar");

    elemento1.addEventListener('change', (event)=> {

        let selElem1 = elemento1.selectedIndex;
        let alicante = ["Alicante Capital","Elche","Orihuela"];
        let castellon = ["Castellon Capital","Oropesa","Vinaroz"];
        let valencia = ["Valencia Capital","Torrent","Mislata"];
        let i = 0;

            if(selElem1 == 0){

                for(i = 0; i < alicante.length; i++){

                    document.getElementById("opcion"+ (i+1)).innerHTML = '<option value="1" id="opcion1">'+ alicante[i] +'</option>';
                }
                
            } else {

                if(selElem1 == 1){

                    for(i = 0; i < alicante.length; i++){
    
                        document.getElementById("opcion"+ (i+1)).innerHTML = '<option value="1" id="opcion1">'+ castellon[i] +'</option>';
                    }
                    
                } else {

                    if(selElem1 == 2){

                        for(i = 0; i < alicante.length; i++){
        
                            document.getElementById("opcion"+ (i+1)).innerHTML = '<option value="1" id="opcion1">'+ valencia[i] +'</option>';
                        }
                        
                    }
                }
            }
    });

    enviarBoton.addEventListener('click', (event)=>{

        let provSelect = elemento1.selectedIndex;
        let ciudSelect = elemento2.selectedIndex;

        if((provSelect == 3) | (ciudSelect == 3)){

            alert("Hay elementos sin seleccionar.")
        }
    })

}