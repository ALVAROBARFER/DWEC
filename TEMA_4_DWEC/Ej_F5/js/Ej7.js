window.onload = moverCaja;

function moverCaja(){

    let modificador = 4;

    const caja = document.getElementById("caja");

    let mover = document.addEventListener('keydown', function(event){

        const {style} = caja;

        switch (event.key) {
            case 'ArrowUp': style.top = `${parseInt(style.top) - modificador}px`; break;
            case 'ArrowDown': style.top = `${parseInt(style.top) + modificador}px`; break;
            case 'ArrowLeft': style.left = `${parseInt(style.left) - modificador}px`; break;
            case 'ArrowRight': style.left = `${parseInt(style.left) + modificador}px`; break;
        }
    });
}