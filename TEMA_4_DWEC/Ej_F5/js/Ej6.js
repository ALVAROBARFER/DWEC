window.onload = mostrarTeclas;

function mostrarTeclas() {
    document.getElementById("texto").addEventListener('keydown', function(event){

        if(event.ctrlKey) {

            event.preventDefault();
          
            document.getElementById("caja").insertAdjacentHTML("beforeend", `<p>${event.key}</p>`); 
          
        } else {

        
        if(event.altKey) {

            event.preventDefault();
         
            document.getElementById("caja").insertAdjacentHTML("beforeend", `<p>${event.key}</p>`);
          
        } else {

        
        if(event.shiftKey) {

            event.preventDefault();
          
            document.getElementById("caja").insertAdjacentHTML("beforeend", `<p>${event.key}</p>`);

          } else {

            event.preventDefault();

            document.getElementById("caja").insertAdjacentHTML("beforeend", `${event.key}`);
          }
        }
        }
        
      }); 
}